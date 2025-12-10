const body = document.querySelector('body');
body.addEventListener('click', (e) => {
  const thumbnail = e.target.closest('.gallery-item');
  const closeBtn = e.target.closest('#close-btn');
  const lightbox = document.querySelector('.lightbox');

  if (thumbnail) {
    const src = thumbnail.getAttribute('src').replace('-thumbnail', '');
    const lightboxImage = document.querySelector('#lightbox-image');
    lightboxImage.setAttribute('src', src);
    lightbox.classList.add('active');
  } else if (closeBtn || (e.target.closest('.lightbox') && !e.target.closest('#lightbox-image'))) {
    lightbox.classList.remove('active');
  }
  console.log(e.target);
});
