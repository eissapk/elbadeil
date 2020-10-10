class Art {
    static global() {
        Art.slider = document.getElementById('inner-articles-section-carousel-wrapper');
        Art.slides = document.querySelectorAll('.articles-section-carousel-content');
        Art.dots = document.querySelectorAll('#articles-section-carousel-dots span');
        Art.line = document.querySelectorAll('.art-line');
        Art.time = 5000;
        Art.auto = true;
        Art.counter = 0;
        Art.num = 0;
        Art.sliderWidth = 100;
        Art.sliderTotalWidth = (Art.slides.length * Art.sliderWidth) - Art.sliderWidth;
        Art.interval;
        Art.toggle = false;
    }

    static next() {

        if (Art.toggle) {

            if (Art.counter < Art.sliderTotalWidth) {
                Art.counter += Art.sliderWidth;
            } else {
                Art.counter = 0;
            }
            // add style to slider 
            Art.slider.style.transform = `translateX(${Art.counter}%)`;
            // remove active class
            Art.dots.forEach(function (el) {
                el.classList.remove('active_3');
            });
            // remove now class
            Art.line.forEach(function (el) {
                el.classList.remove('now');
            });
            // update num with counter 
            if (Art.counter == 0) {
                Art.num = 0;
            }
            if (Art.counter == 100) {
                Art.num = 1;
            }
            // add active class
            Art.dots.forEach(function (el, index, array) {
                array[Art.num].classList.add('active_3');
            });
            // add now class
            Art.line.forEach(function (el, index, array) {
                array[Art.num].classList.add('now');
            });
        }
    }

    static navigate() {
        for (let i = 0; i < Art.dots.length; i += 1) {
            Art.dots[i].addEventListener('click', function (e) {
                Art.dots[i].index = i;
                let digit = e.target.index;
                // remove active class
                Art.dots.forEach(function (el) {
                    el.classList.remove('active_3');
                });
                // remove now class
                Art.line.forEach(function (el) {
                    el.classList.remove('now');
                });
                // sync counter
                if (digit == 0) {
                    Art.counter = 0;
                }
                if (digit == 1) {
                    Art.counter = 100;
                }
                if (digit == 2) {
                    Art.counter = 200;
                }
                // add style to slider 
                Art.slider.style.transform = `translateX(${Art.counter}%)`;
                // add active class
                Art.dots.forEach(function (el, index, array) {
                    array[digit].classList.add('active_3');
                });
                // add now class
                Art.line.forEach(function (el, index, array) {
                    array[digit].classList.add('now');
                });
                // clear interval
                Art.clear();
            });
        }
    }

    static clear() {
        if (Art.auto) {
            clearInterval(Art.interval);
            Art.interval = setInterval(Art.next, Art.time);
        }
    }

    static init() {
        Art.global();
        Art.navigate();
        if (Art.auto) {
            Art.interval = setInterval(Art.next, Art.time);
        }
    }

}
Art.init();