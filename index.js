console.log("Score: 100");

const menu = document.querySelector('.header__items');
const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger__span');
const shadow = document.querySelector('.shadow');
const body = document.body;
const link = document.querySelector('.header__link');
const links = Array.from(menu.children);

burger.addEventListener('click', openBurger);

links.forEach((link) => {
    link.addEventListener('click', closeBurger);
});

function openBurger() {
    menu.classList.toggle('header__items_active');
    burger.classList.toggle('burger_active');
    burgerSpan.classList.toggle('burger__span_active');
    body.classList.toggle('body_noscroll');
    shadow.classList.toggle('shadow_active');
}

function closeBurger() {
    menu.classList.remove('header__items_active');
    burger.classList.remove('burger_active');
    burgerSpan.classList.remove('burger__span_active');
    body.classList.remove('body_noscroll');
    shadow.classList.remove('shadow_active');
}