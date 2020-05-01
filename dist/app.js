$(function() {
    var nav = $("nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 40) {
            nav.addClass("no-nav");
        } else {
            nav.removeClass("no-nav");
        }
    });
});

const homeButton = document.querySelector('#home-button');
const demoButton = document.querySelector('#demo-button');
const galleryButton = document.querySelector('#gallery-button');
const biographyButton = document.querySelector('#biography-button');
const portfolioButton = document.querySelector('#portfolio-button');
const contactButton = document.querySelector('#contact-button');

const homeSection = document.querySelector('#home-section');
const demoSection = document.querySelector('#demo-section');
const gallerySection = document.querySelector('#gallery-section');
const biographySection = document.querySelector('#biography-section');
const portfolioSection = document.querySelector('#portfolio-section');
const contactSection = document.querySelector('#contact-section');
// const slider = document.querySelector('.slider-holder')

const track = document.querySelector('.track');
const nodeList = Array.from(track.children);
const slides = [...nodeList];
const prevButton = document.querySelector('.left-button')
const nextButton = document.querySelector('.right-button')
const slideWidth = 800;

//console.log(slideWidth)


const goToHome = (e) => {
    homeSection.classList.add('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
    // slider.classList.remove('display');

    homeButton.classList.add('red-active');
    demoButton.classList.remove('red-active');
    galleryButton.classList.remove('red-active');
    biographyButton.classList.remove('red-active');
    portfolioButton.classList.remove('red-active');
    contactButton.classList.remove('red-active');
}

const goToDemo = (e) => {
    demoSection.classList.add('display');
    homeSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
    // slider.classList.remove('display');

    demoButton.classList.add('red-active');
    homeButton.classList.remove('red-active');
    galleryButton.classList.remove('red-active');
    biographyButton.classList.remove('red-active');
    portfolioButton.classList.remove('red-active');
    contactButton.classList.remove('red-active');
}

const goToGallery = (e) => {
    gallerySection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
    // slider.classList.add('display');

    galleryButton.classList.add('red-active');
    homeButton.classList.remove('red-active');
    demoButton.classList.remove('red-active');
    biographyButton.classList.remove('red-active');
    portfolioButton.classList.remove('red-active');
    contactButton.classList.remove('red-active');
}

const goToBiography = (e) => {
    biographySection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
    // slider.classList.remove('display');

    biographyButton.classList.add('red-active');
    homeButton.classList.remove('red-active');
    demoButton.classList.remove('red-active');
    galleryButton.classList.remove('red-active');
    portfolioButton.classList.remove('red-active');
    contactButton.classList.remove('red-active');
}

const goToPortfolio = (e) => {
    portfolioSection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    contactSection.classList.remove('display');
    // slider.classList.remove('display');

    portfolioButton.classList.add('red-active');
    homeButton.classList.remove('red-active');
    demoButton.classList.remove('red-active');
    galleryButton.classList.remove('red-active');
    biographyButton.classList.remove('red-active');
    contactButton.classList.remove('red-active');
}

const goToContact = (e) => {
    contactSection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    // slider.classList.remove('display');

    contactButton.classList.add('red-active');
    homeButton.classList.remove('red-active');
    demoButton.classList.remove('red-active');
    galleryButton.classList.remove('red-active');
    biographyButton.classList.remove('red-active');
    portfolioButton.classList.remove('red-active');
}


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToslide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


homeButton.addEventListener('click', goToHome);
demoButton.addEventListener('click', goToDemo);
galleryButton.addEventListener('click', goToGallery);
biographyButton.addEventListener('click', goToBiography);
portfolioButton.addEventListener('click', goToPortfolio);
contactButton.addEventListener('click', goToContact);

prevButton.addEventListener('click' , e => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling ? currentSlide.previousElementSibling : null;
    if(prevSlide) {
        moveToslide(track, currentSlide, prevSlide);
    }
})

nextButton.addEventListener('click' , e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling ? currentSlide.nextElementSibling : null;
    if(nextSlide) {
        moveToslide(track, currentSlide, nextSlide);
    }
})

// const currentSlide = track.querySelector('.current-slide');




// console.log(currentSlide)
// console.log(e.target)