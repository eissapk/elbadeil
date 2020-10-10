class About {
    static global() {
        About.btn = document.getElementById('about-btn');
        About.section = document.querySelector('.about-down');
        About.lanToggle = false;
    }

    static readMore() {
        if (!About.section.classList.contains('about-active')) {
            About.section.classList.add('about-active');
            About.section.style.height = 'auto';
            let height = About.section.clientHeight + 'px';
            About.section.style.height = '0';
            setTimeout(function () {
                About.section.style.height = height;
            }, 0);
            if (!About.lanToggle) { // ! ar version
                About.btn.innerText = 'اقل';
            }
            if (About.lanToggle) { // * en version
                About.btn.innerText = 'less';
            }
        } else {
            About.section.style.height = '0';
            setTimeout(function () {
                About.section.classList.remove('about-active');
            }, 600);
            if (!About.lanToggle) { // ! ar version
                About.btn.innerText = 'مزيد';
            }
            if (About.lanToggle) { // * en version
                About.btn.innerText = 'more';
            }
        }
    }

    static init() {
        About.global();
    }
}
About.init();

// *start events
About.btn.addEventListener('click', function () {
    About.readMore();
});
// *start events