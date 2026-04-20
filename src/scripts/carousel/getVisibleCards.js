export function getVisibleCards(nameCarousel) {
    const width = window.innerWidth;
    if (nameCarousel === ".destinations-carousel") {
        if (width <= 370) return 1;
        if (width <= 510) return 2;
        if (width <= 740) return 3;
        return 4;
    }
    if (nameCarousel === ".testimonial-carousel") {
        if (width <= 592) return 1;
        if (width <= 880) return 2;
        return 3;
    }  
}