class Detect {
    static global() {
        // !start containers
        Detect.main = document.getElementById('main-con');
        Detect.home = document.getElementById('header-carousel-wrapper');
        Detect.steps = document.getElementById('steps');
        Detect.products = document.getElementById('products');
        Detect.pricing = document.getElementById('pricing');
        Detect.comments = document.getElementById('comments');
        Detect.video = document.getElementById('watch-video');
        Detect.rates = document.getElementById('rates');
        Detect.form = document.getElementById('form');
        Detect.contact = document.getElementById('contact');
        Detect.about = document.getElementById('about');
        Detect.members = document.getElementById('members');
        Detect.articles = document.getElementById('article-section');
        Detect.faq = document.getElementById('faq');
        // !end containers
        // *start btns
        Detect.homeBtn = document.querySelectorAll('.home-btn');
        Detect.stepsBtn = document.querySelectorAll('.steps-btn');
        Detect.productsBtn = document.querySelectorAll('.products-btn');
        Detect.pricingBtn = document.querySelectorAll('.pricing-btn');
        Detect.testimonialsBtn = document.querySelectorAll('.testimonials-btn');
        Detect.formBtn = document.querySelectorAll('.form-btn');
        Detect.aboutBtn = document.querySelectorAll('.about-btn');
        Detect.memebersBtn = document.querySelectorAll('.memebers-btn');
        Detect.articlesBtn = document.querySelectorAll('.articles-btn');
        Detect.faqsBtn = document.querySelectorAll('.faqs-btn');
        // *end btns
        Detect.vh = window.innerHeight;
        Detect.yOffset = -115;
        Detect.clickNum = -110;
        Detect.navBtn = document.querySelectorAll('.nav-btn');
        Detect.home_toggle = true;
        Detect.step_toggle = true;
        Detect.product_toggle = true;
        Detect.price_toggle = true;
        Detect.comment_toggle = true;
        Detect.video_toggle = true;
        Detect.rate_toggle = true;
        Detect.form_toggle = true;
        Detect.contact_toggle = true;
        Detect.about_toggle = true;
        Detect.member_toggle = true;
        Detect.article_toggle = true;
        Detect.faq_toggle = true;
    }

    static runHome() {
        let y = window.pageYOffset;
        let offsetTop = Detect.home.offsetTop;
        let height = Detect.home.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.homeBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
    }

