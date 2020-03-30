// select menu buttons

const firstButton = document.querySelector('#slider-button');
const secondButton = document.querySelector('#biography-button');
const thirdButton = document.querySelector('#gallery-button');
const filmButton = document.querySelector('#film-button');

// select sections

const firstSection = document.querySelector('#slider-section');
const secondSection = document.querySelector('#biography-section');
const thirdSection = document.querySelector('#gallery-section');
const filmSection = document.querySelector('#film-section');


// change sections functions

const clickSlider = () => {
    firstSection.classList.add("display");
    secondSection.classList.remove("display");
    thirdSection.classList.remove("display");
    filmSection.classList.remove("display");
}

const clickBiography = () => {
    secondSection.classList.add("display");
    firstSection.classList.remove("display");
    thirdSection.classList.remove("display");
    filmSection.classList.remove("display");
}

const clickGallery = () => {
    thirdSection.classList.add("display");
    firstSection.classList.remove("display");
    secondSection.classList.remove("display");
    filmSection.classList.remove("display");
}

const clickFilm = () => {
    filmSection.classList.add("display");
    thirdSection.classList.remove("display");
    firstSection.classList.remove("display");
    secondSection.classList.remove("display");
}

// listeners

firstButton.addEventListener('click', clickSlider);
secondButton.addEventListener('click', clickBiography);
thirdButton.addEventListener('click', clickGallery);
filmButton.addEventListener('click', clickFilm);

//console.log()






