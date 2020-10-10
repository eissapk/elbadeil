class MainApp {
    // *start global
    static global() {
        MainApp.toggleNum = false;
        MainApp.vh = window.innerHeight;
        MainApp.footer = document.querySelector('footer');
        MainApp.faq = document.getElementById('faq');
        MainApp.loaderCon = document.getElementById('loader-con');
        MainApp.body = document.getElementsByTagName('body')[0];
        MainApp.popupCon = document.getElementById('popup');
        MainApp.popupIconCon = document.getElementById('popup-icon');
        MainApp.popupTextCon = document.getElementById('popup-text');
        MainApp.openBtn = document.querySelectorAll('.popup-open');
        MainApp.closeBtn = document.querySelectorAll('.popup-close');
        MainApp.scrollCon = document.getElementById('scroll-top');
        MainApp.scrollBtn = document.querySelectorAll('.scroll-top-btn');
        // actual rates numbers in en
        MainApp.ratesToggle = true;
        MainApp.getHappyNum;
        MainApp.getActiveNum;
        MainApp.getTotalNum;
    }
    // *end global

    // !start arabicNum
    static arabicNum() {
        // *convert rates text to number
        if (MainApp.ratesToggle) {
            MainApp.getHappyNum = Number(document.getElementById('happy-num').textContent);
            MainApp.getActiveNum = Number(document.getElementById('active-num').textContent);
            MainApp.getTotalNum = Number(document.getElementById('total-num').textContent);
            // die
            MainApp.ratesToggle = false;
        }

        // !convert numbers to relative language
        if (!MainApp.toggleNum) {
            let map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"]; // * ar Decimal Code
            // let map = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
            let body = document.querySelectorAll('.replace-digit');
            body.forEach(function (item) {
                item.innerHTML = item.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function (e) {
                    return map[e];
                });
            });
        }
        if (MainApp.toggleNum) { // * en version
            let body = document.querySelectorAll('.replace-digit');
            let map = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
            body.forEach(function (el) {
                var str = el.innerHTML;
                for (var i = 0; i < 10; i++) {
                    str = str.replace(map[i], i);
                }
                el.innerHTML = str;
            });
        }
    }
    // !end arabicNum

    // *start footer bug fix
    static fixFooterBug() {
        let y = window.pageYOffset;
        let target = MainApp.faq.offsetTop - (MainApp.vh);
        let height = MainApp.footer.clientHeight + 'px';
        if (y >= target) {
            MainApp.footer.style.display = 'block';
            MainApp.faq.style.marginBottom = height;
        } else {
            MainApp.footer.style.display = 'none';
        }
    }
    // *end footer bug fix

    // !start loader
    static loader() {
        MainApp.loaderCon.style.display = 'none';
        MainApp.body.style.overflow = 'auto';
        // run header carousel
        Header.toggle = true;
        // display popup after 5 seconds
        setTimeout(function () {
            MainApp.popupCon.style.display = 'block';
        }, 5000);

    }
    // !end loader

    // start popup
    static popup(e) {

        if (e.target.classList.contains('popup-close')) {
            MainApp.popupTextCon.style.display = 'none';
            MainApp.openBtn.forEach(function (el) {
                el.style.display = 'block';
            });
        }

        if (e.target.classList.contains('popup-open')) {
            MainApp.popupTextCon.style.display = 'block';
            MainApp.closeBtn.forEach(function (el) {
                el.style.display = 'block';
            });
            MainApp.openBtn.forEach(function (el) {
                el.style.display = 'none';
            });
        }

    }
    // end popup

    // start scroll top
    static scrollTop() {
        MainApp.scrollBtn.forEach(function (el) {
            el.addEventListener('click', function (e) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    }

    static displayScroll() {
        let y = window.pageYOffset;
        let offsetTop = document.getElementById('steps').offsetTop - 75;
        if (y >= offsetTop) {
            MainApp.scrollCon.style.display = 'block';
        } else {
            MainApp.scrollCon.style.display = 'none';
        }
    }
    // end scroll top

    // ?start init
    static init() {
        MainApp.global();
        MainApp.arabicNum();
        MainApp.scrollTop();
    }
    // ?end init

}
MainApp.init();
// !START EVENTS
window.addEventListener('scroll', function (e) {
    MainApp.fixFooterBug();
    MainApp.displayScroll();
});

window.addEventListener('load', function (e) {
    MainApp.loader();
});

MainApp.popupIconCon.addEventListener('click', function (e) {
    MainApp.popup(e);
});
// !END EVENTS