import { viewInput } from './header-searchButton';

viewInput();

import { clickBurger } from './header-burger';

clickBurger();


import { dialogOpen, dialogClose } from './header-dialog';

import { viewCarousel } from './viewCarousel';

viewCarousel(".destinations-carousel",
            ".destinations-block__header-button-right",
            ".destinations-block__header-button-left",
            ".destinations-block__carousel-markers",
            "./src/json/destinations-cards.json");

viewCarousel(".testimonial-carousel",
            ".testimonial-block__header-button-right",
            ".testimonial-block__header-button-left",
            ".testimonial-block__carousel-markers",
            "./src/json/testimonial-cards.json");







