import {getVisibleCards} from './getVisibleCards';
import {getInformationFromServer} from './getInformationFromServer';
import {renderCard} from './renderCard';
import {renderDots} from './renderDots';
import {updateDimensions} from './updateDimensions';
import {updateActiveDot} from './updateActiveDot';
import {scrollToSlide} from './scrollToSlide';

export function newCarousel(nameGallery, nameArrowRight, nameArrowLeft, nameDots, nameDot, api) {
    const gallery = document.querySelector(nameGallery);
    const arrowRight = document.querySelector(nameArrowRight);
    const arrowLeft = document.querySelector(nameArrowLeft);
    let currentIndex = 0;
    let cardWidth = window.innerWidth / (1440 / 308);
    let gap = window.innerWidth / (1440 / 16); 

    document.addEventListener('DOMContentLoaded', async () => {
        let startNumberCards = 0;
        let numberCards = getVisibleCards(nameGallery);
        const dataFromServer =  await getInformationFromServer(api); 
        renderCard(nameGallery, numberCards, dataFromServer, startNumberCards);
        renderDots(nameDots, nameDot, dataFromServer, numberCards, currentIndex);
        
        arrowRight.addEventListener('click', () => {
            console.log("Привеееет", dataFromServer.cards.length)
            // Максимально возможный индекс
            const maxIndex = dataFromServer.cards.length - numberCards;
            
            if (currentIndex < maxIndex) {
                currentIndex++;
                startNumberCards = numberCards;
                numberCards++;
                renderCard(nameGallery, numberCards, dataFromServer, startNumberCards);
                scrollToSlide(nameGallery, currentIndex, cardWidth);
            }
        });

        arrowLeft.addEventListener('click', () => {
            console.log("Покааа")
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSlide(nameGallery, currentIndex, cardWidth);
            }
        });

        // 9. Слушатель скролла для обновления точек, если пользователь крутит сам
        gallery.addEventListener('scroll', updateActiveDot(nameGallery, cardWidth, currentIndex, nameDot)); 

        // 10. Слушатель изменения размера окна
        window.addEventListener('resize', () => {
            updateDimensions(nameGallery,cardWidth, gap, nameDots, nameDot, dataFromServer, numberCards, currentIndex);
            // Сбрасываем позицию, чтобы не улетело в пустоту при резком изменении ширины
            currentIndex = Math.min(currentIndex, dataFromServer.cards.length - numberCards);
            scrollToSlide(nameGallery, currentIndex, cardWidth);
        });
    });
}