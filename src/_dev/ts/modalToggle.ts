import { noScroll } from './noScroll';
import { onScroll } from './noScroll';
import { focusControl } from './focusControl';

const modalOpen = function (content: Element) {
  content.classList.add('--open');
  const div = content.querySelector('div');
  if(div) {
    div.classList.add('--open');
  }
};
const modalClose = function (content: Element) {
  content.classList.remove('--open');
  const div = content.querySelector('div');
  if(div) {
    div.classList.remove('--open');
  }
};

export const modalToggle = function () {
  const html = document.querySelector('html') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const opens = document.querySelectorAll('.js-modal-open');

  if (opens.length === 0) {
    return;
  }

  const closes = document.querySelectorAll('.js-modal-close');
  const contents = document.querySelectorAll('.js-modal-content');

  opens.forEach(function (open, i) {
    open.addEventListener('click', function () {
      modalOpen(contents[i]);
      noScroll();
      focusControl(contents[i]);
    });
  });
  closes.forEach(function (close, i) {
    close.addEventListener('click', function () {
      modalClose(contents[i]);
      onScroll();
    });
  });
};
