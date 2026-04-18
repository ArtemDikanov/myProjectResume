export function renderCards(nameCarousel, dataFromServer) {
    const carouselContainer = document.querySelector(nameCarousel);
    let output = '';
    
    if (nameCarousel === '.destinations-carousel') {
        dataFromServer.cards.forEach(card => {
            output += `
                <div class="destinations-carousel__card">
                    <img class="destinations-carousel__card-img" src="./src/images/${card.image}.jpg" alt="${card.description}">
                    <div class="destinations-carousel__card-hover-content hover-content">
                        <h3 class="hover-content__title">${card.title}</h3>
                        <p class="hover-content__paragraph">${card.description}</p>
                        <button class="hover-content__button grey-button">View details</button>
                    </div>
                </div>
            `;
        });
    }
    if (nameCarousel === ".testimonial-carousel") {
        dataFromServer.cards.forEach(card => {
            output += ` <div class="testimonial-carousel__card">
                            <div class="testimonial-carousel__card-header feedback-card-header">
                                <img class="feedback-card-header__photo" src="/src/images/${card.image}.jpg" alt="${card.description}">
                                <div class="feedback-card-header__info">
                                    <h4 class="feedback-card-header__info-name">${card.name}</h4>
                                    <div class="feedback-card-header__info-stars feedback-stars">`;
            let counterPaintedStars = card.numberStars;
            let counterUnpaintedStars = 5 - card.numberStars;
            for (counterPaintedStars; counterPaintedStars > 0; counterPaintedStars--) {
                output += `<svg class="feedback-stars__star" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.38586 0.690983C8.68521 -0.230328 9.98862 -0.230329 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6842 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09962 14.5199 8.74913 14.7746L4.77339 17.6631C3.98968 18.2325 2.9352 17.4664 3.23455 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414135 7.86474C-0.369579 7.29534 0.0331967 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73339 5.77677 6.86726 5.36474L8.38586 0.690983Z" fill="white"/>
                           </svg>`;
            }

            for (counterUnpaintedStars; counterUnpaintedStars > 0; counterUnpaintedStars--) {
                output += `<svg class="feedback-stars__star" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.38586 0.690983C8.68521 -0.230328 9.98862 -0.230329 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6842 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09962 14.5199 8.74913 14.7746L4.77339 17.6631C3.98968 18.2325 2.9352 17.4664 3.23455 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414135 7.86474C-0.369579 7.29534 0.0331967 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73339 5.77677 6.86726 5.36474L8.38586 0.690983Z" fill="white" fill-opacity="0.24"/>
                           </svg>`;
            }
            output += `</div>
                       </div>
                       </div>
                       <p class="testimonial-carousel__card-paragraph">${card.text}</p>
                       </div>`;
        });
    }

    carouselContainer.innerHTML = output;
}