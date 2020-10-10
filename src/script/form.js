class Form {
  static global() {
    Form.selectWrapper = document.getElementById("select-wrapper");
    Form.firstForm = document.getElementById("form_1");
    Form.secondForm = document.getElementById("form_2");
    Form.thirdForm = document.getElementById("form_3");
    // * start hidden
    // 2ND
    Form.rangeTwoOilHidden = document.getElementById("range-2-oil-hidden");
    Form.rangeTwoProductHidden = document.getElementById("range-2-product-hidden");
    Form.rangeTwoWhichProductHidden = document.getElementById("which-product-hidden");
    // 3RD
    Form.rangeThreeHidden = document.getElementById("range-3-hidden");
    Form.rangeThreeHidden_1 = document.getElementById("range-3_1-hidden");
    // * end hidden
    Form.rangeTwo = document.getElementById("range-2");
    Form.rangeThree = document.getElementById("range-3");
    Form.rangeThree_1 = document.getElementById("range-3_1");
    Form.rangeTwoTextOil = document.getElementById("range-text-2-oil");
    Form.rangeThreeTextOil = document.getElementById("range-text-3-oil");
    Form.rangeThreeTextOil_1 = document.getElementById("range-text-3_1-oil");
    Form.rangeTwoTextProduct = document.getElementById("range-text-2-product");
    Form.div = document.getElementById("select");
    Form.firstSelect = document.getElementById("first_select");
    Form.num = 1;
    Form.lanSwitch = false; // for switching to english if true
    Form.switchBtn = document.getElementById("switch-3");
    Form.literCon = document.getElementById("oil-q-liters");
    Form.tonCon = document.getElementById("oil-q-tons");
    Form.literEl = document.querySelector("#sign-up-form .liter");
    Form.tonEl = document.querySelector("#sign-up-form .ton");
    Form.notifyCon = document.getElementById("notification-wrapper");
    Form.successStatus = document.getElementById("success");
    Form.errorStatus = document.getElementById("error");
    Form.focusEl = document.querySelectorAll('.focus');
    Form.focusBtn = document.querySelectorAll('.notify-btn');
  }

  // *start toggling forms
  static form_1() {
    // reset
    Form.secondForm.reset();
    Form.thirdForm.reset();

    // !start range 2
    // server side
    Form.rangeTwoWhichProductHidden.value = "";
    Form.rangeTwoOilHidden.value = "3 liters";
    Form.rangeTwoProductHidden.value = "1 product";

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 لترات )";
      Form.rangeTwoTextProduct.innerText = "لديك 1 منتج متاح";
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 liters )";
      Form.rangeTwoTextProduct.innerText = "1 product available";
    }

    // !end range 2



    // !start range 3
    // server side
    Form.rangeThreeHidden.value = '3 liters';
    Form.rangeThreeHidden_1.value = '0.25 tons';

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 لترات )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 طن )';
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 liters )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 ton )';
    }

    Form.fixSwitchBtn();
    // !end range 3


    // clear div
    Form.div.innerHTML = "";

    if (!Form.lanSwitch) { // ! ar version

      // start append to select
      Form.div.innerHTML = `
      <div>
      <i></i>
      <select required id="first_select">
          <option value disabled selected>اختر منتج</option>
          <option value="صابون أطباق">صابون أطباق</option>
          <option value="معطر ملابس">معطر ملابس</option>
          <option value="منظف ارضيات">منظف ارضيات</option>
          <option value="جيل منظف">جيل منظف</option>
      </select>
      </div>
            `;
      // end append to select
    }


    if (Form.lanSwitch) { // * en version

      // start append to select
      Form.div.innerHTML = `
      <div>
      <i></i>
      <select required id="first_select">
          <option value disabled selected>select product</option>
          <option value="صابون أطباق">dishes soap</option>
          <option value="معطر ملابس">clothes perfume</option>
          <option value="منظف ارضيات">dettol</option>
          <option value="جيل منظف">cleaner gel</option>
      </select>
      </div>
            `;
      // end append to select

    }

    let select_1 = document.getElementById("first_select");
    select_1.addEventListener("change", function (e) {
      Form.rangeTwoWhichProductHidden.value = select_1.value;
    });

    // ?styling
    // *start setting the rest of forms to zero
    Form.thirdForm.style.height = "0";
    Form.secondForm.style.height = "0";
    // *end setting the rest of forms to zero

    // !start get the actual height and set it to zero
    Form.firstForm.style.height = 'auto';
    let height = Form.firstForm.clientHeight + 'px';
    Form.firstForm.style.height = "0";
    // !end get the actual height

    // *start adding actual height to form
    setTimeout(function () {
      Form.firstForm.style.height = height;
    }, 0);
    // *end adding actual height to form

  }


  static form_2() {
    // reset
    Form.firstForm.reset();
    Form.thirdForm.reset();

    // !start range 3
    // server side
    Form.rangeThreeHidden.value = '3 liters';
    Form.rangeThreeHidden_1.value = '0.25 tons';

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 لترات )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 طن )';
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 liters )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 ton )';
    }

    Form.fixSwitchBtn();
    // !end range 3

    // ?styling
    // *start setting the rest of forms to zero
    Form.firstForm.style.height = "0";
    Form.thirdForm.style.height = "0";
    // *end setting the rest of forms to zero

    // !start get the actual height and set it to zero
    Form.secondForm.style.height = 'auto';
    let height = Form.secondForm.clientHeight + 'px';
    Form.secondForm.style.height = "0";
    // !end get the actual height

    // *start adding actual height to form
    setTimeout(function () {
      Form.secondForm.style.height = height;
    }, 0);
    // *start adding actual height to form

  }


  static form_3() {
    // reset
    Form.firstForm.reset();
    Form.secondForm.reset();

    // !start range 2
    // server side
    Form.rangeTwoWhichProductHidden.value = "";
    Form.rangeTwoOilHidden.value = "3 liters";
    Form.rangeTwoProductHidden.value = "1 product";

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 لترات )";
      Form.rangeTwoTextProduct.innerText = "لديك 1 منتج متاح";
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 liters )";
      Form.rangeTwoTextProduct.innerText = "1 product available";
    }

    // !end range 2


    // clear div
    Form.div.innerHTML = "";

    if (!Form.lanSwitch) { // ! ar version

      // start append to select
      Form.div.innerHTML = `
    <div>
    <i></i>
    <select required id="first_select">
        <option value disabled selected>اختر منتج</option>
        <option value="صابون أطباق">صابون أطباق</option>
        <option value="معطر ملابس">معطر ملابس</option>
        <option value="منظف ارضيات">منظف ارضيات</option>
        <option value="جيل منظف">جيل منظف</option>
    </select>
    </div>
          `;
      // end append to select
    }


    if (Form.lanSwitch) { // * en version

      // start append to select
      Form.div.innerHTML = `
    <div>
    <i></i>
    <select required id="first_select">
        <option value disabled selected>select product</option>
        <option value="صابون أطباق">dishes soap</option>
        <option value="معطر ملابس">clothes perfume</option>
        <option value="منظف ارضيات">dettol</option>
        <option value="جيل منظف">cleaner gel</option>
    </select>
    </div>
          `;
      // end append to select

    }


    let select_1 = document.getElementById("first_select");
    select_1.addEventListener("change", function (e) {
      Form.rangeTwoWhichProductHidden.value = select_1.value;
    });

    // ?styling
    // *start setting the rest of forms to zero
    Form.firstForm.style.height = "0";
    Form.secondForm.style.height = "0";
    // *end setting the rest of forms to zero

    // !start get the actual height and set it to zero
    Form.thirdForm.style.height = 'auto';
    let height = Form.thirdForm.clientHeight + 'px';
    Form.thirdForm.style.height = "0";
    // !end get the actual height

    // *start adding actual height to form
    setTimeout(function () {
      Form.thirdForm.style.height = height;
    }, 0);
    // *start adding actual height to form

  }
  // *end toggling forms



  // start ranges
  static range_2() {
    // reset
    Form.rangeTwoWhichProductHidden.value = "";

    let liter = Form.rangeTwo.value;
    let product = liter / 3;

    // start setting value of hidden
    Form.rangeTwoOilHidden.value = `${liter} liters`;
    Form.rangeTwoProductHidden.value = `${product} products`;
    // end setting value of hidden

    // updating numbers
    if (liter == 3) {
      Form.num = 1; // 1 item
    }
    if (liter == 6) {
      Form.num = 2; // 2 items
    }
    if (liter == 9) {
      Form.num = 3; // 3 items
    }
    if (liter == 12) {
      Form.num = 4; // 4 items
    }
    if (liter == 15) {
      Form.num = 5; // 5 items
    }
    if (liter == 18) {
      Form.num = 6; // 6 items
    }
    if (liter == 21) {
      Form.num = 7; // 7 items
    }




    if (!Form.lanSwitch) { // ! ar version
      // print value to UI
      // default
      Form.rangeTwoTextOil.innerText = `( ${liter} لترات )`;
      if (liter > 9) {
        Form.rangeTwoTextOil.innerText = `( ${liter} لتراً )`;
      }
      // default
      Form.rangeTwoTextProduct.innerText = `لديك ${product} منتج متاح`; // 1
      if (product == 2) {
        Form.rangeTwoTextProduct.innerText = `لديك ${product} منتجين متاحين`; // 2
      }
      if (product >= 3) {
        Form.rangeTwoTextProduct.innerText = `لديك ${product} منتجات متاحة`; //  > 2
      }

      // clear div
      Form.div.innerHTML = "";
      for (let i = 0; i < Form.num; i += 1) {
        // create select
        const myDiv = document.createElement("div");
        // append to select
        myDiv.innerHTML = `
                <i>${i}</i>
                <select required>
                    <option value disabled selected>اختر منتج</option>
                    <option value="صابون أطباق">صابون أطباق</option>
                    <option value="معطر ملابس">معطر ملابس</option>
                    <option value="منظف ارضيات">منظف ارضيات</option>
                    <option value="جيل منظف">جيل منظف</option>
                </select>
            `;
        // append to div
        Form.div.appendChild(myDiv);
      }
    }





    if (Form.lanSwitch) { // * en version
      // print value to UI
      // default
      Form.rangeTwoTextOil.innerText = `( ${liter} liters )`;

      // default
      Form.rangeTwoTextProduct.innerText = `${product} product available`; // 1

      if (product > 1) {
        Form.rangeTwoTextProduct.innerText = `${product} products available`; // > 1
      }

      // clear div
      Form.div.innerHTML = "";
      for (let i = 0; i < Form.num; i += 1) {
        // create select
        const myDiv = document.createElement("div");
        // append to select
        myDiv.innerHTML = `
                <i>${i}</i>
                <select required>
                    <option value disabled selected>select product</option>
                    <option value="صابون أطباق">dishes soap</option>
                    <option value="معطر ملابس">clothes perfume</option>
                    <option value="منظف ارضيات">dettol</option>
                    <option value="جيل منظف">cleaner gel</option>
                </select>
            `;
        // append to div
        Form.div.appendChild(myDiv);
      }
    }



    // start setting height of second form to auto
    Form.secondForm.style.height = 'auto';
    // end setting height of second form to auto

    // setting values
    let select = document.querySelectorAll("select");
    select.forEach(function (el) {
      el.addEventListener("change", function (e) {
        // reset
        Form.rangeTwoWhichProductHidden.value = "";

        let value_0 = ' - ( ' + select[0].value + ' )' + "\n";
        let value_1;
        let value_2;
        let value_3;
        let value_4;
        let value_5;
        let value_6;

        // check if element does exit add actual value if not add empty string

        // 2nd
        if (!select[1]) {
          value_1 = "";
        }
        if (select[1]) {
          value_1 = ' - ( ' + select[1].value + ' )' + "\n";
        }

        // 3rd
        if (!select[2]) {
          value_2 = "";
        }
        if (select[2]) {
          value_2 = ' - ( ' + select[2].value + ' )' + "\n";
        }

        // 4th
        if (!select[3]) {
          value_3 = "";
        }
        if (select[3]) {
          value_3 = ' - ( ' + select[3].value + ' )' + "\n";
        }

        // 5th
        if (!select[4]) {
          value_4 = "";
        }
        if (select[4]) {
          value_4 = ' - ( ' + select[4].value + ' )' + "\n";
        }

        // 6th
        if (!select[5]) {
          value_5 = "";
        }
        if (select[5]) {
          value_5 = ' - ( ' + select[5].value + ' )' + "\n";
        }

        // 7th
        if (!select[6]) {
          value_6 = "";
        }
        if (select[6]) {
          value_6 = ' - ( ' + select[6].value + ' )' + "\n";
        }

        let currentValue = ` ${value_0} ${value_1} ${value_2} ${value_3} ${value_4} ${value_5} ${value_6} `;
        Form.rangeTwoWhichProductHidden.value = currentValue;

      });
    });
  }


  static range_3() {
    let literTwo = Form.rangeThree.value;

    if (!Form.lanSwitch) { // ! ar version
      // print value to UI
      // default
      Form.rangeThreeTextOil.innerText = `( ${literTwo} لترات )`;
      if (literTwo > 10) {
        Form.rangeThreeTextOil.innerText = `( ${literTwo} لتراً )`;
      }
    }

    if (Form.lanSwitch) { // * en version
      // print value to UI
      // default
      Form.rangeThreeTextOil.innerText = `( ${literTwo} liters )`;
    }

    // start hidden input 
    Form.rangeThreeHidden.value = `${literTwo} liters`;
    // end hidden input
  }


  static range_3_1() {
    let literThree = Form.rangeThree_1.value;

    if (!Form.lanSwitch) { // ! ar version
      // print value to UI
      // default
      Form.rangeThreeTextOil_1.innerText = `( ${literThree} طن )`;
    }

    if (Form.lanSwitch) { // * en version
      // print value to UI
      // default
      Form.rangeThreeTextOil_1.innerText = `( ${literThree} ton )`;

      if (literThree > 1) {
        Form.rangeThreeTextOil_1.innerText = `( ${literThree} tons )`;
      }
    }

    // start hidden input 
    Form.rangeThreeHidden_1.value = `${literThree} tons`;
    // end hidden input
  }
  // start ranges


  // *start switch
  static switchUnit() {

    if (Form.switchBtn.checked) {

      // * start liters  // hide
      Form.literCon.style.display = "none";
      Form.literEl.style.color = "#333";
      Form.literEl.style.transform = "scale(1)";
      // ignore liters input from server side
      Form.rangeThreeHidden.setAttribute('disabled', '');
      // Form.rangeThreeHidden.classList.add('disabled');
      // * end liters

      // start tons  // ! show
      Form.tonCon.style.display = "block";
      Form.tonEl.style.color = "#6a11cb";
      Form.tonEl.style.transform = "scale(1.1)";
      // enable tons with server side
      Form.rangeThreeHidden_1.removeAttribute('disabled');
      // Form.rangeThreeHidden_1.classList.remove('disabled');

    } else {
      // * start liters  // show
      Form.literCon.style.display = "block";
      Form.literEl.style.color = "#6a11cb";
      Form.literEl.style.transform = "scale(1.1)";
      // enable liters with server side
      Form.rangeThreeHidden.removeAttribute('disabled');
      // Form.rangeThreeHidden.classList.remove('disabled');
      // * end liters

      // start tons  // ? hide
      Form.tonCon.style.display = "none";
      Form.tonEl.style.color = "#333";
      Form.tonEl.style.transform = "scale(1)";
      // ignore tons input from server side
      Form.rangeThreeHidden_1.setAttribute('disabled', '');
      // Form.rangeThreeHidden_1.classList.add('disabled');
    }
  }

  static fixSwitchBtn() {

    // * start liters  // show
    Form.literCon.style.display = "block";
    Form.literEl.style.color = "#6a11cb";
    Form.literEl.style.transform = "scale(1.1)";
    // enable liters with server side
    Form.rangeThreeHidden.removeAttribute('disabled');
    // * end liters

    // start tons  // ? hide
    Form.tonCon.style.display = "none";
    Form.tonEl.style.color = "#333";
    Form.tonEl.style.transform = "scale(1)";
    // ignore tons input from server side
    Form.rangeThreeHidden_1.setAttribute('disabled', '');

  }
  // *start switch

  // start ajax
  static notify() {
    Form.notifyCon.style.display = "none";
  }

  static success() {
    // reset
    Form.firstForm.reset();
    Form.secondForm.reset();
    Form.thirdForm.reset();

    // !start range 2
    // server side
    Form.rangeTwoWhichProductHidden.value = "";
    Form.rangeTwoOilHidden.value = "3 liters";
    Form.rangeTwoProductHidden.value = "1 product";

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 لترات )";
      Form.rangeTwoTextProduct.innerText = "لديك 1 منتج متاح";
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeTwoTextOil.innerText = "( 3 liters )";
      Form.rangeTwoTextProduct.innerText = "1 product available";
    }

    // !end range 2


    // !start range 3
    // server side
    Form.rangeThreeHidden.value = '3 liters';
    Form.rangeThreeHidden_1.value = '0.25 tons';

    if (!Form.lanSwitch) { // ! ar version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 لترات )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 طن )';
    }

    if (Form.lanSwitch) { // * en version
      // UI
      Form.rangeThreeTextOil.innerText = '( 3 liters )';
      Form.rangeThreeTextOil_1.innerText = '( 0.25 ton )';
    }

    Form.fixSwitchBtn();
    // !end range 3


    // clear div
    Form.div.innerHTML = "";

    if (!Form.lanSwitch) { // ! ar version

      // start append to select
      Form.div.innerHTML = `
      <div>
      <i></i>
      <select required id="first_select">
          <option value disabled selected>اختر منتج</option>
          <option value="صابون أطباق">صابون أطباق</option>
          <option value="معطر ملابس">معطر ملابس</option>
          <option value="منظف ارضيات">منظف ارضيات</option>
          <option value="جيل منظف">جيل منظف</option>
      </select>
      </div>
            `;
      // end append to select
    }


    if (Form.lanSwitch) { // * en version

      // start append to select
      Form.div.innerHTML = `
      <div>
      <i></i>
      <select required id="first_select">
          <option value disabled selected>select product</option>
          <option value="صابون أطباق">dishes soap</option>
          <option value="معطر ملابس">clothes perfume</option>
          <option value="منظف ارضيات">dettol</option>
          <option value="جيل منظف">cleaner gel</option>
      </select>
      </div>
            `;
      // end append to select

    }


    let select_1 = document.getElementById("first_select");
    select_1.addEventListener("change", function (e) {
      Form.rangeTwoWhichProductHidden.value = select_1.value;
    });

    // notification
    Form.errorStatus.style.display = "none";
    Form.notifyCon.style.display = "block";
    Form.successStatus.style.display = "block";
    // focus on btn
    Form.focusBtn[0].focus();
  }

  static error() {
    Form.successStatus.style.display = "none";
    Form.errorStatus.style.display = "block";
    Form.notifyCon.style.display = "block";
    // focus on btn
    Form.focusBtn[1].focus();
  }

  static ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {

      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }

    };
    xhr.send(data);
  }
  // end ajax

  // !write to db 
  // ? using firebase instead of netlify with ajax
  // form 1
  static addFormOne() {

    return new Promise((resolve, reject) => {
      let toggle = true;
      if (toggle) {

        // get values
        function getValue(id) {
          return document.getElementById(id).value;
        }

        // select inputss
        const name = getValue('form_1_name').trim();
        const phone = getValue('form_1_phone').trim();
        const address = getValue('form_1_address').trim();
        const d = new Date();
        const id = d.getTime();
        const time = String(d).replace(/gmt.*/gi, "").trim();
        // ?write to database
        dontHaveOil.child(id).set({
          id,
          name,
          phone,
          address,
          time
        });

        // *show success msg
        Form.success();

        resolve();
      } else {

        // !show error msg
        Form.error();

        reject();
      }
    });

  }

  // form 2
  static addFormTwo() {

    return new Promise((resolve, reject) => {
      let toggle = true;
      if (toggle) {

        // get values
        function getValue(id) {
          return document.getElementById(id).value;
        }

        // select inputss
        const name = getValue('form_2_name').trim();
        const phone = getValue('form_2_phone').trim();
        const address = getValue('form_2_address').trim();
        const oilQ = getValue('range-2-oil-hidden').trim();
        const productsQ = getValue('range-2-product-hidden').trim();
        const whichProducts = getValue('which-product-hidden').trim();
        const d = new Date();
        const id = d.getTime();
        const time = String(d).replace(/gmt.*/gi, "").trim();

        // ?write to database
        replaceWithProduct.child(id).set({
          id,
          name,
          phone,
          address,
          oilQ,
          productsQ,
          whichProducts,
          time
        });

        // *show success msg
        Form.success();

        resolve();
      } else {

        // !show error msg
        Form.error();

        reject();
      }
    });

  }

  // form 3
  static addFormThree() {

    return new Promise((resolve, reject) => {
      let toggle = true;
      if (toggle) {

        // get values
        let string;

        function getValue(id) {
          return document.getElementById(id).value;
        }

        // select inputss
        const name = getValue('form_3_name').trim();
        const phone = getValue('form_3_phone').trim();
        const address = getValue('form_3_address').trim();
        const oilLitersQ = getValue('range-3-hidden');
        const oilTonsQ = getValue('range-3_1-hidden');
        const d = new Date();
        const id = d.getTime();
        const time = String(d).replace(/gmt.*/gi, "").trim();

        // check liters and tons quantities
        if (document.getElementById('range-3-hidden').disabled) { // if liters disabled
          string = oilTonsQ.trim();
        }
        if (document.getElementById('range-3_1-hidden').disabled) { // if tons disabled
          string = oilLitersQ.trim();
        }

        // ?write to database
        getCash.child(id).set({
          id,
          name,
          phone,
          address,
          oilQ: string,
          time
        });


        // *show success msg
        Form.success();

        resolve();
      } else {

        // !show error msg
        Form.error();

        reject();
      }
    });

  }


  // !start init
  static init() {
    Form.global();
  }
  // !start init
}
Form.init();

