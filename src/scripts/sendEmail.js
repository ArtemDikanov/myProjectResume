export function sendEmail() {
    const sendButton = document.querySelector(".contact-block__email-button");
    const inputEmail = document.querySelector(".contact-block__email-input");
    const form = document.querySelector(".contact-block__email");

    if (!sendButton) {
        console.warn('Элемент .contact-block__email-button не найден');
        return;
    }

    if (!inputEmail) {
        console.warn('Элемент .contact-block__email-input не найден');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`You entered your email address: ${inputEmail.value}`)
    }
    );
}