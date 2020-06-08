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
})

const smoothScroll = () => {
    const circleContent = document.getElementById('content');
    const circleMessage = document.getElementById('message');
    const circleFooter = document.getElementById('footer');

    circleContent.addEventListener('click', () => {
        document.querySelector('.content').scrollIntoView({
            behavior: "smooth"
        })
    })
    circleMessage.addEventListener('click', () => {
        document.querySelector('.message').scrollIntoView({
            behavior: "smooth"
        })
    })
    circleFooter.addEventListener('click', () => {
        document.querySelector('.footer').scrollIntoView({
            behavior: "smooth"
        })
    })
}

const sliderHeader = () => {
    const header = document.querySelector('.header');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let images = [];
    let time = 2000;
    let i = 0;

    images[0] = '../assets/header_bgc.png';
    images[1] = '../assets/header-bgc_2.png';
    images[2] = '../assets/header-bgc_3.png';

    function changeImg() {
        header.style.backgroundImage = `url("${images[i]}")`;

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg(), time);
    }

    window.onload = changeImg;
}


const app = () => {

    navSlide();
    smoothScroll();
    sliderHeader();
    initMap();
}

app();