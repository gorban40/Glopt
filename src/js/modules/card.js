function card() {
    const buttons = document.querySelectorAll('.btn__card');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.previousElementSibling.classList.toggle('card-item__wrapper_active');
            if (btn.previousElementSibling.classList.contains('card-item__wrapper_active')) {
                btn.innerHTML = `Назад`;
            } else {
                btn.innerHTML = `Подробнее`;
            }
        });
    });
}
export default card;