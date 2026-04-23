export function dialogClose(nameDialog, nameButton) {
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
        dialog.close();
        body.classList.remove('body-no-scroll');

        const savedScrollY = parseInt(body.dataset.scrollPosition, 10);
        if (!isNaN(savedScrollY)) {
            setTimeout(() => {
                window.scrollTo({
                    top: savedScrollY,
                    behavior: 'instant' 
                });
                delete body.dataset.scrollPosition;
            }, 50); 
        }
    });
}