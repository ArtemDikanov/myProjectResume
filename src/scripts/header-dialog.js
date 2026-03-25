export function dialogOpen() {
    const dialog = document.querySelector('.header__dialog');
    const body = document.querySelector("body");
    dialog.show();
    body.classList.add('body-no-scroll');
}

export function dialogClose() {
    const dialog = document.querySelector('.header__dialog');
    dialog.close();
    const body = document.querySelector("body");
    body.classList.remove('body-no-scroll');
}




