export function renderCard(nameObject, numberCards, dataFromServer) {
    const gallery = document.querySelector(nameObject);
    let output = "";
    let src;

    if (nameObject === ".destinations-gallery") {
        for (numberCards; numberCards > 0; numberCards--) {
        src = dataFromServer.cards[numberCards].image;
        output += `<div class="destinations-gallery__card">
                    <img class="destinations-gallery__card-img" src="./src/images/${src}.jpg" alt="${dataFromServer.cards[numberCards].description}">
                    <div class="destinations-gallery__card-hover-content">
                        <h3>${dataFromServer.cards[numberCards].title}</h3>
                        <p>${dataFromServer.cards[numberCards].description}</p>
                        <button class="grey-button">View details</button>
                    </div>
                    </div>`
        }
    }
    if (nameObject === ".testimonial-gallery") {
        for (numberCards; numberCards > 0; numberCards--) {
            src = dataFromServer.cards[numberCards].image;
            output += ` <div class="testimonial-gallery__card">
                            <div class="testimonial-gallery__card-header feedback-card-header">
                                <img src="/src/images/${src}.jpg" alt="${dataFromServer.cards[numberCards].description}" class="feedback-header__photo">
                                <div class="feedback-card-header__info">
                                    <h4 class="feedback-card-header__info-name">${dataFromServer.cards[numberCards].name}</h4>
                                    <div class="feedback-card-header__info-stars feedback-stars">`;
            for (dataFromServer.cards[numberCards].numberStars; dataFromServer.cards[numberCards].numberStars > 0; dataFromServer.cards[numberCards].numberStars--) {
                output += `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.38586 0.690983C8.68521 -0.230328 9.98862 -0.230329 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6842 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09962 14.5199 8.74913 14.7746L4.77339 17.6631C3.98968 18.2325 2.9352 17.4664 3.23455 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414135 7.86474C-0.369579 7.29534 0.0331967 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73339 5.77677 6.86726 5.36474L8.38586 0.690983Z" fill="white"/>
                           </svg>`;
            }
            for (5 - dataFromServer.cards[numberCards].numberStars; 5 - dataFromServer.cards[numberCards].numberStars > 0; 5 - dataFromServer.cards[numberCards].numberStars--) {
                output += `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.38586 0.690983C8.68521 -0.230328 9.98862 -0.230329 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6842 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09962 14.5199 8.74913 14.7746L4.77339 17.6631C3.98968 18.2325 2.9352 17.4664 3.23455 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414135 7.86474C-0.369579 7.29534 0.0331967 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73339 5.77677 6.86726 5.36474L8.38586 0.690983Z" fill="white" fill-opacity="0.24"/>
                           </svg>`;
            }
            output += `</div>
                       </div>
                       </div>
                       <p class="testimonial-gallery__card-paragraph">${dataFromServer.cards[numberCards].text}</p>
                       </div>`
        }
    }


    gallery.innerHTML=output;
    

}