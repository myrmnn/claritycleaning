const icon = document.querySelector('.icon');
const navUL = document.querySelector('nav ul')

icon.addEventListener('click', function () {
    navUL.classList.toggle('show');
})