const track = document.querySelector('.slideshow');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.left-button')
const nextButton = document.querySelector('.right-button')
const firstButton = document.querySelector('#pierwszy');
const secondButton = document.querySelector('#drugi');
const firstSection = document.querySelector('#raz');
const secondSection = document.querySelector('#dwa');


const clickFirst = () => {
    firstSection.classList.remove("nodisplay");
    firstSection.classList.add("display");
    secondSection.classList.remove("display");
    secondSection.classList.add("nodisplay");
    autoPlayInterval();
}

const clickSecond = () => {
    clearInterval(autoPlayInterval)
    secondSection.classList.remove("nodisplay");
    secondSection.classList.add("display");
    firstSection.classList.remove("display");
    firstSection.classList.add("nodisplay");
}



const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidesPosition = (slide, i) => slide.style.left = slideWidth * i + 'px';

slides.forEach(setSlidesPosition);

const nextAutoImage = () => {
    
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if(nextSlide === null) {
        const firstSlide = currentSlide.previousElementSibling.previousElementSibling;
        const amountToMove = firstSlide.style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        currentSlide.classList.remove('current-slide');
        firstSlide.classList.add('current-slide');
    } else {
        const amountToMove = nextSlide.style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        currentSlide.classList.remove('current-slide');
        nextSlide.classList.add('current-slide');
    }
    console.log('did')
   
}

const autoPlayInterval = () => setInterval(nextAutoImage, 2000);
//const stopInterval = () => clearInterval(autoPlayInterval);



const prevSlideMove = () => {
    stopInterval();
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    track.style.transform = 'translateX(' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
}

const nextSlideMove = () => {
    stopInterval();
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
}

firstButton.addEventListener('click', clickFirst);
secondButton.addEventListener('click', clickSecond);
prevButton.addEventListener('click', prevSlideMove);
nextButton.addEventListener('click', nextSlideMove);


console.log();