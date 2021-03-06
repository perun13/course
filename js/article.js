let commentName = document.querySelector('.name');
let body = document.querySelector('.body');
let btn = document.querySelector('.btn');


btn.onclick = myClick;
function myClick() {
    document.querySelector('.comment_info').innerHTML = commentName.value;
    document.querySelector('.comment_body').innerHTML = body.value;


    commentName.value = '';
    body.value = '';
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
    });
};




let search = document.querySelector('.search');
let search_box = document.querySelector('.search_box');

search.onclick = () => {
    search_box.classList.toggle('__active');
};
document.getElementById('btn_search').onclick = () => {
    search_box.classList.remove('__active');
};