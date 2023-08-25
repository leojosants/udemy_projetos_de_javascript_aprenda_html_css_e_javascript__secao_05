/* selected items*/
const elementsGalleryItems = document.querySelectorAll('.gallery_item');
const elementLightbox = document.querySelector('.lightbox');
const elementLightboxImage = document.querySelector('.lightbox_image');
const elementLightboxClose = document.querySelector('.lightbox_close');

/* events */
elementsGalleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageURL = item.querySelector('.gallery_image').getAttribute('data-src');
        
        elementLightboxImage.setAttribute('src', imageURL);
        elementLightbox.style.display = 'flex';
    })
});

elementLightboxClose.addEventListener('click', () => { 
    elementLightbox.style.display = 'none';
});

// .gallery
// .lightbox_content