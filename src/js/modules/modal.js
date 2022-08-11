function modals() {
    const overlay = document.querySelector('.overlay'),
        buttons = document.querySelectorAll('.btn__modal'),
        close = document.querySelector('.modal__close'),
        modal = document.querySelector('.modal');


    function showModal() {
        overlay.classList.remove('hidden');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function hideModal() {
        overlay.classList.remove('show');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        });
    });
    close.addEventListener('click', () => {
        hideModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && overlay.classList.contains('show')) { 
            hideModal();
        }
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideModal();
        }
    });
}
export default modals;