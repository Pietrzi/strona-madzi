const track = document.querySelector('.slideshow');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.left-button')
const nextButton = document.querySelector('.right-button')


const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidesPosition = (slide, i) => slide.style.left = slideWidth * i + 'px';

slides.forEach(setSlidesPosition);



const nextSlideMove = e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
}

nextButton.addEventListener('click', nextSlideMove);


console.log(nextSlide);