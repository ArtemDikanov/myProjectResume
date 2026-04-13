import {scrollToSlide} from './scrollToSlide';

export function renderDots(nameDots, nameDot, dataFromServer, numberCards, currentIndex) {
    const galleryDotsContainer = document.querySelector(nameDots);
    galleryDotsContainer.innerHTML = ''; // Очищаем старые точки
        
    const dotsCount = Math.max(0, dataFromServer.cards.length - numberCards) + 1;

    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add(nameDot);
        if (i === currentIndex) dot.classList.add('active-gallery-dot');
            
            // Клик по точке перемещает к соответствующему слайду
        dot.addEventListener('click', () => {
            currentIndex = i;
            scrollToSlide();
        });
            
        galleryDotsContainer.appendChild(dot);
    }
}
