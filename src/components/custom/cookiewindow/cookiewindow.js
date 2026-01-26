import './cookiewindow.scss';
const cookieModal = document.querySelector('.cookie');
if (cookieModal) {
    if (localStorage.getItem('cookie') === 'true') {
        cookieModal.remove();
    } else {
        const cookieBtnClose = cookieModal.querySelector('.cookie__btn');
        cookieBtnClose.addEventListener('click', function (e) {
            localStorage.setItem('cookie', 'true');
            cookieModal.classList.add('remove');
        });
    }
}
