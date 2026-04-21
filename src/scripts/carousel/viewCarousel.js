import { getVisibleCards } from './getVisibleCards';
import { getInformationFromServer } from './getInformationFromServer';
import { renderCards } from './renderCards';
import { renderDots } from './renderDots';
import { scrollToSlide } from './scrollToSlide';

export function viewCarousel(nameCarousel, nameArrowRight, nameArrowLeft, nameDots, api) {
    const carouselContainer = document.querySelector(nameCarousel);
    const arrowRight = document.querySelector(nameArrowRight);
    const arrowLeft = document.querySelector(nameArrowLeft);
    const dotsContainer = document.querySelector(nameDots);
    let lastWidth = window.innerWidth;
    
    if (!carouselContainer || !arrowRight || !arrowLeft || !dotsContainer) {
        return;
    }

    let currentIndex = 0;
    let dataFromServer = null;
    let numberCards = getVisibleCards(nameCarousel);

    function updateActiveDot() {
        const cards = carouselContainer.children;
        if (cards.length === 0) return;
        
        const containerDistance = carouselContainer.getBoundingClientRect();
        
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
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('carousel-dot-active', index === currentIndex);
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

        numberCards = getVisibleCards(nameCarousel);
        
        renderCards(nameCarousel, dataFromServer);

        renderDots(nameCarousel, nameDots, dataFromServer, numberCards, currentIndex);
        
        arrowRight.addEventListener('click', () => {
            const maxIndexClick = dataFromServer.cards.length - numberCards;
            if (currentIndex < maxIndexClick) {
                currentIndex++;
                scrollToSlide(nameCarousel, currentIndex);
            }
        });

        arrowLeft.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSlide(nameCarousel, currentIndex);
            }
        });

        carouselContainer.addEventListener('scroll', updateActiveDot);
        
        window.addEventListener('resize', () => {
            if (window.innerWidth === lastWidth) {
                return;
            }
            lastWidth = window.innerWidth;

            const scrollY = window.scrollY;
            
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';

            numberCards = getVisibleCards(nameCarousel);
            
            const maxIndexResize = Math.max(0, dataFromServer.cards.length - numberCards);
            if (currentIndex > maxIndexResize) {
                currentIndex = maxIndexResize;
            }
            
            renderDots(nameCarousel, nameDots, dataFromServer, numberCards, currentIndex);
            scrollToSlide(nameCarousel, currentIndex);

            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
           
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    window.scrollTo({
                        top: scrollY,
                        behavior: 'instant'
                    });
                });
            });
        });
    });
}