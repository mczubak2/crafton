let circles = document.querySelector('.circles')
let circle = document.querySelectorAll('.circle');

circle.forEach(element => {
    element.addEventListener('click', () => {
        circles.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    });
});