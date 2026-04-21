import { scrollToSlide } from './scrollToSlide';

export function renderDots(nameCarousel, nameDots, dataFromServer, numberCards, currentIndex) {
    const dotsContainer = document.querySelector(nameDots);
    if (!dotsContainer) {
            console.warn(`Элемент ${nameDots} не найден`);
            return;
    }
    dotsContainer.innerHTML = '';
    const dotsCount = Math.max(0, dataFromServer.cards.length - numberCards) + 1;
    
    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === currentIndex)  {
            dot.classList.add('carousel-dot-active');
        }
        dot.addEventListener('click', () => {
            scrollToSlide(nameCarousel, i);
        });
        dotsContainer.appendChild(dot);
    }
}