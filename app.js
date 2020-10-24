const icon = document.querySelector('.icon');
const navUL = document.querySelector('.navbar');

icon.addEventListener('click', function () {
	navUL.classList.toggle('show');
});
