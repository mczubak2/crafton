let circles = document.querySelector('.circles')
let circle = document.querySelectorAll('.circle');

circle.forEach(element => {
    element.addEventListener('click', () => {
        circles.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    });
});

function initMap() {
    let uluru = {
        lat: 52.403190,
        lng: 16.910160
    };
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16,
            center: uluru
        });
}

function toggle() {
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.navigation');
    nav.classList.toggle('sticky', window.scrollY > 0);
})