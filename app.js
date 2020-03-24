const nextImageDelay = 3000;
let currentImage = 0;

// select menu buttons

const firstButton = document.querySelector('#pierwszy');
const secondButton = document.querySelector('#drugi');

// select sections

const firstSection = document.querySelector('#raz');
const secondSection = document.querySelector('#dwa');

// select images

const slideshowImages = document.querySelectorAll('.slideshow__img');

// change sections functions

const clickFirst = () => {
    firstSection.classList.remove("nodisplay");
    firstSection.classList.add("display");
    secondSection.classList.remove("display");
    secondSection.classList.add("nodisplay");
}

const clickSecond = () => {
    secondSection.classList.remove("nodisplay");
    secondSection.classList.add("display");
    firstSection.classList.remove("display");
    firstSection.classList.add("nodisplay");
}

// slideshow logic

slideshowImages[currentImage].style.display = "block";

const nextAutoImage = () => {
    slideshowImages[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % slideshowImages.length;
    slideshowImages[currentImage].style.display = "block";
}

const autoPlayInterval = () => setInterval(nextAutoImage, nextImageDelay);

autoPlayInterval();


// listeners

firstButton.addEventListener('click', clickFirst);
secondButton.addEventListener('click', clickSecond);

//console.log(slideshowImages)