    static runSteps() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.steps.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.steps.offsetTop + Detect.yOffset;
        let height = Detect.steps.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.stepsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.step_toggle) {
                let figure = document.querySelectorAll('.fig-con figure');
                figure.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                const h_1 = document.querySelector('#steps .headline h1');
                h_1.classList.add('animate_up');
                // make fn dies
                Detect.step_toggle = false;
            }
            // ?end animate
        }
    }

    static runProducts() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.products.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.products.offsetTop + Detect.yOffset;
        let height = Detect.products.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.productsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.product_toggle) {
                let figure = document.querySelectorAll('.product-text');
                figure.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                const h_1 = document.querySelector('#products .headline h1');
                h_1.classList.add('animate_up');
                // make fn dies
                Detect.product_toggle = false;
            }
            // ?end animate
        }
    }

    static runPricing() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.pricing.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.pricing.offsetTop + Detect.yOffset;
        let height = Detect.pricing.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.pricingBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.price_toggle) {
                let figure = document.querySelectorAll('.pricing-el');
                figure.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                const h_1 = document.querySelector('#pricing .headline h1');
                h_1.classList.add('animate_up');
                // make fn dies
                Detect.price_toggle = false;
            }
            // ?end animate
        }
    }

    static runComments() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.comments.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.comments.offsetTop + Detect.yOffset;
        let height = Detect.comments.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.testimonialsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.comment_toggle) {
                const h_1 = document.querySelector('#comments .headline h1');
                h_1.classList.add('animate_up');
                const comment_carousel = document.getElementById('comments-carousel-wrapper');
                comment_carousel.classList.add('animate_down');
                // run carousel
                Test.toggle = true;
                // make fn dies
                Detect.comment_toggle = false;
            }
            // ?end animate
        }
    }

    static runVideo() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.video.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.video.offsetTop + Detect.yOffset;
        let height = Detect.video.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.testimonialsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.video_toggle) {
                const h_1 = document.querySelector('#watch-video .headline h1');
                h_1.classList.add('animate_up');
                const video_con = document.querySelector('.watch-video-icon-con');
                video_con.classList.add('animate_down');
                // make fn dies
                Detect.video_toggle = false;
            }
            // ?end animate
        }
    }

    static runRates() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.rates.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.rates.offsetTop + Detect.yOffset;
        let height = Detect.rates.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.testimonialsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.rate_toggle) {
                let box = document.querySelectorAll('.rates-box');
                box.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                // run num counter
                Num.toggle = true;
                // make fn dies
                Detect.rate_toggle = false;
            }
            // ?end animate
        }
    }

    static runForm() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.form.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.form.offsetTop + Detect.yOffset;
        let height = Detect.form.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.formBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.form_toggle) {
                const h_1 = document.querySelector('#form .headline h1');
                h_1.classList.add('animate_up');
                const form = document.getElementById('sign-up-form');
                form.classList.add('animate_left');
                const map = document.getElementById('map');
                map.classList.add('animate_right');
                // make fn dies
                Detect.form_toggle = false;
            }
            // ?end animate
        }
    }

    static runContact() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.contact.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.contact.offsetTop + Detect.yOffset;
        let height = Detect.contact.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.contact_toggle) {
                const h_1 = document.querySelector('#contact .headline h1');
                h_1.classList.add('animate_up');
                let section = document.querySelectorAll('#contact-details-wrapper section');
                section.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                // make fn dies
                Detect.contact_toggle = false;
            }
            // ?end animate
        }
    }

    static runAbout() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.about.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.about.offsetTop + Detect.yOffset;
        let height = Detect.about.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.aboutBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.about_toggle) {
                const h_1 = document.querySelector('#about .headline h1');
                h_1.classList.add('animate_up');
                let text = document.querySelector('.about-text-wrapper');
                text.classList.add('animate_down');
                // make fn dies
                Detect.about_toggle = false;
            }
            // ?end animate
        }
    }

    static runMembers() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.members.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.members.offsetTop + Detect.yOffset;
        let height = Detect.members.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.memebersBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.member_toggle) {
                const h_1 = document.querySelector('#members .headline h1');
                h_1.classList.add('animate_up');
                let card = document.querySelectorAll('.mem-card');
                card.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                // make fn dies
                Detect.member_toggle = false;
            }
            // ?end animate
        }
    }

    static runArticles() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.articles.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.articles.offsetTop + Detect.yOffset;
        let height = Detect.articles.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.articlesBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }

        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.article_toggle) {
                const h_1 = document.querySelector('#article-section .headline h1');
                h_1.classList.add('animate_up');
                let article_card = document.getElementById('articles-section-carousel-wrapper');
                article_card.classList.add('animate_down');
                // run carousel
                Art.toggle = true;
                // make fn dies
                Detect.article_toggle = false;
            }
            // ?end animate
        }

    }

    static runFaq() {
        let y = window.pageYOffset;
        let offsetBottom = Detect.faq.offsetTop - Detect.vh + 50;
        let offsetTop = Detect.faq.offsetTop + Detect.yOffset;
        let height = Detect.faq.clientHeight;
        let total = offsetTop + height;
        if (y >= offsetTop && y <= total) {
            // !remove active class from all 
            Detect.navBtn.forEach(function (el) {
                el.classList.remove('active-nav-btn');
            });
            // *add active to related button
            Detect.faqsBtn.forEach(function (el) {
                el.classList.add('active-nav-btn');
            });
        }
        if (y >= offsetBottom) {
            // ?start animate
            if (Detect.faq_toggle) {
                const h_1 = document.querySelector('#faq .headline h1');
                h_1.classList.add('animate_up');
                let faq_cards = document.querySelectorAll('#faq-wrapper section');
                faq_cards.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                //!start footer
                let fooEl = document.querySelectorAll('.foo');
                fooEl.forEach(function (el) {
                    el.classList.add('animate_down');
                });
                //!end footer
                // make fn dies
                Detect.faq_toggle = false;
            }
            // ?end animate
        }
    }

    static init() {
        Detect.global();
    }
}
Detect.init();

// !START EVENTS
window.addEventListener('scroll', function (e) {
    Detect.runHome();
    Detect.runSteps();
    Detect.runProducts();
    Detect.runPricing();
    Detect.runComments();
    Detect.runVideo();
    Detect.runRates();
    Detect.runForm();
    Detect.runContact();
    Detect.runAbout();
    Detect.runMembers();
    Detect.runArticles();
    Detect.runFaq();
});

Detect.main.addEventListener('click', function (e) {
    // 1st btn
    if (e.target.classList.contains('home-btn')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // 2nd btn
    if (e.target.classList.contains('steps-btn')) {
        let y = Detect.steps.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 3rd btn
    if (e.target.classList.contains('products-btn')) {
        let y = Detect.products.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 4th btn
    if (e.target.classList.contains('pricing-btn')) {
        let y = Detect.pricing.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 5th btn
    if (e.target.classList.contains('testimonials-btn')) {
        let y = Detect.comments.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 6th btn
    if (e.target.classList.contains('form-btn')) {
        let y = Detect.form.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 7th btn
    if (e.target.classList.contains('about-btn')) {
        let y = Detect.about.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 8th btn
    if (e.target.classList.contains('memebers-btn')) {
        let y = Detect.members.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 9th btn
    if (e.target.classList.contains('articles-btn')) {
        let y = Detect.articles.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    // 10th btn
    if (e.target.classList.contains('faqs-btn')) {
        let y = Detect.faq.getBoundingClientRect().top + window.pageYOffset + Detect.clickNum;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

});
// !END EVENTS