import { dialogOpen, dialogClose } from './header-dialog';

export function clickBurger() {
    const burger = document.querySelector('.header__burger');
    
    if (!burger) {
        console.warn('Элемент .header__burger не найден');
        return;
    }
    
    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
            dialogOpen('.header__dialog')
        }
        else {
            dialogClose('.header__dialog');
            burger.classList.remove('active');
        }

    });


}