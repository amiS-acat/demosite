import { focusControl } from './focusControl';

const menuOpen = function (btn: HTMLElement, menu: HTMLElement) {
  btn.classList.add('--open');
  menu.classList.add('--open');
}

const menuClose = function (btn: HTMLElement, menu: HTMLElement) {
  btn.classList.remove('--open');
  menu.classList.remove('--open');
}

export const h_menuToggle = function () {
  const btn = document.querySelector('#js-menu-btn') as HTMLElement;

  if (!btn) {
    return;
  }

  const menu = document.querySelector('header');

  if (menu) {
    btn.addEventListener('click', function () {
      if (!btn.classList.contains('--open')) {
        menuOpen(btn, menu);
        focusControl(menu);
      } else {
        menuClose(btn, menu);
      }
    }, false);
  }
};
