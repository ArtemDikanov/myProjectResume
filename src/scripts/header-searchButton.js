export function viewInput() {
    const searchButton = document.querySelector('.header__search-button');
    
    // Проверяем существование кнопки
    if (!searchButton) {
        console.warn('Элемент .header__search-button не найден');
        return;
    }
    
    searchButton.addEventListener('click', () => {
            const searchInput = document.querySelector('.header__input');
            const itemInput = document.querySelector('.header__menu-item-input');
            // Проверяем существование поля ввода
            if (searchInput && itemInput) {
                searchInput.classList.remove('visually-hidden');
                itemInput.classList.remove('visually-hidden');
            } else {
                console.warn('Элемент .header__input не найден');
            }
            
    });
}