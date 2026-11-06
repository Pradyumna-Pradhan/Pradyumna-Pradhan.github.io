(() => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const publicationGroups = document.querySelectorAll('.publication-group');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      publicationGroups.forEach((group) => {
        group.hidden = filter !== 'all' && group.dataset.category !== filter;
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Until a Formspree form ID is configured, fall back to the visitor's email app.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.action.includes('REPLACE_WITH_YOUR_FORM_ID')) return;
      event.preventDefault();
      if (!form.reportValidity()) return;
      const formData = new FormData(form);
      const subject = encodeURIComponent(String(formData.get('subject') || 'Website enquiry'));
      const body = encodeURIComponent(
        `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
      );
      window.location.href = `mailto:pradyumna.pradhan@weizmann.ac.il?subject=${subject}&body=${body}`;
    });
  }

  // Highlight the navigation item for the section currently in view.
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
})();
