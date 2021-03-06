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

let slideWidth;

let width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() !== width) {
    width = $(this).width();
    if(width < 700) {
        slideWidth = 320;
    } else if (width >= 700 && width < 900) {
        slideWidth = 600;
    } else {
        slideWidth = 800;
    }
  }
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

const track = document.querySelector('.track');
const nodeList = Array.from(track.children);
const slides = [...nodeList];
const prevButton = document.querySelector('.left-button');
const nextButton = document.querySelector('.right-button');


if(window.innerWidth < 700) {
    slideWidth = 320;
} else if (window.innerWidth >= 700 && window.innerWidth < 900) {
    slideWidth = 600;
} else {
    slideWidth = 800;
}

const hamButton = document.querySelector('.toggle-button');
const sideMenu = document.querySelector('.side-menu');

const sideHomeButton = document.querySelector('#side-home-button');
const sideDemoButton = document.querySelector('#side-demo-button');
const sideGalleryButton = document.querySelector('#side-gallery-button');
const sideBiographyButton = document.querySelector('#side-biography-button');
const sidePortfolioButton = document.querySelector('#side-portfolio-button');
const sideContactButton = document.querySelector('#side-contact-button');
//console.log('click')

const openMenu = () => {
    sideMenu.classList.toggle('open');
}

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

    sideHomeButton.classList.add('red-active');
    sideDemoButton.classList.remove('red-active');
    sideGalleryButton.classList.remove('red-active');
    sideBiographyButton.classList.remove('red-active');
    sidePortfolioButton.classList.remove('red-active');
    sideContactButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
    // console.log('click')
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

    sideDemoButton.classList.add('red-active');
    sideHomeButton.classList.remove('red-active');
    sideGalleryButton.classList.remove('red-active');
    sideBiographyButton.classList.remove('red-active');
    sidePortfolioButton.classList.remove('red-active');
    sideContactButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
    // console.log('click')
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

    sideGalleryButton.classList.add('red-active');
    sideHomeButton.classList.remove('red-active');
    sideDemoButton.classList.remove('red-active');
    sideBiographyButton.classList.remove('red-active');
    sidePortfolioButton.classList.remove('red-active');
    sideContactButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
    // console.log('click')
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

    sideBiographyButton.classList.add('red-active');
    sideHomeButton.classList.remove('red-active');
    sideDemoButton.classList.remove('red-active');
    sideGalleryButton.classList.remove('red-active');
    sidePortfolioButton.classList.remove('red-active');
    sideContactButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
    // console.log('click')
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

    sidePortfolioButton.classList.add('red-active');
    sideHomeButton.classList.remove('red-active');
    sideDemoButton.classList.remove('red-active');
    sideGalleryButton.classList.remove('red-active');
    sideBiographyButton.classList.remove('red-active');
    sideContactButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
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

    sideContactButton.classList.add('red-active');
    sideHomeButton.classList.remove('red-active');
    sideDemoButton.classList.remove('red-active');
    sideGalleryButton.classList.remove('red-active');
    sideBiographyButton.classList.remove('red-active');
    sidePortfolioButton.classList.remove('red-active');

    sideMenu.classList.remove('open');
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

sideHomeButton.addEventListener('click', goToHome);
sideDemoButton.addEventListener('click', goToDemo);
sideGalleryButton.addEventListener('click', goToGallery);
sideBiographyButton.addEventListener('click', goToBiography);
sidePortfolioButton.addEventListener('click', goToPortfolio);
sideContactButton.addEventListener('click', goToContact);

prevButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling ? currentSlide.previousElementSibling : null;
    if(prevSlide) {
        moveToslide(track, currentSlide, prevSlide);
    }
})

nextButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling ? currentSlide.nextElementSibling : null;
    if(nextSlide) {
        moveToslide(track, currentSlide, nextSlide);
    }
})

hamButton.addEventListener('click', openMenu);

// const currentSlide = track.querySelector('.current-slide');




//console.log(window.innerWidth)
// console.log(e.target)