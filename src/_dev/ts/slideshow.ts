const clone = function (slide: Element) {
  const els = slide.querySelectorAll('div');
  for (let i = 0; i < 2; i++) {
    els.forEach(function (el) {
      slide.appendChild(el.cloneNode(true));
    });
  }
};

const scroll = function (slide: Element, index: number) {
  const els = slide.querySelectorAll('div');
  const len = els.length;

  els[index === 0 ? len - 1 : index - 1].className = 'prev';
  els[index === 0 ? len - 2 : index === 1 ? len - 1 : index - 2].className =
    'prev-prev';
  els[index].className = 'current';
  els[index === len - 1 ? 0 : index + 1].className = 'next';
  els[index === len - 1 ? 1 : index === len - 2 ? 0 : index + 2].className =
    'next-next';
};

const autoScroll = function (slide: Element, index: number) {
  const els = slide.querySelectorAll('div');
  const len = els.length;

  setInterval(function () {
    index = index === len - 1 ? 0 : index + 1;
    els.forEach(function (el) {
      el.className = '';
    });
    scroll(slide, index);
  }, 5000);
};

export const slideshow = function () {
  const slides = document.querySelectorAll('.js-slideshow');

  if (slides.length === 0) {
    return;
  }

  let index = 0;
  slides.forEach(function (slide) {
    clone(slide);
    scroll(slide, index);
    autoScroll(slide, index);
  });
};
