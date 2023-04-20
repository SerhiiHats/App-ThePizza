const slides = document.querySelectorAll('.slider')
const dots = document.querySelectorAll('.dots__item')
const dotsBlock = document.querySelector('.dots')


let sliderIndex = 1;
showSlides(sliderIndex)

dotsBlock.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dots__item') && event.target === dots[i - 1]) currentSlide(i)
    }
})
function currentSlide(n) {
    showSlides(sliderIndex = n)
}
function showSlides(n) {
    if (n < 1) {
        sliderIndex = slides.length
    } else if (n > slides.length) {
        sliderIndex = 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    slides[sliderIndex - 1].style.display = 'flex'
    dots[sliderIndex - 1].classList.add('active')
}

setInterval(() => {
    sliderIndex++;
    showSlides(sliderIndex);
}, 3000);



