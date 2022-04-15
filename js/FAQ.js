let arrow = document.querySelector('#arrow');
let arrow_up = document.querySelector('#arrow_up');

let more = document.querySelector('.more');

let item = document.querySelector('.item_more');

arrow.onclick = () => {
    more.classList.toggle('__active');

    item.style.marginBottom = '260px';

    document.querySelector('#title').style.marginTop = '25px';

    if (more.classList.contains('__active')) {
        arrow.style.display = "none";
        arrow_up.style.display = "block";
    }

    else {
        arrow.style.display = "block";
        arrow_up.style.display = "none";
    }
};


arrow_up.onclick = () => {
    arrow.style.display = "block";
    arrow_up.style.display = "none";

    more.classList.remove('__active');

    item.style.marginBottom = '0';

    document.querySelector('#title').style.marginTop = '0';
}





let search = document.querySelector('.search');
let search_box = document.querySelector('.search_box');

search.onclick = () => {
    search_box.classList.toggle('__active');
};
document.getElementById('btn_search').onclick = () => {
    search_box.classList.remove('__active');
};





const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const headerBurger = document.querySelector('.header_burger');
const navBurger = document.querySelector('.nav_burger');
if (headerBurger) {

    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        navBurger.classList.toggle('_active');
        headerBurger.style.display = "fixed";
    });
};