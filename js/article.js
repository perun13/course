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
// plet comments = [];

// document.getElementById('comment-add').onclick =
//     function () {
//         event.preventDefault();
//         let commentName = document.querySelector('#comment-name');
//         let commentBody = document.querySelector('#comment-body');


//         let comment = {
//             name: commentName.value,
//             body: commentBody.value,
//             time: Math.floor(Date.now() / 1000)
//         }

//         commentName.value = "";
//         commentBody.value = '';
//         comments.push(comment);
//         saveComments();
//         showComments();
//     }

// function saveComments() {
//     localStorage.setItem('comments', JSON.stringify(comments));
// }
// function showComments() {
//     let commentField = document.querySelector('#comment-field');
//     let out = '';
//     comments.forEach(function (item) {
//         out += `<p calass="text-right small><em>${timeConverter(item.time)}</em></p>`
//     });
// }
