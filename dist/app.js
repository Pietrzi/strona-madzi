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

const goToHome = (e) => {
    homeSection.classList.add('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
}

const goToDemo = (e) => {
    demoSection.classList.add('display');
    homeSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
}

const goToGallery = (e) => {
    gallerySection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
}

const goToBiography = (e) => {
    biographySection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    portfolioSection.classList.remove('display');
    contactSection.classList.remove('display');
}

const goToPortfolio = (e) => {
    portfolioSection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    contactSection.classList.remove('display');
}

const goToContact = (e) => {
    contactSection.classList.add('display');
    homeSection.classList.remove('display');
    demoSection.classList.remove('display');
    gallerySection.classList.remove('display');
    biographySection.classList.remove('display');
    portfolioSection.classList.remove('display');
}

homeButton.addEventListener('click', goToHome);
demoButton.addEventListener('click', goToDemo);
galleryButton.addEventListener('click', goToGallery);
biographyButton.addEventListener('click', goToBiography);
portfolioButton.addEventListener('click', goToPortfolio);
contactButton.addEventListener('click', goToContact);


console.log('click')
console.log(e.target)