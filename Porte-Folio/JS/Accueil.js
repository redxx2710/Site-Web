document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 25) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        }
    });
});