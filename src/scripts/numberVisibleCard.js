function getVisibleCards(nameObject) {
    const width = window.innerWidth;
    if (nameObject === ".destinations-gallery") {
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 1200) return 3;
        return 4;
    }
    if (nameObject === ".testimonial-gallery") {
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 1200) return 3;
        return 4;
    }  
}