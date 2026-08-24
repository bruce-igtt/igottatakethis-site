(() => {
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
