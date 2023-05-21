const burger = document.querySelector('img.burger');
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
burger.addEventListener('click', toggleMenu);