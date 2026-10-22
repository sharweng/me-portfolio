/* Fresh page code online, cached fallback offline. Browser caching handles
   external fonts and Cloudinary images. Scope keeps project caches separate. */
const CACHE_PREFIX = `portfolio:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}v3`;
const PRECACHE_URLS = ['./', './index.html', './style.css', './app.js', './data.js', './favicon.svg'];
const SHELL_URLS = new Set(PRECACHE_URLS.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(PRECACHE_URLS.map(path => new Request(new URL(path, self.registration.scope), { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (!url.href.startsWith(self.registration.scope)) return;
  // Local edits should never be hidden by this worker's cache.
  if (['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) return;
  // Only cache the known page shell; leave downloads and other assets alone.
  const key = new URL(url);
  key.search = '';
  if (!SHELL_URLS.has(key.href)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(key.href);
    const controller = new AbortController();
    // Bound the wait only when an offline fallback exists.
    const timeout = cached ? setTimeout(() => controller.abort(), 3000) : null;
    try {
      const response = await fetch(new Request(request, { cache: 'no-cache', signal: controller.signal }));
      if (response.ok) {
        // Cache write failure must not discard a successful network response.
        await cache.put(key.href, response.clone()).catch(() => {});
      }
      if (response.status >= 500 && cached) return cached;
      return response;
    } catch (error) {
      if (cached) return cached;
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  })());
});
