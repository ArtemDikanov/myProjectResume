export function viewInput() {
    const searchButton = document.querySelector('.header__search-button');
    let inputActive = false;
   
    if (!searchButton) {
        console.warn('Элемент .header__search-button не найден');
        return;
    }
    
    searchButton.addEventListener('click', () => {
            const searchInput = document.querySelector('.header__input');
            const itemInput = document.querySelector('.header__menu-item-input');
            if (searchInput && itemInput) {
                if (inputActive === false) {
                    searchInput.classList.remove('visually-hidden');
                    itemInput.classList.remove('visually-hidden');
                    inputActive = true;
                }
                else {
                    alert(`You have entered the search field: ${searchInput.value}`)
                }

            } else {
                console.warn('Элемент .header__input не найден');
            }
    });
}