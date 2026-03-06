export function viewInput() {
    const searchButton = document.querySelector('.header__searchButton');
    
    // Проверяем существование кнопки
    if (!searchButton) {
        console.warn('Элемент .header__searchButton не найден');
        return;
    }
    
    searchButton.addEventListener('click', () => {
        // Очищаем предыдущий таймер, если он есть
            const searchInput = document.querySelector('.header__input');
            const itemInput = document.querySelector('.header__menu-itemInput');
            // Проверяем существование поля ввода
            if (searchInput && itemInput) {
                searchInput.classList.remove('visually-hidden');
                itemInput.classList.remove('visually-hidden');
            } else {
                console.warn('Элемент .header__input не найден');
            }
            
    });
}