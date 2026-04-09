export function browsingCarousel() {
    const carousel = document.querySelector('.destinations-gallery');
    const arrowLeft = document.querySelector('.arrow-left-button');
    const arrowRight = document.querySelector('.arrow-right-button');
    const galleryMarkersContainer = document.querySelector('.slider-gallery-markers');
    const cards = document.querySelectorAll('.destinations-gallery__card');

    // 2. Переменные состояния
    let currentIndex = 0;
    let cardWidth = window.innerWidth / (1440 / 308);
    let gap = window.innerWidth / (1440 / 16); // Должно совпадать с gap в CSS (.carousel)

    // 3. Функция для определения количества видимых карточек
    function getVisibleCards() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 1200) return 3;
        return 4;
    }

    // 4. Функция обновления размеров (вызывается при загрузке и ресайзе)
    function updateDimensions() {
        cardWidth+= gap;
        // Получаем ширину первой карточки (с учетом отступов)
        // Обновляем глобальную переменную видимых карточек
        window.visibleCards = getVisibleCards();
        
        // Пересоздаем точки, чтобы их количество соответствовало экрану
        createDots();
    }

    // 5. Создание точек-индикаторов (dots)
    function createDots() {
        galleryMarkersContainer.innerHTML = ''; // Очищаем старые точки
        
        // Сколько всего точек нужно?
        // (Общее количество карточек - видимые карточки) + 1
        const maxIndex = Math.max(0, cards.length - window.visibleCards);
        const dotsCount = maxIndex + 1;

        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-gallery-markers__dot');
            if (i === currentIndex) dot.classList.add('active');
            
            // Клик по точке перемещает к соответствующему слайду
            dot.addEventListener('click', () => {
                currentIndex = i;
                scrollToSlide();
            });
            
            galleryMarkersContainer.appendChild(dot);
        }
    }

    // 6. Обновление активной точки при скролле мышкой или пальцем
    function updateActiveDot() {
        // Определяем текущий индекс на основе позиции скроллаs
        // Math.round нужен, чтобы округлить позицию до ближайшей карточки
        const newIndex = Math.round(carousel.scrollLeft / cardWidth);
        
        if (currentIndex !== newIndex) {
            currentIndex = newIndex;
            
            // Обновляем визуальный класс у точек
            const dots = document.querySelectorAll('.slider-gallery-markers__dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('slider-gallery-markers__dot-active', index === currentIndex);
            });
        }
    }

    // 7. Основная функция прокрутки
    function scrollToSlide() {
        const scrollPosition = currentIndex * cardWidth;
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }

    // 8. Логика кнопок
    arrowRight.addEventListener('click', () => {
        // Максимально возможный индекс
        const maxIndex = cards.length - window.visibleCards;
        
        if (currentIndex < maxIndex) {
            currentIndex++;
            scrollToSlide();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToSlide();
        }
    });

    // 9. Слушатель скролла для обновления точек, если пользователь крутит сам
    carousel.addEventListener('scroll', updateActiveDot); 

    // 10. Слушатель изменения размера окна
    window.addEventListener('resize', () => {
        updateDimensions();
        // Сбрасываем позицию, чтобы не улетело в пустоту при резком изменении ширины
        currentIndex = Math.min(currentIndex, cards.length - window.visibleCards);
        scrollToSlide();
    });

    // Инициализация при загрузке
    updateDimensions();

}