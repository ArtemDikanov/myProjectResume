export function dialogOpen() {
    const dialog = document.querySelector('.header__dialog');
    dialog.innerHTML = `
        <nav class="header__menu dialog">
          <ul class="header__menu-list dialog">
            <li class="header__menu-item menu-link"><a href="" class="link dialog">About us</a></li>
            <li class="header__menu-item menu-link"><a href="" class="link dialog">Destinations</a></li>
            <li class="header__menu-item menu-link"><a href="" class="link dialog">Packages</a></li>
            <li class="header__menu-item menu-link"><a href="" class="link dialog">Testimonial</a></li>
            <li class="header__menu-item menu-link"><a href="" class="link dialog">Contact Us</a></li>
          </ul>
        </nav>`
    dialog.show();
    
}

export function dialogClose() {
    const dialog = document.querySelector('.header__dialog');
    dialog.close();
}




