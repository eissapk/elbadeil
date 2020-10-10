class Header {
    static global() {
        Header.slides = document.querySelectorAll('.header-carousel-content');
        Header.slidesDots = document.querySelectorAll('.header-carousel-dots span');
        Header.counter = 0;
        Header.time = 5000;
        Header.auto = true;
        Header.interval;
        Header.toggle = false;
    }
    static next() {
        if (Header.toggle) {
            // remove current class from all contents
            Header.slides.forEach(function (el) {
                el.classList.remove('current');
            });
            // remove active class from all dots
            Header.slidesDots.forEach(function (el) {
                el.classList.remove('active');
            });
            // setting counter numbers rage [0,...,3]
            if (Header.counter < Header.slides.length - 1) {
                Header.counter += 1;
            } else {
                Header.counter = 0;
            }
            // add classes [current / active] 
            Header.slides[Header.counter].classList.add('current');
            Header.slidesDots[Header.counter].classList.add('active');
        }
    }
    static navigate() {
        Header.slidesDots.forEach(function (item, index, array) {
            // getting indexes of dots
            array[index].index = index;
            // click event 
            array[index].addEventListener('click', function (e) {
                // remove current class from all contents
                Header.slides.forEach(function (el) {
                    el.classList.remove('current');
                });
                // remove active class from all dots
                Header.slidesDots.forEach(function (el) {
                    el.classList.remove('active');
                });
                // update counter
                let num = e.target.index;
                Header.counter = num;
                // add classes [current / active] 
                Header.slides[num].classList.add('current');
                Header.slidesDots[num].classList.add('active');
                // clear
                Header.clear();
            });
        });
    }
    static clear() {
        if (Header.auto) {
            clearInterval(Header.interval);
            Header.interval = setInterval(Header.next, Header.time);
        }
    }
    static init() {
        Header.global();
        Header.navigate();
        if (Header.auto) {
            Header.interval = setInterval(Header.next, Header.time);
        }
    }
}
Header.init();