// *start toggle between forms
Form.selectWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("select_1")) {
    Form.form_1();
  }
  if (e.target.classList.contains("select_2")) {
    Form.form_2();
  }
  if (e.target.classList.contains("select_3")) {
    Form.form_3();
  }
});
// *end toggle between forms

// start range of 2nd form
Form.rangeTwo.addEventListener("input", function () {
  Form.range_2();
});
// end range of 2nd form

// *start initial box of select
Form.firstSelect.addEventListener("change", function (e) {
  Form.rangeTwoWhichProductHidden.value = Form.firstSelect.value;
});
// *end initial box of select

// start ranges of 3rd form
Form.rangeThree.addEventListener("input", function () {
  Form.range_3();
});

Form.rangeThree_1.addEventListener("input", function () {
  Form.range_3_1();
});
// end ranges of 3rd form

// *start switch button
Form.switchBtn.addEventListener("input", function () {
  Form.switchUnit();
});
// *end switch button

// start Notification
Form.notifyCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("notify-btn")) {
    Form.notify();
  }
});
// end Notification

// *start submitting 1st form
Form.firstForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // get form data
  // let data = new FormData(Form.firstForm);
  // initiate ajax
  // Form.ajax(Form.firstForm.method, Form.firstForm.action, data, Form.success, Form.error);

  // init form 1
  Form.addFormOne().catch();
});
// *end submitting 1st form

// start submitting 2nd form
Form.secondForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // get form data
  // let data = new FormData(Form.secondForm);
  // initiate ajax
  // Form.ajax(Form.secondForm.method, Form.secondForm.action, data, Form.success, Form.error);

  // init form 2
  Form.addFormTwo().catch();
});
// end submitting 2nd form

// *start submitting 3rd form
Form.thirdForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // get form data
  // let data = new FormData(Form.thirdForm);
  // initiate ajax
  // Form.ajax(Form.thirdForm.method, Form.thirdForm.action, data, Form.success, Form.error);

  // init form 3
  Form.addFormThree().catch();
});
// *end submitting 3rd form