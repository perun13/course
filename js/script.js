new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',

        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,

});
new Swiper('.box_7_swiper', {
    pagination: {
        el: '.swiper-pagination',

        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        deley: 8000,
    },
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,

});


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



let btnOpen = document.getElementById('btn');

var more = document.getElementById("more");

let bottom = document.querySelector('.bottom');


btnOpen.onclick = () => {
    more.classList.toggle('__active');
    bottom.classList.toggle('__active');
    if (more.classList.contains('__active')) {
        btnOpen.innerHTML = "Скрыть";
    }
    else {
        btnOpen.innerHTML = "Развернуть";
    }
}



let search = document.querySelector('.search');
let search_box = document.querySelector('.search_box');

search.onclick = () => {
    search_box.classList.toggle('__active');
};
document.getElementById('btn_search').onclick = () => {
    search_box.classList.remove('__active');
};


// function readMore() {
//     var dots = document.getElementById("dots");
//     var btn = document.getElementById("btn");
//     let bottom = document.querySelector('.bottom');

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btn.innerHTML = "Развернуть";
//         more.style.display = "none";
//         bottom.style.display = "block";
//     }
//     else {
//         dots.style.display = "none";
//         btn.innerHTML = "Скрыть";
//         more.style.display = "inline";
//         bottom.style.display = "none";
//     }
// }