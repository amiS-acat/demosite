!function(){"use strict";var e={697:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.focusControl=void 0,o.focusControl=function(e){const o=e.querySelectorAll("a, button");if(0!==o.length){var t=o[0],n=o[o.length-1];document.addEventListener("keydown",(function(e){var o=document.activeElement;e.shiftKey||"Tab"!==e.key||n!==o||(e.preventDefault(),t.focus()),e.shiftKey&&"Tab"===e.key&&t===o&&(e.preventDefault(),n.focus())}))}}},149:function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0}),o.h_menuToggle=void 0;const n=t(697);o.h_menuToggle=function(){const e=document.querySelector("#js-menu-btn");if(!e)return;const o=document.querySelector("header");o&&e.addEventListener("click",(function(){e.classList.contains("--open")?function(e,o){e.classList.remove("--open"),o.classList.remove("--open")}(e,o):(function(e,o){e.classList.add("--open"),o.classList.add("--open")}(e,o),(0,n.focusControl)(o))}),!1)}},362:function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0}),o.modalToggle=void 0;const n=t(762),c=t(762),l=t(697);o.modalToggle=function(){document.querySelector("html"),document.querySelector("body");const e=document.querySelectorAll(".js-modal-open");if(0===e.length)return;const o=document.querySelectorAll(".js-modal-close"),t=document.querySelectorAll(".js-modal-content");e.forEach((function(e,o){e.addEventListener("click",(function(){!function(e){e.classList.add("--open");const o=e.querySelector("div");o&&o.classList.add("--open")}(t[o]),(0,n.noScroll)(),(0,l.focusControl)(t[o])}))})),o.forEach((function(e,o){e.addEventListener("click",(function(){!function(e){e.classList.remove("--open");const o=e.querySelector("div");o&&o.classList.remove("--open")}(t[o]),(0,c.onScroll)()}))}))}},762:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.onScroll=o.noScroll=void 0,o.noScroll=function(){const e=document.querySelector("html"),o=document.querySelector("body");o.style.top=-e.scrollTop+"px",o.classList.add("no-scroll")},o.onScroll=function(){const e=document.querySelector("html"),o=document.querySelector("body"),t=window.getComputedStyle(o).getPropertyValue("top");o.style.top="",o.classList.remove("no-scroll"),e.scrollTo(0,Number(t.replace(/-/,"").replace(/px/,"")))}},335:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.slideshow=void 0;const t=function(e,o){const t=e.querySelectorAll("div"),n=t.length;t[0===o?n-1:o-1].className="prev",t[0===o?n-2:1===o?n-1:o-2].className="prev-prev",t[o].className="current",t[o===n-1?0:o+1].className="next",t[o===n-1?1:o===n-2?0:o+2].className="next-next"};o.slideshow=function(){const e=document.querySelectorAll(".js-slideshow");0!==e.length&&e.forEach((function(e){!function(e){const o=e.querySelectorAll("div");for(let t=0;t<2;t++)o.forEach((function(o){e.appendChild(o.cloneNode(!0))}))}(e),t(e,0),function(e,o){const n=e.querySelectorAll("div"),c=n.length;setInterval((function(){o=o===c-1?0:o+1,n.forEach((function(e){e.className=""})),t(e,o)}),5e3)}(e,0)}))}},849:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.smoothScroll=void 0,o.smoothScroll=function(){document.querySelectorAll('a[href^="#anc-"]').forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault();let t=e.getAttribute("href");if(!t)return;const n=document.getElementById(t.replace("#","")).getBoundingClientRect().top,c=window.pageYOffset,l=document.querySelector(".header_left");let r=0;l&&(r=l.offsetHeight);const s=n+c-r;window.scrollTo({top:s,behavior:"smooth"})}))}))}}},o={};function t(n){var c=o[n];if(void 0!==c)return c.exports;var l=o[n]={exports:{}};return e[n](l,l.exports,t),l.exports}!function(){const e=t(149),o=t(362),n=t(335),c=t(849);document.querySelector("html").dataset.jsOn="true",(0,e.h_menuToggle)(),(0,c.smoothScroll)(),(0,o.modalToggle)(),(0,n.slideshow)()}()}();