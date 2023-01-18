'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        hamburgerMenu = document.querySelector('.header__hamburger'),
        hamburgerMenuOpened = document.querySelector('.header__hamburger__opened');

    hamburgerMenu.addEventListener('click', () => {
        if (hamburgerMenuOpened.classList.contains('flex')) {
            hamburgerMenuOpened.classList.remove('flex');
        } else {
            hamburgerMenuOpened.classList.add('flex');
        }
    })

    window.onscroll = () => {
        window.pageYOffset > 80 ? header.classList.add('shadow') : header.classList.remove('shadow');
        console.log(window.pageYOffset);
    }
})