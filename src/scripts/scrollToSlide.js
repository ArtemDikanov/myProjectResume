export function scrollToSlide(nameGallery, targetIndex) {
    const gallery = document.querySelector(nameGallery);
    const cards = gallery.children;
    if (cards.length === 0 || targetIndex < 0 || targetIndex >= cards.length) {
        return;
    }
    cards[targetIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
}