export function dialogOpen(nameDialog, nameButton, nameBackdrop) {
    const dialog = document.querySelector(nameDialog);
    const button = document.querySelector(nameButton);
    const backdrop = document.querySelector(nameBackdrop);
    const body = document.querySelector("body");

    if (!dialog) {
            console.warn(`Элемент ${nameDialog} не найден`);
            return;
    }

    if (!button) {
            console.warn(`Элемент ${nameButton} не найден`);
            return;
    }

    if (!backdrop) {
            console.warn(`Элемент ${nameBackdrop} не найден`);
            return;
    }

    button.addEventListener('click', () => {
        dialog.showModal();
        backdrop.classList.add('')
        body.classList.remove('visually-hidden'); 
    });
}





