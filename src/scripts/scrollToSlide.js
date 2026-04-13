export function scrollToSlide(nameGallery, currentIndex, cardWidth) {
    const gallery = document.querySelector(nameGallery);
    const scrollPosition = currentIndex * cardWidth;
    gallery.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: 'smooth'
    });
}