window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


var open_menu = document.querySelector('#open_menu');
var close_menu = document.querySelector('#close_menu');
var li = document.querySelectorAll('header nav ul li');
var ul = document.querySelector('.ul');

open_menu.addEventListener('click', e => {
    ul.classList.add('open')
})

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', e => {
        ul.classList.remove('open')
    })
}

