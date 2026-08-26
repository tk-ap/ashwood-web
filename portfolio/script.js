const lightbox = document.querySelector('.lightbox');
const closeButton = document.querySelector('.lightbox-close');
const placeholder = document.querySelector('.lightbox-placeholder');
let lastTrigger = null;

function openLightbox(button) {
  lastTrigger = button;
  const label = button.querySelector('span')?.textContent || 'Portfolio image';
  placeholder.textContent = label;
  if (typeof lightbox.showModal === 'function') lightbox.showModal();
}

document.querySelectorAll('.gallery-item').forEach((button) => {
  button.addEventListener('click', () => openLightbox(button));
});

closeButton.addEventListener('click', () => lightbox.close());

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener('close', () => {
  lastTrigger?.focus();
});
