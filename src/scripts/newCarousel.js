import {getVisibleCards} from './numberVisibleCard';
import {getInformationFromServer} from './getInformation';
import {renderCard} from './renderCard';

export function newCarousel(nameObject) {
    getVisibleCards(nameObject);
    document.addEventListener('DOMContentLoaded', async () => {
        const numberCards = getVisibleCards();
        const dataFromServer =  await getInformationFromServer(); 
        renderCard(nameObject, numberCards, dataFromServer);
    });
}