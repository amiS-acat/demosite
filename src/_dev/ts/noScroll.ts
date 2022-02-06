export const noScroll = function () {
  const html = document.querySelector('html') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;

  body.style.top = -html.scrollTop + 'px';
  body.classList.add('no-scroll');
};

export const onScroll = function () {
  const html = document.querySelector('html') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;

  const style = window.getComputedStyle(body);
  const top = style.getPropertyValue('top');

  body.style.top = '';
  body.classList.remove('no-scroll');

  html.scrollTo(0, Number(top.replace(/-/, '').replace(/px/, '')));
};
