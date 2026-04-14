import { scrollToSlide } from './scrollToSlide';

export function renderDots(nameGallery, nameDots, dataFromServer, numberCards, currentIndex/* , getStepWidthFn */) {
    const dotsContainer = document.querySelector(nameDots);
    dotsContainer.innerHTML = '';
    const dotsCount = Math.max(0, dataFromServer.cards.length - numberCards) + 1;
    
    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (i === currentIndex)  {
            dot.classList.add('gallery-dot-active');
        }
        dot.addEventListener('click', () => {
            scrollToSlide(nameGallery, i);
        });
        dotsContainer.appendChild(dot);
    }
}