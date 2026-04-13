import {getVisibleCards} from './getVisibleCards';
import {renderDots} from './renderDots';

export function updateDimensions(nameGallery,cardWidth, gap, nameDots, nameDot, dataFromServer, numberCards, currentIndex) {
    cardWidth += gap;
    numberCards = getVisibleCards(nameGallery);
    renderDots(nameDots, nameDot, dataFromServer, numberCards, currentIndex);
}