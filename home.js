(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const trigger = document.querySelector('.eureka-trigger');
  const fieldIndex = document.querySelector('#field-index');
  const closeButton = document.querySelector('[data-field-close]');

  document.querySelectorAll('[data-enhanced-only]').forEach((element) => {
    element.hidden = false;
  });

  const openField = () => {
    if (!trigger || !fieldIndex) return;
    fieldIndex.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    fieldIndex.classList.remove('is-entering');
    void fieldIndex.offsetWidth;
    fieldIndex.classList.add('is-entering');
    window.requestAnimationFrame(() => {
      fieldIndex.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  };

  const closeField = () => {
    if (!trigger || !fieldIndex) return;
    fieldIndex.hidden = true;
    fieldIndex.classList.remove('is-entering');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  };

  trigger?.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeField();
    else openField();
  });

  closeButton?.addEventListener('click', closeField);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && fieldIndex && !fieldIndex.hidden) closeField();
  });

  const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const formatState = (value) => {
    if (!value) return '';
    return value
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  const hydrateSitrep = (data) => {
    const status = document.querySelector('[data-sitrep-status]');
    const updated = document.querySelector('[data-sitrep-updated]');
    const signal = document.querySelector('[data-sitrep-signal]');

    if (status && data.status) status.textContent = formatState(data.status);
    if (updated && data.updated) updated.textContent = formatDate(data.updated);
    if (signal && data.signal) signal.textContent = data.signal;

    if (Array.isArray(data.movement)) {
      data.movement.forEach((item) => {
        if (!item?.area) return;
        const row = document.querySelector(`[data-movement="${CSS.escape(item.area)}"]`);
        if (!row) return;
        const state = row.querySelector('.movement-state');
        const note = row.querySelector('.movement-note');
        if (item.href) row.setAttribute('href', item.href);
        if (state && item.state) state.textContent = formatState(item.state);
        if (note && item.note) note.textContent = item.note;
      });
    }

    if (data.latestFieldNote) {
      const noteLink = document.querySelector('[data-latest-field-note]');
      if (noteLink) {
        const title = noteLink.querySelector('.latest-note__title');
        const date = noteLink.querySelector('.latest-note__date');
        if (data.latestFieldNote.href) noteLink.setAttribute('href', data.latestFieldNote.href);
        if (title && data.latestFieldNote.title) title.textContent = data.latestFieldNote.title;
        if (date && data.latestFieldNote.date) date.textContent = formatDate(data.latestFieldNote.date);
      }
    }
  };

  fetch('/data/sitrep.json', { cache: 'no-store' })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (data) hydrateSitrep(data);
    })
    .catch(() => {
      // Static editorial fallback remains intentionally complete.
    });
})();
