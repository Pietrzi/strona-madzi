firstButton = document.querySelector('#pierwszy');
secondButton = document.querySelector('#drugi');

firstSection = document.querySelector('#raz');
secondSection = document.querySelector('#dwa');

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

firstButton.addEventListener('click', clickFirst);
secondButton.addEventListener('click', clickSecond);

console.log(firstButton)