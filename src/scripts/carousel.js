export function loadСarousel() {
    const gallery = document.querySelector(".destinations-gallery");
    let output = "";
    let src;
    document.addEventListener('DOMContentLoaded', async function() {
        try {
            const dataJson = await fetch(`./src/json/destinations-cards.json`)
            const dataJS = await dataJson.json()

            for (let i in dataJS.cards) {
            src = dataJS.cards[i].image;
            output += `<div class="destinations-gallery__card">
                        <img class="destinations-gallery__card-img" src="./src/images/${src}.jpg" alt="${dataJS.cards[i].description}">
                        <div class="destinations-gallery__card-hover-content">
                            <h3>${dataJS.cards[i].title}</h3>
                            <p>${dataJS.cards[i].description}</p>
                            <button class="grey-button">View details</button>
                        </div>
                       </div>`
            }

            gallery.innerHTML=output;

        } catch (err) {
            console.error('Произошла ошибка!', err)
        }
    })

}