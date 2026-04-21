export function openHeaderDialog() {
    const burger = document.querySelector('.header__burger');
    const dialog = document.querySelector('.header__dialog');
    const body = document.querySelector("body");
    
    if (!burger) {
        console.warn('Элемент .header__burger не найден');
        return;
    }

    if (!dialog) {
        console.warn('Элемент .header__dialog не найден');
        return;
    }
    
    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
            dialog.show();
            body.classList.add('body-no-scroll-header');
        }
        else {
            dialog.close();;
            burger.classList.remove('active');
            body.classList.remove('body-no-scroll-header'); 
        }
    });
}