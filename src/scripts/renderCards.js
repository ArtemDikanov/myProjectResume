export function renderCards(nameGallery, dataFromServer) {
    const gallery = document.querySelector(nameGallery);
    let output = '';
    
    if (nameGallery === '.destinations-gallery') {
        dataFromServer.cards.forEach(card => {
            output += `
                <div class="destinations-gallery__card">
                    <img class="destinations-gallery__card-img" src="./src/images/${card.image}.jpg" alt="${card.description}">
                    <div class="destinations-gallery__card-hover-content">
                        <h3>${card.title}</h3>
                        <p>${card.description}</p>
                        <button class="grey-button">View details</button>
                    </div>
                </div>
            `;
        });
    }
    // testimonial-gallery аналогично...
    
    gallery.innerHTML = output;
}