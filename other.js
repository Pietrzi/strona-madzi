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

const nextAutoImage = () => {
    let tempNextImg = currentImage + 1;
    slideshowImages[tempNextImg].style.display = "block";
    slideshowImages[tempNextImg].style.transform = "translateX(100%)";
    slideshowImages[currentImage].style.transform = "translateX(-100%)";
    slideshowImages[tempNextImg].style.transform = "translateX(0)";
    setTimeout(() => {
        slideshowImages[currentImage].style.display = "none";
    }, 1000)
    currentImage = (currentImage + 1) % slideshowImages.length;
    //slideshowImages[currentImage].style.display = "block";
}

const autoPlayInterval = () => setInterval(nextAutoImage, nextImageDelay);

autoPlayInterval();


listeners

firstButton.addEventListener('click', clickFirst);
secondButton.addEventListener('click', clickSecond);
thirdButton.addEventListener('click', clickThird);

//console.log(slideshowImages)



