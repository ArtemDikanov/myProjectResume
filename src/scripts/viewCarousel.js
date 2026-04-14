import { getVisibleCards } from './getVisibleCards';
import { getInformationFromServer } from './getInformationFromServer';
import { renderCards } from './renderCards';
import { renderDots } from './renderDots';
import { scrollToSlide } from './scrollToSlide';

export function viewCarousel(nameGallery, nameArrowRight, nameArrowLeft, nameDots, api) {
    const gallery = document.querySelector(nameGallery);
    const arrowRight = document.querySelector(nameArrowRight);
    const arrowLeft = document.querySelector(nameArrowLeft);
    const dotsContainer = document.querySelector(nameDots);
    
    if (!gallery || !arrowRight || !arrowLeft || !dotsContainer) {
        return;
    }

    let currentIndex = 0;
    let dataFromServer = null;
    let numberCards = getVisibleCards(nameGallery);

    function updateActiveDot() {
        const cards = gallery.children;
        if (cards.length === 0) return;
        
        const containerDistance = gallery.getBoundingClientRect();
        
        let closestIndex = 0;
        let minDistance = Infinity;
        
        for (let i = 0; i < cards.length; i++) {
            const cardDistance = cards[i].getBoundingClientRect();
            const distance = Math.abs(cardDistance.left - containerDistance.left);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
        
        if (currentIndex !== closestIndex) {
            currentIndex = closestIndex;
            const dots = dotsContainer.querySelectorAll('.gallery-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('gallery-dot-active', index === currentIndex);
            });
        }
    }

    document.addEventListener('DOMContentLoaded', async () => {
        try {
            dataFromServer = await getInformationFromServer(api);
        } catch (err) {
            console.error('Ошибка загрузки данных:', err);
            return;
        }

        numberCards = getVisibleCards(nameGallery);
        
        renderCards(nameGallery, dataFromServer);

        renderDots(nameGallery, nameDots, dataFromServer, numberCards, currentIndex);
        
        arrowRight.addEventListener('click', () => {
            const maxIndexClick = dataFromServer.cards.length - numberCards;
            if (currentIndex < maxIndexClick) {
                currentIndex++;
                scrollToSlide(nameGallery, currentIndex);
            }
        });

        arrowLeft.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSlide(nameGallery, currentIndex);
            }
        });

        gallery.addEventListener('scroll', updateActiveDot);
        
        window.addEventListener('resize', () => {
            numberCards = getVisibleCards(nameGallery);
            
            const maxIndexResize = Math.max(0, dataFromServer.cards.length - numberCards);
            if (currentIndex > maxIndexResize) {
                currentIndex = maxIndexResize;
            }
            
            renderDots(nameGallery, nameDots, dataFromServer, numberCards, currentIndex);
            scrollToSlide(nameGallery, currentIndex);
        });
    });
}