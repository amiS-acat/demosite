export const focusControl = function (el: Element) {
  const focusEl = el.querySelectorAll('a, button');

  if(focusEl.length === 0) {
    return;
  }

  var first = focusEl[0] as HTMLElement;
  var last = focusEl[focusEl.length - 1] as HTMLElement;

  document.addEventListener('keydown', function (e) {
    var active = document.activeElement;
    if (!e.shiftKey && e.key === 'Tab' && last === active) {
      e.preventDefault();
      first.focus();
    }
    if (e.shiftKey && e.key === 'Tab' && first === active) {
      e.preventDefault();
      last.focus();
    }
  });
};
