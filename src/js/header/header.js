const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')
} else {
    document.body.classList.add('_pc')
}


//burger menu

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu')

if (iconMenu) {

    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}


//scroll

const menuLinks = document.querySelectorAll('li[data-goto]')

if (menuLinks.length > 0) {
    menuLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            let menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
                if(iconMenu.classList.contains('_active')){
                    document.body.classList.remove('_lock')
                    iconMenu.classList.remove('_active')
                    menuBody.classList.remove('_active')
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault()
            }
        })
    })
}




