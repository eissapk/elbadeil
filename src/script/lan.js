class Lan {

    static global() {
        Lan.websiteTitle = document.querySelector('head title');
        Lan.wrapper = document.querySelectorAll('.language-wrapper');
        Lan.ar = document.querySelectorAll('.ar');
        Lan.en = document.querySelectorAll('.en');
        Lan.htmlEl = document.getElementsByTagName('html')[0];
        Lan.headEl = document.getElementsByTagName('head')[0];
        Lan.xhr = new XMLHttpRequest();
        Lan.file = 'en.json';
        Lan.toggle = true;
        // !start lang con

        // start notifications
        Lan.successHeader = document.getElementById('success-header-lan');
        Lan.successBody = document.getElementById('success-body-lan');
        Lan.successBtn = document.getElementById('success-btn-lan');
        Lan.errorHeader = document.getElementById('error-header-lan');
        Lan.errorBody = document.getElementById('error-body-lan');
        Lan.errorBtn = document.getElementById('error-btn-lan');
        // end notifications

        // start popup
        Lan.popupText = document.getElementById('popup-text-lan');
        Lan.popupBtn = document.getElementById('popup-btn-lan');
        // end popup

        // start nav
        Lan.logo = document.getElementById('logo-lan');
        Lan.homeBtn = document.querySelectorAll('.home-lan');
        Lan.stepsBtn = document.querySelectorAll('.steps-lan');
        Lan.productsBtn = document.querySelectorAll('.products-lan');
        Lan.pricingBtn = document.querySelectorAll('.pricing-lan');
        Lan.testimonialsBtn = document.querySelectorAll('.testimonials-lan');
        Lan.formBtn = document.querySelectorAll('.form-lan');
        Lan.aboutBtn = document.querySelectorAll('.about-lan');
        Lan.memebersBtn = document.querySelectorAll('.memebers-lan');
        Lan.articlesBtn = document.querySelectorAll('.articles-lan');
        Lan.faqsBtn = document.querySelectorAll('.faqs-lan');
        // end nav

        // start hint
        Lan.hintText = document.getElementById('hint-lan');
        // end hint

        // start header
        Lan.headerTitleOne = document.getElementById('title-1-lan');
        Lan.headerTitleTwo = document.getElementById('title-2-lan');
        Lan.headerTitleThree = document.getElementById('title-3-lan');
        Lan.headerTitleFour = document.getElementById('title-4-lan');
        Lan.replace = document.querySelectorAll('.replace-lan');
        Lan.cash = document.querySelectorAll('.cash-lan');
        // end header

        // start steps
        Lan.stepsHeader = document.querySelector('#steps .headline h1');
        Lan.stepsCard_1 = document.getElementById('card-1-lan');
        Lan.stepsCard_2 = document.getElementById('card-2-lan');
        Lan.stepsCard_3 = document.getElementById('card-3-lan');
        Lan.stepsCard_4 = document.getElementById('card-4-lan');
        // end steps

        // start products
        Lan.productsHeader = document.querySelector('#products .headline h1');
        Lan.productsName_1 = document.getElementById('product-name-1-lan');
        Lan.productsName_2 = document.getElementById('product-name-2-lan');
        Lan.productsName_3 = document.getElementById('product-name-3-lan');
        Lan.productsName_4 = document.getElementById('product-name-4-lan');
        // end products


        // start pricing
        Lan.pricingHeader = document.querySelector('#pricing .headline h1');
        Lan.pricingUnit = document.querySelectorAll('.pricing-unit-lan');
        Lan.pricingPeriod = document.querySelectorAll('.pricing-period-lan');
        Lan.pricingSecBtn = document.querySelectorAll('.pricing-btn-lan');

        Lan.pricingName_1 = document.getElementById('pricing-name-1-lan');
        Lan.pricingName_2 = document.getElementById('pricing-name-2-lan');
        Lan.pricingName_3 = document.getElementById('pricing-name-3-lan');
        Lan.pricingName_4 = document.getElementById('pricing-name-4-lan');

        // start pricing descriptions
        Lan.pricingDes_1_1 = document.getElementById('pricing-des-1_1-lan');
        Lan.pricingDes_1_2 = document.getElementById('pricing-des-1_2-lan');
        Lan.pricingDes_1_3 = document.getElementById('pricing-des-1_3-lan');
        Lan.pricingDes_1_4 = document.getElementById('pricing-des-1_4-lan');

        Lan.pricingDes_2_1 = document.getElementById('pricing-des-2_1-lan');
        Lan.pricingDes_2_2 = document.getElementById('pricing-des-2_2-lan');
        Lan.pricingDes_2_3 = document.getElementById('pricing-des-2_3-lan');
        Lan.pricingDes_2_4 = document.getElementById('pricing-des-2_4-lan');

        Lan.pricingDes_3_1 = document.getElementById('pricing-des-3_1-lan');
        Lan.pricingDes_3_2 = document.getElementById('pricing-des-3_2-lan');
        Lan.pricingDes_3_3 = document.getElementById('pricing-des-3_3-lan');
        Lan.pricingDes_3_4 = document.getElementById('pricing-des-3_4-lan');

        Lan.pricingDes_4_1 = document.getElementById('pricing-des-4_1-lan');
        Lan.pricingDes_4_2 = document.getElementById('pricing-des-4_2-lan');
        Lan.pricingDes_4_3 = document.getElementById('pricing-des-4_3-lan');
        Lan.pricingDes_4_4 = document.getElementById('pricing-des-4_4-lan');
        // end pricing descriptions
        // end pricing

        // start comments
        Lan.commentsHeader = document.querySelector('#comments .headline h1');
        // start card one
        Lan.commentsContent_1 = document.getElementById('comments-content-1-lan');
        Lan.commentsContent_1_name = document.querySelector('#comments-info-wrapper-1-lan h2');
        Lan.commentsContent_1_job = document.querySelector('#comments-info-wrapper-1-lan p');
        // end card one

        // start card one
        Lan.commentsContent_2 = document.getElementById('comments-content-2-lan');
        Lan.commentsContent_2_name = document.querySelector('#comments-info-wrapper-2-lan h2');
        Lan.commentsContent_2_job = document.querySelector('#comments-info-wrapper-2-lan p');
        // end card one

        // start card one
        Lan.commentsContent_3 = document.getElementById('comments-content-3-lan');
        Lan.commentsContent_3_name = document.querySelector('#comments-info-wrapper-3-lan h2');
        Lan.commentsContent_3_job = document.querySelector('#comments-info-wrapper-3-lan p');
        // end card one
        // end comments

        // start video
        Lan.watchVideoHeader = document.querySelector('#watch-video .headline h1');
        // end video

        // start rates
        Lan.ratesHappyTitle = document.getElementById('rates-happy-lan');
        Lan.ratesActiveTitle = document.getElementById('rates-active-lan');
        Lan.ratesTotalTitle = document.getElementById('rates-total-lan');
        // end rates

        // start form

        Lan.formHeader = document.querySelector('#form .headline h1');
        Lan.formTitle = document.getElementById('form-title');
        Lan.formSectionBtn = document.querySelectorAll('.form-submit-btn-lan');

        // start selector
        Lan.formSelector_form_1 = document.getElementById('selector-form-1-lan');
        Lan.formSelector_form_2 = document.getElementById('selector-form-2-lan');
        Lan.formSelector_form_3 = document.getElementById('selector-form-3-lan');
        // end selector


        // start label
        Lan.formNameLabel = document.querySelectorAll('.form-name-label-lan');
        Lan.formPhoneLabel = document.querySelectorAll('.form-phone-label-lan');
        Lan.formAddressLabel = document.querySelectorAll('.form-address-label-lan');

        Lan.formOilQuantityLabel = document.querySelectorAll('.oil-quantity-label-lan');
        // end label


        // start google form link
        // Lan.googleFormTitle = document.getElementById('googleFormTitle-lan');
        // Lan.googleFormLink = document.getElementById('googleFormLink-lan');
        // end google form link

        // start 1st form
        Lan.form_1_term = document.getElementById('form-1-term-lan');
        // end 1st form

        // start 2nd form
        Lan.form_2_oilQ = document.getElementById('range-text-2-oil');
        Lan.form_2_productQ = document.getElementById('range-text-2-product');

        // select
        Lan.form_2_defaultOption = document.getElementById('default-option-lan');
        Lan.form_2_option_1 = document.getElementById('option-1-lan');
        Lan.form_2_option_2 = document.getElementById('option-2-lan');
        Lan.form_2_option_3 = document.getElementById('option-3-lan');
        Lan.form_2_option_4 = document.getElementById('option-4-lan');
        // end 2nd form

        // start 3rd form
        // switch
        Lan.form_3_switch_liter = document.querySelector('.liter');
        Lan.form_3_switch_ton = document.querySelector('.ton');
        // label
        Lan.form_3_literQ = document.getElementById('range-text-3-oil');
        Lan.form_3_tonQ = document.getElementById('range-text-3_1-oil');
        // end 3rd form

        // map
        Lan.formMap = document.getElementById('map-title-lan');
        // end form


        // start contact
        Lan.contactHeader = document.querySelector('#contact .headline h1');
        Lan.contactAddress = document.getElementById('contact-address-lan');
        // end contact


        // start about
        Lan.aboutHeader = document.querySelector('#about .headline h1');

        Lan.aboutMainText = document.getElementById('about-main-text-lan');
        Lan.aboutSubText = document.getElementById('about-sub-text-lan');

        Lan.aboutVisionTitle = document.getElementById('about-vision-title-lan');
        Lan.aboutVisionText = document.getElementById('about-vision-text-lan');

        Lan.aboutAimTitle = document.getElementById('about-aim-title-lan');
        Lan.aboutAimText = document.getElementById('about-aim-text-lan');

        Lan.aboutSectionBtn = document.getElementById('about-btn');
        // end about


        // start memebers
        Lan.membersHeader = document.querySelector('#members .headline h1');

        // start 1st card 
        Lan.membersCard_1_name = document.getElementById('members-card-1-name-lan');
        Lan.membersCard_1_job = document.getElementById('members-card-1-job-lan');
        Lan.membersCard_1_about = document.getElementById('members-card-1-about-lan');
        // end 1st card 

        // start 2nd card 
        Lan.membersCard_2_name = document.getElementById('members-card-2-name-lan');
        Lan.membersCard_2_job = document.getElementById('members-card-2-job-lan');
        Lan.membersCard_2_about = document.getElementById('members-card-2-about-lan');
        // end 2nd card 

        // start 3rd card 
        Lan.membersCard_3_name = document.getElementById('members-card-3-name-lan');
        Lan.membersCard_3_job = document.getElementById('members-card-3-job-lan');
        Lan.membersCard_3_about = document.getElementById('members-card-3-about-lan');
        // end 3rd card 

        // end memebers


        // start faqs
        Lan.faqHeader = document.querySelector('#faq .headline h1');

        // start 1st card
        Lan.faqCard_1_q = document.querySelector('#faq-card-1-lan h4');
        Lan.faqCard_1_a = document.querySelector('#faq-card-1-lan p');
        // end 1st card

        // start 2nd card
        Lan.faqCard_2_q = document.querySelector('#faq-card-2-lan h4');
        Lan.faqCard_2_a = document.querySelector('#faq-card-2-lan p');
        // end 2nd card

        // start 3rd card
        Lan.faqCard_3_q = document.querySelector('#faq-card-3-lan h4');
        Lan.faqCard_3_a = document.querySelector('#faq-card-3-lan p');
        // end 3rd card

        // start 4th card
        Lan.faqCard_4_q = document.querySelector('#faq-card-4-lan h4');
        Lan.faqCard_4_a = document.querySelector('#faq-card-4-lan p');
        // end 4th card

        // end faqs


        // start footer

        // start btns
        Lan.footerAboutBtn = document.getElementById('footer-btn-about-lan');
        Lan.footerProductsBtn = document.getElementById('footer-btn-products-lan');
        Lan.footerPricingBtn = document.getElementById('footer-btn-pricing-lan');
        Lan.footerFaqBtn = document.getElementById('footer-btn-faq-lan');
        Lan.footerFormBtn = document.getElementById('footer-btn-form-lan');
        // end btns

        // start copyright
        Lan.footerCopyright = document.getElementById('footer-copyright-lan');
        // end copyright

        // end footer

        // !end lang con
    }

    // *start arabic
    static arabicButton() {

        // *start ui
        // remove active class from en
        Lan.en.forEach(function (item) {
            item.classList.remove('active-lan-btn');
        });
        // add active class to ar
        Lan.ar.forEach(function (item) {
            item.classList.add('active-lan-btn');
        });
        // *end ui

        // start layout & ajax
        if (!Lan.toggle) {

            // change json file
            Lan.file = 'ar.json';
            console.log('Arabic version enabled');

            // start rtl
            Lan.htmlEl.setAttribute('dir', 'rtl');
            Lan.htmlEl.setAttribute('lang', 'ar');
            // end rtl

            // start removing CSS link
            document.getElementById('en-layout').remove();
            // end removing CSS link

            // start converting numbers from english to arabic
            MainApp.toggleNum = false;
            MainApp.arabicNum();
            // end converting numbers from english to arabic

            // start comments carousel layout
            Test.lanToggle = false;
            // end comments carousel layout

            // start converting digits of rates
            Num.lanToggle = false;
            // end converting digits of rates

            // start form translation
            Form.lanSwitch = false;
            // end form translation

            // start about btn translation
            About.lanToggle = false;
            // end about btn translation

            // start hide article section and button
            Lan.articlesBtn.forEach(function (el) {
                el.parentElement.style.display = 'block';
                document.getElementById('article-section').style.display = 'block';
            });
            // end hide article section and button

            // initiate ajax
            Lan.ajax();

            //die
            Lan.toggle = true;
        }
        // end layout & ajax

    }
    // *end arabic

    // !start english
    static englishButton() {

        // !start creating style sheet link 
        // create style sheet
        let link = document.createElement('link');
        // add rel attribute
        link.setAttribute('rel', 'stylesheet');
        // add href attribute
        link.setAttribute('href', 'style/lan.css');
        // add id
        link.id = 'en-layout';
        // !end creating style sheet link 

        // *start ui
        // remove active class from ar
        Lan.ar.forEach(function (item) {
            item.classList.remove('active-lan-btn');
        });
        // add active class to en
        Lan.en.forEach(function (item) {
            item.classList.add('active-lan-btn');
        });
        // *end ui

        // start layout & ajax
        if (Lan.toggle) {
            // change json file
            Lan.file = 'en.json';
            console.log('English version enabled');

            // start ltr
            Lan.htmlEl.setAttribute('dir', 'ltr');
            Lan.htmlEl.setAttribute('lang', 'en');
            // end ltr

            // start adding CSS link
            Lan.headEl.appendChild(link);
            // end adding CSS link

            // start converting numbers from arabic to english
            MainApp.toggleNum = true;
            MainApp.arabicNum();
            // end converting numbers from arabic to english

            // start converting digits of rates
            Num.lanToggle = true;
            // end converting digits of rates

            // start comments carousel layout
            Test.lanToggle = true;
            // end comments carousel layout

            // start form translation
            Form.lanSwitch = true;
            // end form translation

            // start about btn translation
            About.lanToggle = true;
            // end about btn translation

            // start hide article section and button
            Lan.articlesBtn.forEach(function (el) {
                el.parentElement.style.display = 'none';
                document.getElementById('article-section').style.display = 'none';
            });
            // end hide article section and button

            // initiate ajax
            Lan.ajax();

            // die
            Lan.toggle = false;
        }
        // end layout & ajax

    }
    // !end english

    static loop() {
        Lan.wrapper.forEach(function (item) {
            item.addEventListener('click', function (e) {
                if (e.target.classList.contains('ar')) {
                    Lan.arabicButton();
                }
                if (e.target.classList.contains('en')) {
                    Lan.englishButton();
                }
            });
        });
    }

    // *start text translation
    static ajax() {
        Lan.xhr.open('GET', Lan.file, true);
        Lan.xhr.onload = function () {
            let data = JSON.parse(this.responseText);
            if (this.status == 200) {

                // *start title
                Lan.websiteTitle.innerText = data.title;
                // *end title

                // !start notifications
                Lan.successHeader.innerText = data.notify.success.header;
                Lan.successBody.innerText = data.notify.success.body;
                Lan.successBtn.innerText = data.notify.success.btn;
                Lan.errorHeader.innerText = data.notify.error.header;
                Lan.errorBody.innerText = data.notify.error.body;
                Lan.errorBtn.innerText = data.notify.error.btn;
                // !end notifications

                // *start popup
                Lan.popupText.innerText = data.popup.text;
                Lan.popupBtn.innerText = data.popup.btn;
                // *end popup

                // !start nav
                // logo
                Lan.logo.innerText = data.nav.logo;
                //buttons
                Lan.homeBtn.forEach(function (el) {
                    el.innerText = data.nav.home;
                });
                Lan.stepsBtn.forEach(function (el) {
                    el.innerText = data.nav.steps;
                });
                Lan.productsBtn.forEach(function (el) {
                    el.innerText = data.nav.products;
                });
                Lan.pricingBtn.forEach(function (el) {
                    el.innerText = data.nav.pricing;
                });
                Lan.testimonialsBtn.forEach(function (el) {
                    el.innerText = data.nav.testimonials;
                });
                Lan.formBtn.forEach(function (el) {
                    el.innerText = data.nav.form;
                });
                Lan.aboutBtn.forEach(function (el) {
                    el.innerText = data.nav.about;
                });
                Lan.memebersBtn.forEach(function (el) {
                    el.innerText = data.nav.memebers;
                });
                Lan.faqsBtn.forEach(function (el) {
                    el.innerText = data.nav.faqs;
                });
                // !end nav

                // start hint
                if (Lan.hintText) {
                    Lan.hintText.innerText = data.hint.text;
                }
                // end hint

                // *start header
                // titles
                Lan.headerTitleOne.innerText = data.header.phase_1.title;
                Lan.headerTitleTwo.innerText = data.header.phase_2.title;
                Lan.headerTitleThree.innerText = data.header.phase_3.title;
                Lan.headerTitleFour.innerText = data.header.phase_4.title;
                //buttons
                Lan.replace.forEach(function (el) {
                    el.innerText = data.header.replace_btn;
                });
                Lan.cash.forEach(function (el) {
                    el.innerText = data.header.cash_btn;
                });
                // *end header

                // !start steps
                Lan.stepsHeader.innerText = data.steps.header;
                Lan.stepsCard_1.innerText = data.steps.card_1;
                Lan.stepsCard_2.innerText = data.steps.card_2;
                Lan.stepsCard_3.innerText = data.steps.card_3;
                Lan.stepsCard_4.innerText = data.steps.card_4;
                // !end steps

                // *START PRODUCTS
                Lan.productsHeader.innerText = data.products.header;
                Lan.productsName_1.innerText = data.products.product_1;
                Lan.productsName_2.innerText = data.products.product_2;
                Lan.productsName_3.innerText = data.products.product_3;
                Lan.productsName_4.innerText = data.products.product_4;
                // *END PRODUCTS

                // !START PRICING
                Lan.pricingHeader.innerText = data.pricing.header;
                Lan.pricingUnit.forEach(function (el) {
                    el.innerText = data.pricing.unit;
                });
                Lan.pricingPeriod.forEach(function (el) {
                    el.innerText = data.pricing.period;
                });
                Lan.pricingSecBtn.forEach(function (el) {
                    el.innerText = data.pricing.btn;
                });

                Lan.pricingName_1.innerText = data.pricing.card_1.name;
                Lan.pricingName_2.innerText = data.pricing.card_2.name;
                Lan.pricingName_3.innerText = data.pricing.card_3.name;
                Lan.pricingName_4.innerText = data.pricing.card_4.name;

                // start pricing descriptions
                Lan.pricingDes_1_1.innerText = data.pricing.card_1.item_1;
                Lan.pricingDes_1_2.innerText = data.pricing.card_1.item_2;
                Lan.pricingDes_1_3.innerText = data.pricing.card_1.item_3;
                Lan.pricingDes_1_4.innerText = data.pricing.card_1.item_4;

                Lan.pricingDes_2_1.innerText = data.pricing.card_2.item_1;
                Lan.pricingDes_2_2.innerText = data.pricing.card_2.item_2;
                Lan.pricingDes_2_3.innerText = data.pricing.card_2.item_3;
                Lan.pricingDes_2_4.innerText = data.pricing.card_2.item_4;

                Lan.pricingDes_3_1.innerText = data.pricing.card_3.item_1;
                Lan.pricingDes_3_2.innerText = data.pricing.card_3.item_2;
                Lan.pricingDes_3_3.innerText = data.pricing.card_3.item_3;
                Lan.pricingDes_3_4.innerText = data.pricing.card_3.item_4;

                Lan.pricingDes_4_1.innerText = data.pricing.card_4.item_1;
                Lan.pricingDes_4_2.innerText = data.pricing.card_4.item_2;
                Lan.pricingDes_4_3.innerText = data.pricing.card_4.item_3;
                Lan.pricingDes_4_4.innerText = data.pricing.card_4.item_4;
                // end pricing descriptions
                // !END PRICING

                // *START COMMENTS
                Lan.commentsHeader.innerText = data.comments.header;

                Lan.commentsContent_1.innerText = data.comments.card_1.content;
                Lan.commentsContent_1_name.innerText = data.comments.card_1.name;
                Lan.commentsContent_1_job.innerText = data.comments.card_1.job;

                Lan.commentsContent_2.innerText = data.comments.card_2.content;
                Lan.commentsContent_2_name.innerText = data.comments.card_2.name;
                Lan.commentsContent_2_job.innerText = data.comments.card_2.job;

                Lan.commentsContent_3.innerText = data.comments.card_3.content;
                Lan.commentsContent_3_name.innerText = data.comments.card_3.name;
                Lan.commentsContent_3_job.innerText = data.comments.card_3.job;
                // *END COMMENTS

                // !START WATCH VIDEO
                Lan.watchVideoHeader.innerText = data.video.header;
                // !END WATCH VIDEO

                // *START RATES
                Lan.ratesHappyTitle.innerText = data.rates.happy;
                Lan.ratesActiveTitle.innerText = data.rates.active;
                Lan.ratesTotalTitle.innerText = data.rates.total;
                // *END RATES



                // !START FORM

                // google form
                // Lan.googleFormTitle.innerText = data.form.googleForm.title;
                // Lan.googleFormLink.innerText = data.form.googleForm.link;

                // header
                Lan.formHeader.innerText = data.form.header;
                // title
                Lan.formTitle.innerText = data.form.title;

                // selector
                Lan.formSelector_form_1.innerText = data.form.selector.form_1;
                Lan.formSelector_form_2.innerText = data.form.selector.form_2;
                Lan.formSelector_form_3.innerText = data.form.selector.form_3;

                // label
                Lan.formNameLabel.forEach(function (el) {
                    el.innerText = data.form.name;
                    el.nextElementSibling.setAttribute('placeholder', data.form.placeholder.name);
                });
                Lan.formPhoneLabel.forEach(function (el) {
                    el.innerText = data.form.phone;
                });
                Lan.formAddressLabel.forEach(function (el) {
                    el.innerText = data.form.address;
                    el.nextElementSibling.setAttribute('placeholder', data.form.placeholder.address);
                });
                Lan.formOilQuantityLabel.forEach(function (el) {
                    el.innerText = data.form.oilQuantityLabel;
                });

                // btn
                Lan.formSectionBtn.forEach(function (el) {
                    el.innerText = data.form.btn;
                });

                // start 1st form
                // term
                Lan.form_1_term.innerText = data.form.form_1.term;
                // end 1st form

                // start 2nd form
                Lan.form_2_oilQ.innerText = data.form.form_2.label.oilQ;
                Lan.form_2_productQ.innerText = data.form.form_2.label.productQ;

                // select
                Lan.form_2_defaultOption.innerText = data.form.form_2.select.defaultOption;
                Lan.form_2_option_1.innerText = data.form.form_2.select.option_1;
                Lan.form_2_option_2.innerText = data.form.form_2.select.option_2;
                Lan.form_2_option_3.innerText = data.form.form_2.select.option_3;
                Lan.form_2_option_4.innerText = data.form.form_2.select.option_4;
                // end 2nd form

                // start 3rd form
                // switch
                Lan.form_3_switch_liter.innerText = data.form.form_3.switch.liter;
                Lan.form_3_switch_ton.innerText = data.form.form_3.switch.ton;
                // label
                Lan.form_3_literQ.innerText = data.form.form_3.label.literQ;
                Lan.form_3_tonQ.innerText = data.form.form_3.label.tonQ;
                // end 3rd form

                // map
                Lan.formMap.innerText = data.map.title;
                // !END FORM


                // *START CONTACT
                Lan.contactHeader.innerText = data.contact.header;
                Lan.contactAddress.innerText = data.contact.address;
                // *END CONTACT


                // !START ABOUT
                Lan.aboutHeader.innerText = data.about.header;
                Lan.aboutMainText.innerText = data.about.mainText;
                Lan.aboutSubText.innerText = data.about.subText;
                Lan.aboutVisionTitle.innerText = data.about.vision.header;
                Lan.aboutVisionText.innerText = data.about.vision.text;
                Lan.aboutAimTitle.innerText = data.about.aim.header;
                Lan.aboutAimText.innerText = data.about.aim.text;
                //btn
                if (About.section.clientHeight <= 0) {
                    Lan.aboutSectionBtn.innerText = data.about.moreBtn;
                }
                if (About.section.clientHeight > 0) {
                    Lan.aboutSectionBtn.innerText = data.about.lessBtn;
                }
                // !END ABOUT


                // *START MEMBERS
                // start memebers
                Lan.membersHeader.innerText = data.members.header;

                // start 1st card
                Lan.membersCard_1_name.innerText = data.members.card_1.name;
                Lan.membersCard_1_job.innerText = data.members.card_1.job;
                Lan.membersCard_1_about.innerText = data.members.card_1.about;
                // end 1st card 

                // start 2nd card
                Lan.membersCard_2_name.innerText = data.members.card_2.name;
                Lan.membersCard_2_job.innerText = data.members.card_2.job;
                Lan.membersCard_2_about.innerText = data.members.card_2.about;
                // end 2nd card

                // start 3rd card
                Lan.membersCard_3_name.innerText = data.members.card_3.name;
                Lan.membersCard_3_job.innerText = data.members.card_3.job;
                Lan.membersCard_3_about.innerText = data.members.card_3.about;
                // end 3rd card
                // *END MEMBERS


                // !START FAQs
                Lan.faqHeader.innerText = data.faq.header;

                // start 1st card
                Lan.faqCard_1_q.innerText = data.faq.card_1.q;
                Lan.faqCard_1_a.innerText = data.faq.card_1.a;
                // end 1st card

                // start 2nd card
                Lan.faqCard_2_q.innerText = data.faq.card_2.q;
                Lan.faqCard_2_a.innerText = data.faq.card_2.a;
                // end 2nd card

                // start 3rd card
                Lan.faqCard_3_q.innerText = data.faq.card_3.q;
                Lan.faqCard_3_a.innerText = data.faq.card_3.a;
                // end 3rd card

                // start 4th card
                Lan.faqCard_4_q.innerText = data.faq.card_4.q;
                Lan.faqCard_4_a.innerText = data.faq.card_4.a;
                // end 4th card
                // !END FAQs


                // *START FOOTER
                // start btns
                Lan.footerAboutBtn.innerText = data.footer.btns.about;
                Lan.footerProductsBtn.innerText = data.footer.btns.products;
                Lan.footerPricingBtn.innerText = data.footer.btns.pricing;
                Lan.footerFaqBtn.innerText = data.footer.btns.faq;
                Lan.footerFormBtn.innerText = data.footer.btns.form;
                // end btns

                // start copyright
                Lan.footerCopyright.innerText = data.footer.copyright;
                // end copyright

                // *END FOOTER

            }
        };
        Lan.xhr.send();
    }
    // *end text translation

    static init() {
        Lan.global();
        Lan.loop();
    }
}
Lan.init();