export function getVisibleCards(nameGallery) {
    const width = window.innerWidth;
    if (nameGallery === ".destinations-gallery") {
        if (width <= 370) return 1;
        if (width <= 510) return 2;
        if (width <= 650) return 3;
        return 4;
    }
    if (nameGallery === ".testimonial-gallery") {
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 1200) return 3;
        return 4;
    }  
}