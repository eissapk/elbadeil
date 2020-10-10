class Num {

    constructor(start, end, range) {
        this.start = start;
        this.end = end;
        this.range = range;
    }

    static global() {
        Num.ar_num = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        Num.wrapper = document.getElementById('rates');
        Num.happyCon = document.getElementById('happy-num');
        Num.activeCon = document.getElementById('active-num');
        Num.totalCon = document.getElementById('total-num');
        Num.t = 5000;
        Num.range_1 = MainApp.getHappyNum - 0;
        Num.range_2 = MainApp.getActiveNum - 0;
        Num.range_3 = MainApp.getTotalNum - 0;
        Num.duration_1 = Num.t / Num.range_1;
        Num.duration_2 = Num.t / Num.range_2;
        Num.duration_3 = Num.t / Num.range_3;
        Num.intervalOne;
        Num.intervalTwo;
        Num.intervalThree;
        Num.toggle = false;
        Num.lanToggle = false;
    }

    static counterOne() {
        // START HAPPY
        if (happy.start < happy.end) {
            happy.start += 1;
        } else {
            happy.start = happy.end;
            // clear
            clearInterval(Num.intervalOne);
        }
        // write to html
        Num.happyCon.textContent = happy.start;
        // !start convert numbers
        if (!Num.lanToggle) { // * ar version
            Num.happyCon.textContent = Num.happyCon.textContent.replace(/\d(?=[^<>]*(<|$))/g, function (e) {
                return Num.ar_num[e];
            });
        }
        // !end convert numbers
        // END HAPPY
    }

    static counterTwo() {
        // START ACTIVE
        if (active.start < active.end) {
            active.start += 1;
        } else {
            active.start = active.end;
            // clear
            clearInterval(Num.intervalTwo);
        }
        // write to html
        Num.activeCon.textContent = active.start;
        // !start convert numbers
        if (!Num.lanToggle) { // * ar version
            Num.activeCon.textContent = Num.activeCon.textContent.replace(/\d(?=[^<>]*(<|$))/g, function (e) {
                return Num.ar_num[e];
            });
        }
        // !end convert numbers

        // END ACTIVE
    }

    static counterThree() {
        // START ACTIVE
        if (total.start < total.end) {
            total.start += 1;
        } else {
            total.start = total.end;
            // clear
            clearInterval(Num.intervalThree);
        }
        // write to html
        Num.totalCon.textContent = total.start;
        // !start convert numbers
        if (!Num.lanToggle) { // * ar version
            Num.totalCon.textContent = Num.totalCon.textContent.replace(/\d(?=[^<>]*(<|$))/g, function (e) {
                return Num.ar_num[e];
            });
        }
        // !end convert numbers
        // END ACTIVE
    }

    static scroll() {
        if (Num.toggle) {
            Num.intervalOne = setInterval(Num.counterOne, Num.duration_1);
            Num.intervalTwo = setInterval(Num.counterTwo, Num.duration_2);
            Num.intervalThree = setInterval(Num.counterThree, Num.duration_3);
            // make fn dies
            Num.toggle = false;
        }
    }

    static init() {
        Num.global();
    }
}

Num.init();

// Instantiation 
let happy = new Num(0, MainApp.getHappyNum, Num.range_1);
let active = new Num(0, MainApp.getActiveNum, Num.range_2);
let total = new Num(0, MainApp.getTotalNum, Num.range_3);

// EVENT
window.addEventListener('scroll', function () {
    Num.scroll();
});