// src/scripts/gallery-lightbox.ts

// --- 1. Seleccionar todos los elementos que necesitamos ---
const galleryLinks = document.querySelectorAll<HTMLAnchorElement>('.gallery-item');
const lightbox = document.querySelector<HTMLElement>('#gallery-lightbox');
const lightboxImage = document.querySelector<HTMLImageElement>('#lightbox-image');
const lightboxTitle = document.querySelector<HTMLElement>('#lightbox-title');
const lightboxClose = document.querySelector<HTMLButtonElement>('#lightbox-close');
const lightboxPrev = document.querySelector<HTMLButtonElement>('#lightbox-prev');
const lightboxNext = document.querySelector<HTMLButtonElement>('#lightbox-next');

let currentIndex = 0;
const galleryItems = Array.from(galleryLinks).map(link => {
  const image = link.querySelector('img');
  return {
    src: image?.src || '',
    title: link.dataset.title || ''
  };
});

// --- 2. Función para abrir/actualizar el Lightbox ---
function showImage(index: number) {
  if (!lightboxImage || !lightboxTitle || !lightboxPrev || !lightboxNext || !lightbox) return;

  const item = galleryItems[index];
  lightboxImage.src = item.src;
  lightboxTitle.innerText = item.title;
  currentIndex = index;

  // Mostrar/ocultar flechas
  lightboxPrev.style.display = index === 0 ? 'none' : 'flex';
  lightboxNext.style.display = index === galleryItems.length - 1 ? 'none' : 'flex';

  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
}

// --- 3. Funciones de navegación y cierre ---
function showNextImage() {
  if (currentIndex < galleryItems.length - 1) {
    showImage(currentIndex + 1);
  }
}

function showPrevImage() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  }
}

// --- 4. Conectar los eventos ---
galleryLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showImage(index);
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);

// Cerrar con clic en el fondo o con la tecla Escape
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNextImage();
  if (e.key === 'ArrowLeft') showPrevImage();
});