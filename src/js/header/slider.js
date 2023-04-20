
    const slides = document.querySelectorAll('.slider')
    const dots = document.querySelectorAll('.dots__item')
    const dotsInner = document.querySelectorAll('.dots__item-circle')
    const dotsBlock = document.querySelector('.dots')

    let sliderIndex = 1;
    showSlides(sliderIndex)

    dotsBlock.addEventListener('click', (event) => {
        const clickedDot = event.target.closest('.dots__item-circle');
        if (clickedDot) {
            const dotIndex = Array.from(dotsInner).indexOf(clickedDot);
            currentSlide(dotIndex + 1);
        }
    });

    function currentSlide(n) {
        showSlides(sliderIndex = n)
    }

    setInterval(() => {
        sliderIndex++;
        showSlides(sliderIndex);
    }, 3000);

    function showSlides(n) {

        if (n < 1) {
            sliderIndex = slides.length;
        } else if (n > slides.length) {
            sliderIndex = 1;
        } else {
            sliderIndex = n;
        }

        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        slides[sliderIndex - 1].style.display = 'flex'
        dots[sliderIndex - 1].classList.add('active')
    }


