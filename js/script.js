const headerSlider = () => {
    let counter = 0;
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');
    const size = carouselImages[0].clientWidth;

    const styleMaker = () => {
        for (let i = 0; i < carouselImages.length.length; i++) {
            const element = carouselImages.length[i];
            element.style.backgroundPosition = 'bottom left';
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundAttachment = 'fixed';
        }
    }

    nextArrow.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        counter++;
        carouselSlide.style.transform = `translateX(${-size*counter}px)`;
    })
    prevArrow.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        counter--;
        carouselSlide.style.transform = `translateX(${-size*counter}px) `;

    })
    setInterval(() => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        counter++;
        carouselSlide.style.transform = `translateX(${-size*counter}px)`;

    }, 5000)

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {

            carouselSlide.style.transition = `none`;
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = `translateX(${-size*counter}px) `;

        } else if (carouselImages[counter].id === 'firstClone') {

            carouselSlide.style.transition = `none`;
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = `translateX(${-size*counter}px) `;
        }
    })

}

const initMap = () => {
    let uluru = {
        lat: 52.403190,
        lng: 16.910160
    };
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16,
            center: uluru,
            style: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }]
        });
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navigation = document.querySelector('.navigation')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
        navigation.classList.add('sticky');
    });
}

const stickyNav = () => {
    window.addEventListener('scroll', () => {
        let nav = document.querySelector('.navigation');
        nav.classList.toggle('sticky', window.scrollY > 0);
    })
}

const smoothScroll = () => {
    const circleHeader = document.getElementById('header');
    const circleContent = document.getElementById('content');
    const circleMessage = document.getElementById('message');
    const circleFooter = document.getElementById('footer');

    circleHeader.addEventListener('click', () => {
        document.querySelector('.header').scrollIntoView({
            behavior: "smooth"
        })
    })
    circleContent.addEventListener('click', () => {
        document.querySelector('.content').scrollIntoView({
            behavior: "smooth"
        })
    })
    circleMessage.addEventListener('click', () => {
        const message = document.querySelector('.message');
        message.scrollIntoView({
            behavior: "smooth"
        })
    })
    circleFooter.addEventListener('click', () => {
        document.querySelector('.footer').scrollIntoView({
            behavior: "smooth"
        })
    })
}

const sendHttpRequest = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './php/emailform.php');
}

const app = () => {
    AOS.init();
    headerSlider();
    stickyNav();
    navSlide();
    smoothScroll();
    initMap();
    popup();
    sendHttpRequest()
}

const showPopup = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('blur');
    const popup = document.querySelector('.popup');
    popup.classList.toggle('popup-active');
}

app();