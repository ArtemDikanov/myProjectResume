import { dialogOpen } from './header-dialog';

export function clickBurger() {
    const burger = document.querySelector('.header__burger');
    
    // Проверяем существование кнопки
    if (!burger) {
        console.warn('Элемент .header__burger не найден');
        return;
    }
    
    burger.addEventListener('click', () => {
        burger.classList.add('active');

        dialogOpen()

        
    });


}