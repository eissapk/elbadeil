class Test {
    static global() {
        Test.slider = document.getElementById('inner-comments-carousel-wrapper');
        Test.slides = document.querySelectorAll('.comments-carousel-content');
        Test.dots = document.querySelectorAll('#comments-carousel-dots span');
        Test.time = 5000;
        Test.auto = true;
        Test.counter = 0;
        Test.num = 0;
        Test.sliderWidth = 100;
        Test.sliderTotalWidth = (Test.slides.length * Test.sliderWidth) - Test.sliderWidth;
        Test.interval;
        Test.toggle = false;
        Test.lanToggle = false;
    }

    static next() {

        if (Test.toggle) { // * if true then carousel in the viewport

            if (!Test.lanToggle) { // !ar version
                // clear
                Test.clear();
                if (Test.counter < Test.sliderTotalWidth) {
                    Test.counter += Test.sliderWidth;
                } else {
                    Test.counter = 0;
                }
            }

            if (Test.lanToggle) { // !en version
                // clear
                Test.clear();
                if (Test.counter < Test.sliderTotalWidth) { // 0 < 200
                    Test.counter -= Test.sliderWidth;
                }
                if (Test.counter < -200) {
                    Test.counter = 0;
                }

            }

            // add style to slider 
            Test.slider.style.transform = `translateX(${Test.counter}%)`;
            // remove active class
            Test.dots.forEach(function (el) {
                el.classList.remove('active_2');
            });

            if (!Test.lanToggle) { // !ar version
                // update num with counter 
                if (Test.counter == 0) {
                    Test.num = 0;
                }
                if (Test.counter == 100) {
                    Test.num = 1;
                }
                if (Test.counter == 200) {
                    Test.num = 2;
                }
            }

            if (Test.lanToggle) { // !en version
                // update num with counter 
                if (Test.counter == 0) {
                    Test.num = 0;
                }
                if (Test.counter == -100) {
                    Test.num = 1;
                }
                if (Test.counter == -200) {
                    Test.num = 2;
                }
            }

            // add active class
            Test.dots.forEach(function (el, index, array) {
                array[Test.num].classList.add('active_2');
            });

        }

    }

    static navigate() {
        for (let i = 0; i < Test.dots.length; i += 1) {
            Test.dots[i].addEventListener('click', function (e) {
                Test.dots[i].index = i;
                let digit = e.target.index;
                // remove active class
                Test.dots.forEach(function (el) {
                    el.classList.remove('active_2');
                });

                if (!Test.lanToggle) { // !ar version
                    // sync counter
                    if (digit == 0) {
                        Test.counter = 0;
                    }
                    if (digit == 1) {
                        Test.counter = 100;
                    }
                    if (digit == 2) {
                        Test.counter = 200;
                    }
                }

                if (Test.lanToggle) { // !en version
                    // sync counter
                    if (digit == 0) {
                        Test.counter = 0;
                    }
                    if (digit == 1) {
                        Test.counter = -100;
                    }
                    if (digit == 2) {
                        Test.counter = -200;
                    }
                }

                // add style to slider 
                Test.slider.style.transform = `translateX(${Test.counter}%)`;
                // add active class
                Test.dots.forEach(function (el, index, array) {
                    array[digit].classList.add('active_2');
                });
                // clear interval
                Test.clear();
            });
        }
    }

    static clear() {
        if (Test.auto) {
            clearInterval(Test.interval);
            Test.interval = setInterval(Test.next, Test.time);
        }
    }

    static init() {
        Test.global();
        Test.navigate();
        if (Test.auto) {
            Test.interval = setInterval(Test.next, Test.time);
        }
    }
}
Test.init();