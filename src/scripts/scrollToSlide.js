export function scrollToSlide(nameCarousel, targetIndex) {
    const carouselContainer = document.querySelector(nameCarousel);
    const cards = carouselContainer.children;
    if (cards.length === 0 || targetIndex < 0 || targetIndex >= cards.length) {
        return;
    }
    cards[targetIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
}