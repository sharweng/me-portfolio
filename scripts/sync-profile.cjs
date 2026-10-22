// Run after changing personal info in data.js: node scripts/sync-profile.cjs
// Keeps the initial HTML and sharing metadata aligned with the editable data.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const p = vm.runInNewContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8') + '\nPORTFOLIO');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<title>.*?<\/title>/, `<title>${escape(p.name)} — Portfolio</title>`);
const description = `${p.name} — ${p.title}. ${p.bio}`;
html = html.replace(/(<meta name="description" content=")[^"]*/, `$1${escape(description)}`);
for (const [id, value] of Object.entries({'hero-name':p.name,'hero-title':p.title,'hero-bio':p.bio,'hero-location':p.location,'brand-name':p.name.toLowerCase().replace(/\s+/g,'.')})) {
  html = html.replace(new RegExp(`(id="${id}">)[^<]*`), (_, prefix) => prefix + escape(value));
}
html = html.replace(/(<div class="hero-avatar"[^>]*>)[\s\S]*?(<\/div>)/, (_, open, close) => open + (p.avatar ? `<img src="${escape(p.avatar)}" alt="" width="160" height="160" fetchpriority="high" loading="eager" decoding="async">` : escape(p.name.split(' ').map(w=>w[0]).join('').slice(0,2))) + close);
html = html.replace(/  <!-- Profile sharing metadata -->[\s\S]*?  <!-- End profile sharing metadata -->\n/, '');
const metadata = `  <!-- Profile sharing metadata -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(p.name)} — Portfolio">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:image" content="${escape(p.avatar)}">
  <meta property="og:image:alt" content="${escape(p.name)}">
  <meta name="twitter:card" content="summary">
  <!-- End profile sharing metadata -->\n`;
html = html.replace('  <meta name="viewport"', metadata + '  <meta name="viewport"');
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('Synced static profile and sharing metadata.');
