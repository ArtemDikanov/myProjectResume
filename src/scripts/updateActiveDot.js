export function updateActiveDot(nameGallery, cardWidth, currentIndex, nameDot) {
    const gallery = document.querySelector(nameGallery);
    // Определяем текущий индекс на основе позиции скроллаs
    // Math.round нужен, чтобы округлить позицию до ближайшей карточки
    const newIndex = Math.round(gallery.scrollLeft / cardWidth);
        
    if (currentIndex !== newIndex) {
        currentIndex = newIndex;
            
        // Обновляем визуальный класс у точек
        const dots = document.querySelectorAll(nameDot);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active-gallery-dot', index === currentIndex);
        });
    }
}
