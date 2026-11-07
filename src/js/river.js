const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    btn.classList.toggle('change');
    menu.classList.toggle('hide');
}



 init();