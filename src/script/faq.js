class Faq {
    static global() {
        Faq.q = document.querySelectorAll('.question h4');
        Faq.a = document.querySelectorAll('.answer');
    }

    static getAnswer() {
        Faq.q.forEach(function (qEl) {
            qEl.addEventListener('click', function (e) {
                if (e.target.parentElement.nextElementSibling.clientHeight == 0) { // height = 0
                    Faq.q.forEach(function (item) {
                        // !start reset all 
                        item.parentElement.nextElementSibling.style.height = '0';
                        item.parentElement.parentElement.style.border = '0';
                        item.style.color = '#666';
                        item.previousElementSibling.style.transform = 'translateY(-50%) rotate(0deg)';
                        item.previousElementSibling.style.fill = '#666';
                        // !end reset all
                        // ?start getting actual height
                        e.target.parentElement.nextElementSibling.style.height = 'auto';
                        let height = e.target.parentElement.nextElementSibling.clientHeight + 'px';
                        e.target.parentElement.nextElementSibling.style.height = '0';
                        // ?start getting actual height
                        // *start target
                        setTimeout(function () {
                            e.target.parentElement.nextElementSibling.style.height = height;
                            e.target.parentElement.parentElement.style.border = '1px solid #6a11cb';
                            e.target.style.color = '#6a11cb';
                            e.target.previousElementSibling.style.transform = 'translateY(-50%) rotate(180deg)';
                            e.target.previousElementSibling.style.fill = '#6a11cb';
                        }, 0);
                        // *end target
                    });
                } else { // height > 0
                    // !start reset target
                    e.target.parentElement.nextElementSibling.style.height = '0';
                    e.target.parentElement.parentElement.style.border = '0';
                    e.target.style.color = '#666';
                    e.target.previousElementSibling.style.transform = 'translateY(-50%) rotate(0deg)';
                    e.target.previousElementSibling.style.fill = '#666';
                    // !end reset target
                }
            });
        });
    }

    static init() {
        Faq.global();
        Faq.getAnswer();
    }
}

Faq.init();