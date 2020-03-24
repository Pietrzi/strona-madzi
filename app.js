const nextImageDelay = 2000;
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

setTimeout(() => {
    slideshowImages[currentImage].style.transform = "translateX(-100%)";
    slideshowImages[currentImage + 1].classList.add("slideshow__img__next");
    slideshowImages[currentImage + 1].classList.remove("slideshow__img");
    slideshowImages[currentImage + 1].style.display = "block";
    //slideshowImages[currentImage + 1].style.transform = "translateX(0)";
    
}, 1000)

setTimeout(() => {
    slideshowImages[currentImage].style.display = "none";
}, 2000)

// const nextAutoImage = () => {
//     let tempNextImg = currentImage + 1;
//     slideshowImages[tempNextImg].style.display = "block";
//     slideshowImages[tempNextImg].style.transform = "translateX(100%)";
//     slideshowImages[currentImage].style.transform = "translateX(-100%)";
//     slideshowImages[tempNextImg].style.transform = "translateX(0)";
//     setTimeout(() => {
//         slideshowImages[currentImage].style.display = "none";
//     }, 1000)
//     currentImage = (currentImage + 1) % slideshowImages.length;
//     //slideshowImages[currentImage].style.display = "block";
// }

// const autoPlayInterval = () => setInterval(nextAutoImage, nextImageDelay);

// autoPlayInterval();


// listeners

firstButton.addEventListener('click', clickFirst);
secondButton.addEventListener('click', clickSecond);

//console.log(slideshowImages)