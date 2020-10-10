class Nav {
    static global() {
        Nav.body = document.getElementsByTagName('body')[0];
        Nav.btn = document.querySelector('.menu-btn');
        Nav.dash_1 = document.querySelector('#dash_1');
        Nav.dash_2 = document.querySelector('#dash_2');
        Nav.dash_3 = document.querySelector('#dash_3');
        Nav.dash_4 = document.querySelector('#dash_4');
        Nav.sideNav = document.querySelector('#side-nav');
        Nav.bottomNav = document.querySelector('#bottom-nav');
        Nav.oldValue = 0;
        Nav.trigger = false;
    }
    static toggle() {
        if (Nav.trigger) {
            Nav.sideNav.style.height = '0px';
            Nav.dash_1.style.opacity = '1';
            Nav.dash_4.style.opacity = '1';
            Nav.dash_2.style.transform = 'rotate(0deg)';
            Nav.dash_3.style.transform = 'rotate(0deg)';
            // page scroll
            Nav.body.style.overflow = 'auto';
            // die
            Nav.trigger = false;
        } else {
            Nav.sideNav.style.height = '50vh';
            Nav.dash_1.style.opacity = '0';
            Nav.dash_4.style.opacity = '0';
            Nav.dash_2.style.transform = 'rotate(45deg)';
            Nav.dash_3.style.transform = 'rotate(-45deg)';
            // page scroll
            Nav.body.style.overflow = 'hidden';
            // die
            Nav.trigger = true;
        }



    }
    static lowerNav() {
        if (Nav.oldValue - window.pageYOffset < 0) {
            Nav.bottomNav.style.height = '0px';
            // document.querySelector('.upper-nav ').style.borderBottom = '0';
        }
        if (Nav.oldValue - window.pageYOffset > 0) {
            Nav.bottomNav.style.height = '40px';
            // document.querySelector('.upper-nav ').style.borderBottom = '1px solid #e0e0e0';
        }
        Nav.oldValue = window.pageYOffset;
    }
}
Nav.global();

// !events
Nav.btn.addEventListener('click', function () {
    Nav.toggle();
});
window.addEventListener('scroll', function () {
    Nav.lowerNav();
});

// hint btn
Nav.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('clickRemoveHint')) {
        // remove hint from dom
        document.getElementById('hint').remove();
    }
});