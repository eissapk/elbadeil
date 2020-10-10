class Articles {
    // *start global
    static global() {
        Articles.toggleNum = true;
    }
    // *end global

    // !start arabicNum
    static arabicNum() {
        if (Articles.toggleNum) {
            let map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"];
            let body = document.querySelector('body');
            body.innerHTML = body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function (e) {
                return map[e];
            });
        } else {
            return;
        }
    }
    // !end arabicNum


    // ?start init
    static init() {
        Articles.global();
        Articles.arabicNum();
    }
    // ?end init

}
Articles.init();