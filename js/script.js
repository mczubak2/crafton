// let circles = document.querySelector('.circles')
// let circle = document.querySelectorAll('.circle');

// circle.forEach(element => {
//     element.addEventListener('click', () => {
//         circles.querySelector('.active').classList.remove('active');
//         element.classList.add('active');
//     });
// });



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

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navigation = document.querySelector('.navigation')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navigation.classList.add('sticky');
    });
}



window.addEventListener('scroll', () => {
    let nav = document.querySelector('.navigation');
    nav.classList.toggle('sticky', window.scrollY > 0);
    // let burger = document.querySelector('.burger');
    // burger.classList.toggle('on', window.scrollY > 0);
})

navSlide();