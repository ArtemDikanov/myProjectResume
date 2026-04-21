export function openHeaderDialog() {
    const burger = document.querySelector('.header__burger');
    const dialog = document.querySelector('.header__dialog');
    const linkAbout = document.querySelector(".header-dialog-link-about");
    const linkDestinations = document.querySelector(".header-dialog-link-destinations");
    const linkPackages = document.querySelector(".header-dialog-link-packages");
    const linkTestimonial = document.querySelector(".header-dialog-link-testimonial");
    const linkContact = document.querySelector(".header-dialog-link-contact");
    const body = document.querySelector("body");
    
    if (!burger) {
        console.warn('Элемент .header__burger не найден');
        return;
    }

    if (!dialog) {
        console.warn('Элемент .header__dialog не найден');
        return;
    }

    if (!linkAbout) {
        console.warn('Элемент .header-dialog-link-about не найден');
        return;
    }

    if (!linkDestinations) {
        console.warn('Элемент .header-dialog-link-destinations не найден');
        return;
    }
    
    if (!linkPackages) {
        console.warn('Элемент .header-dialog-link-packages не найден');
        return;
    }
    
    if (!linkTestimonial) {
        console.warn('Элемент .header-dialog-link-testimonial не найден');
        return;
    }

    if (!linkContact) {
        console.warn('Элемент .header-dialog-link-contact не найден');
        return;
    }
    
    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
            dialog.show();
            body.classList.add('body-no-scroll-header');
        }
        else {
            dialog.close();
            burger.classList.remove('active');
            body.classList.remove('body-no-scroll-header'); 
        }
    });

    linkAbout.addEventListener('click', () => {
        dialog.close();
        burger.classList.remove('active');
        body.classList.remove('body-no-scroll-header'); 
    });

    linkDestinations.addEventListener('click', () => {
        dialog.close();
        burger.classList.remove('active');
        body.classList.remove('body-no-scroll-header'); 
    });

    linkPackages.addEventListener('click', () => {
        dialog.close();
        burger.classList.remove('active');
        body.classList.remove('body-no-scroll-header'); 
    });

    linkTestimonial.addEventListener('click', () => {
        dialog.close();
        burger.classList.remove('active');
        body.classList.remove('body-no-scroll-header'); 
    });

    linkContact.addEventListener('click', () => {
        dialog.close();
        burger.classList.remove('active');
        body.classList.remove('body-no-scroll-header'); 
    });
}