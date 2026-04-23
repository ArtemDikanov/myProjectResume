export function dialogOpen(nameDialog, nameButton) { 
    const dialog = document.querySelector(nameDialog);
    const button = document.querySelector(nameButton);
    const body = document.querySelector("body");

    if (!dialog) {
        console.warn(`Элемент ${nameDialog} не найден`);
        return;
    }
    if (!button) {
        console.warn(`Элемент ${nameButton} не найден`);
        return;
    }

    button.addEventListener('click', () => {
        body.dataset.scrollPosition = window.scrollY;
        dialog.showModal();
        body.classList.add('body-no-scroll');
    });
}





