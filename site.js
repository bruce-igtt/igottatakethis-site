(() => {
  // Reciprocal Music Palace Radio placement begins immediately and ends
  // after December 31, 2026, in Eastern time.
  const now = Date.now();
  const mprEnd = Date.parse('2027-01-01T05:00:00Z');
  if (now < mprEnd) {
    const header = document.querySelector('.site-header');
    if (header) {
      const partner = document.createElement('aside');
      partner.className = 'partner-banner';
      partner.setAttribute('aria-label', 'Music Palace Radio partner promotion');
      partner.innerHTML = `<a class="partner-banner-link" href="https://www.musicpalaceradio.com/?utm_source=igtt&utm_medium=website&utm_campaign=reciprocal_banner_2026" target="_blank" rel="sponsored noopener noreferrer" aria-label="Music Palace Radio — listen live (opens in a new tab)">
        <img src="assets/mpr-banner-2026-10-01.jpeg" alt="Music Palace Radio. All Music; All the Time. Listen at MusicPalaceRadio.com" width="2048" height="342">
        <span class="partner-mobile" aria-hidden="true"><strong>Music Palace Radio</strong><span>All Music; All the Time</span><b>Listen ↗</b></span>
      </a>`;
      header.before(partner);
    }
  }

  /*
   * Store links are intentionally centralized here.
   * Paste the final public App Store and Google Play URLs below after approval.
   */
  const STORE_URLS = {
    apple: "",
    google: ""
  };

  document.querySelectorAll('[data-store]').forEach(link => {
    const url = STORE_URLS[link.dataset.store];
    if (url) {
      link.href = url;
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
      link.target = '_blank';
      link.rel = 'noopener';
    } else {
      link.setAttribute('aria-disabled', 'true');
      link.title = 'Store link will be activated after approval';
      link.addEventListener('click', event => event.preventDefault());
    }
  });

  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-menu]');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
