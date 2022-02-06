import { h_menuToggle } from './h_menuToggle';
import { modalToggle } from './modalToggle';
import { slideshow } from './slideshow';
import { smoothScroll } from './smoothScroll';

(function () {
  const html = document.querySelector('html') as HTMLElement;
  html.dataset.jsOn = 'true';

  h_menuToggle();
  smoothScroll();
  modalToggle();
  slideshow();
})();
