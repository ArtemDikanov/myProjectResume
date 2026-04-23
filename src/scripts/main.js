import dialogPolyfill from 'dialog-polyfill'

import { viewInput } from './header/viewInput';

viewInput();

import { openHeaderDialog } from './header/openHeaderDialog';

openHeaderDialog();

import { dialogOpen } from './openDialog';
import { dialogClose } from './closeDialog';

dialogOpen(".about-dialog", ".about-block__information-button");
dialogClose(".about-dialog", ".about-dialog__close-button");

import { viewCarousel } from './carousel/viewCarousel';

viewCarousel(".destinations-carousel",
            ".destinations-block__header-button-right",
            ".destinations-block__header-button-left",
            ".destinations-block__carousel-markers",
            "./json/destinations-cards.json");

viewCarousel(".testimonial-carousel",
            ".testimonial-block__header-button-right",
            ".testimonial-block__header-button-left",
            ".testimonial-block__carousel-markers",
            "./json/testimonial-cards.json");

dialogOpen(".packages-dialog", ".packages-block__information-button");
dialogClose(".packages-dialog", ".packages-dialog__close-button");

import {sendEmail} from './sendEmail';

sendEmail();


document.addEventListener('DOMContentLoaded', () => {
  const dialogs = document.querySelectorAll('dialog');
  
  dialogs.forEach(dialog => {
    dialogPolyfill.registerDialog(dialog);
  });
  
});
