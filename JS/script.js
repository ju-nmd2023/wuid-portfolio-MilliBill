

lightbox.addEventListener ('click', e=> {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove ('active')
})

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
  
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
  
    lightbox.style.display = 'flex';
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }