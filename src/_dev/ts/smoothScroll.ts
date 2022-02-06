export const smoothScroll = function () {
    const triggers = document.querySelectorAll('a[href^="#anc-"]');
    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            let href = trigger.getAttribute('href');

            if (!href) {
                return
            }

            let target = document.getElementById(href.replace('#', '')) as HTMLElement;
            const rect = target.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const header = document.querySelector('.header_left') as HTMLElement;
            let gap = 0;;

            if (header) {
                gap = header.offsetHeight;
            }

            const scroll = rect + offset - gap;

            window.scrollTo({
                top: scroll,
                behavior: 'smooth',
            });
        });
    });
};
