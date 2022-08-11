function menu() {
    const menu = document.querySelector('.promo__menu'),
        close = document.querySelector('.promo__menu_close'),
        burger = document.querySelector('.promo__burger'),
        list = document.querySelectorAll('.promo li a');

    function activeMenu() {
        menu.classList.toggle('promo__menu_active');
    }
    function activeBurger() {
        burger.classList.toggle('promo__burger_active');
    }

    close.addEventListener('click', () => {
        activeBurger();
        activeMenu();
    });
    burger.addEventListener('click', () => {
        activeBurger();
        activeMenu();
    });
    list.forEach((item) => {
        item.addEventListener('click', () => {
            activeMenu();
            activeBurger();
        });
    });
}

export default menu;