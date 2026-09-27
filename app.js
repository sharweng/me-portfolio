/* ═══════════════════════════════════════════════════════════
   app.js — hydrates the portfolio from data.js (PORTFOLIO)
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── SVG icon library ─────────────────────────────────── */
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.8625 8.1625 6.8375 9.4875.5.0875.6875-.2125.6875-.475 0-.2375-.0125-1.025-.0125-1.8625-2.5125.4625-3.1625-.6125-3.3625-1.175-.1125-.2875-.6-1.175-1.025-1.4125-.35-.1875-.85-.65-.0125-.6625.7875-.0125 1.35.725 1.5375 1.025.9 1.5125 2.3375 1.0875 2.9125.825.0875-.65.35-1.0875.6375-1.3375-2.225-.25-4.55-1.1125-4.55-4.9375 0-1.0875.3875-1.9875 1.025-2.6875-.1-.25-.45-1.275.1-2.65 0 0 .8375-.2625 2.75 1.025.8-.225 1.65-.3375 2.5-.3375s1.7.1125 2.5.3375c1.9125-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.6375.7 1.025 1.5875 1.025 2.6875 0 3.8375-2.3375 4.6875-4.5625 4.9375.3625.3125.675.9125.675 1.85 0 1.3375-.0125 2.4125-.0125 2.75 0 .2625.1875.575.6875.475C19.1375 20.1625 22 16.425 22 12c0-5.525-4.475-10-10-10Z" fill="currentColor"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.452-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" fill="currentColor"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm3.519 0L12 11.671 18.481 6H5.52ZM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329Z" fill="currentColor"/></svg>`,
    rss: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" fill="currentColor"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" fill="currentColor"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" fill="currentColor"/></svg>`,
  };

  /* ── Utility helpers ──────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const el = tag => document.createElement(tag);

  function setInner(id, html) {
    const node = $(id);
    if (node) node.innerHTML = html;
  }

  /* ── Toast notification ───────────────────────────────── */
  let toastTimer = null;
  function showToast(msg) {
    let toast = $('portfolio-toast');
    if (!toast) {
      toast = el('div');
      toast.id = 'portfolio-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('toast-hide');
    toast.classList.add('toast-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('toast-hide');
    }, 3000);
  }

  /* ── Theme ────────────────────────────────────────────── */
  const THEME_KEY = 'portfolio-theme';
  const html = document.documentElement;

  // Ordered list of themes — label shown in the button
  const THEMES = [
    { id: 'tokyo-night',      label: 'tokyo night'      },
    { id: 'catppuccin-latte', label: 'catppuccin latte' },
    { id: 'gruvbox',          label: 'gruvbox'          },
    { id: 'rose-pine',        label: 'rosé pine'        },
    { id: 'nord',             label: 'nord'             },
    { id: 'everforest',       label: 'everforest'       },
  ];

  function applyTheme(id, silent = false) {
    const theme = THEMES.find(t => t.id === id) || THEMES[0];
    html.setAttribute('data-theme', theme.id);
    localStorage.setItem(THEME_KEY, theme.id);
    // Update button label
    const labelEl = $('theme-label');
    if (labelEl) labelEl.textContent = theme.label;
    // Mark selected option
    document.querySelectorAll('.theme-option').forEach(opt => {
      opt.setAttribute('aria-selected', opt.dataset.themeId === theme.id ? 'true' : 'false');
    });
    if (!silent) showToast(theme.label);
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const startId = (saved && THEMES.find(t => t.id === saved)) ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'tokyo-night' : 'catppuccin-latte');
    applyTheme(startId, true);
  }

  /* ── Dropdown open / close / select ──────────────────── */
  (function initThemeDropdown() {
    const picker   = $('theme-picker');
    const toggle   = $('theme-toggle');
    const dropdown = $('theme-dropdown');
    if (!picker || !toggle || !dropdown) return;

    function openDropdown() {
      picker.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      picker.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      picker.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    dropdown.addEventListener('click', (e) => {
      const opt = e.target.closest('.theme-option');
      if (!opt) return;
      applyTheme(opt.dataset.themeId);
      closeDropdown();
    });

    // Close on outside click
    document.addEventListener('click', () => closeDropdown());

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
    });
  })();

  initTheme();

  /* ── Render hero ──────────────────────────────────────── */
  function renderHero(p) {
    // Avatar
    const avatar = $('hero-avatar');
    if (p.avatar) {
      avatar.innerHTML = `<img src="${p.avatar}" alt="${p.name} avatar">`;
    } else {
      const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      avatar.textContent = initials;
    }

    // Update page title
    document.title = `${p.name} — Portfolio`;
    $('nav-brand') && ($('brand-name').textContent = p.name.toLowerCase().replace(/\s+/g, '.'));

    setInner('hero-name', escHtml(p.name));
    setInner('hero-title', escHtml(p.title));
    setInner('hero-bio', escHtml(p.bio));
    setInner('hero-location', escHtml(p.location));

    // Social links
    const linksEl = $('hero-links');
    if (!linksEl) return;

    const linkItems = p.links.map(l => `
      <a href="${l.comingSoon ? '#' : l.url}"
         class="hero-link${l.comingSoon ? ' hero-link--soon' : ''}"
         ${l.comingSoon ? '' : 'rel="noopener noreferrer" target="_blank"'}
         role="listitem"
         aria-label="${escAttr(l.label)}${l.comingSoon ? ' (coming soon)' : ''}">
        ${ICONS[l.icon] || ''}
        ${escHtml(l.label)}
        ${l.comingSoon ? '<span class="soon-badge">soon</span>' : ''}
      </a>
    `).join('');

    // Resume — always rendered next to email; greyed out with tooltip if no URL set
    const resumeHref = p.resume || '#';
    const resumeAttrs = p.resume
      ? 'target="_blank" rel="noopener noreferrer"'
      : 'aria-disabled="true" tabindex="-1"';
    const resumeClass = `hero-link hero-link--resume${p.resume ? '' : ' hero-link--soon'}`;
    const resumeItem = `
      <a href="${resumeHref}" class="${resumeClass}"
         ${resumeAttrs} role="listitem" aria-label="Open resume" id="resume-link">
        ${ICONS.link}
        resume
      </a>`;

    linksEl.innerHTML = linkItems + resumeItem;

    // Intercept coming-soon link clicks
    linksEl.querySelectorAll('.hero-link--soon').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        if (a.id === 'resume-link') showToast('No resume URL set — add it to data.js');
        else showToast('This page is currently in development');
      });
    });
  }

  /* ── Render projects ──────────────────────────────────── */
  function renderProjects(projects) {
    const grid = $('project-grid');
    if (!grid) return;

    grid.innerHTML = projects.map((p, i) => {
      // Hide stars when 0 or "0"
      const showStars = p.stars && String(p.stars) !== '0';

      const githubLink = p.url ? `
        <a href="${p.url}" class="project-link project-link--text" target="_blank" rel="noopener noreferrer"
           aria-label="View ${escAttr(p.name)} on GitHub">github</a>` : '';

      const websiteLink = p.website ? `
        <a href="${p.website}" class="project-link project-link--text project-link--accent" target="_blank" rel="noopener noreferrer"
           aria-label="Open live site for ${escAttr(p.name)}">website</a>` : '';

      const demoLink = p.demo ? `
        <a href="${p.demo}" class="project-link project-link--text project-link--demo" target="_blank" rel="noopener noreferrer"
           aria-label="Watch demo for ${escAttr(p.name)}">demo</a>` : '';

      return `
      <article class="project-card" role="listitem">
        <div class="project-card-header">
          <span class="project-status-dot ${p.status || 'active'}"
                title="${p.status || 'active'}" aria-label="Status: ${p.status || 'active'}"></span>
          <span class="project-name">${escHtml(p.name)}</span>
          ${showStars ? `<span class="project-stars" aria-label="${escAttr(p.stars)} stars">${escHtml(p.stars)}</span>` : ''}
          <span class="project-actions">
            ${websiteLink}${demoLink}${githubLink}
          </span>
        </div>
        <p class="project-desc">${escHtml(p.description)}</p>
        ${p.tags?.length ? `
          <div class="project-tags" aria-label="Technologies">
            ${p.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
          </div>` : ''}
      </article>
    `}).join('');
  }

  /* ── Render credentials ───────────────────────────────── */
  function renderCredentials(credentials) {
    const grid = $('credentials-grid');
    if (!grid) return;

    grid.innerHTML = credentials.map(c => `
      <div class="credential-card">
        <div class="credential-category">${escHtml(c.category)}</div>
        <ul class="credential-items" aria-label="${escAttr(c.category)}">
          ${c.items.map(item => `
            <li class="credential-item">${escHtml(item)}</li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }


  /* ── Render footer ────────────────────────────────────── */
  function renderFooter(p) {
    const year = new Date().getFullYear();
    setInner('footer-copy', `© ${year} ${escHtml(p.name)}`);
  }

  /* ── Sticky nav scroll effect ─────────────────────────── */
  function initScrollEffects() {
    const header = $('site-header');
    const hero = $('hero');
    if (!header || !hero) return;

    const obs = new IntersectionObserver(
      ([entry]) => header.classList.toggle('nav-scrolled', !entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
  }

  /* ── Active nav link highlighting ─────────────────────── */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => {
            const active = l.getAttribute('href') === `#${e.target.id}`;
            l.style.color = active ? 'var(--brand)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => obs.observe(s));
  }

  /* ── XSS helpers ──────────────────────────────────────── */
  function escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escAttr(str) {
    return escHtml(str);
  }

  /* ── Bootstrap ────────────────────────────────────────── */
  function init() {
    if (typeof PORTFOLIO === 'undefined') {
      console.error('[portfolio] PORTFOLIO data not found — check data.js');
      return;
    }

    renderHero(PORTFOLIO);
    renderCredentials(PORTFOLIO.credentials || []);
    renderProjects(PORTFOLIO.projects || []);
    renderFooter(PORTFOLIO);

    initScrollEffects();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
