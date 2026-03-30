export function dialogOpen(className) {
    const dialog = document.querySelector(className);
    const body = document.querySelector("body");
    dialog.show();
    body.classList.add('body-no-scroll');
}

export function dialogClose(className) {
    const dialog = document.querySelector(className);
    dialog.close();
    const body = document.querySelector("body");
    body.classList.remove('body-no-scroll');
}




