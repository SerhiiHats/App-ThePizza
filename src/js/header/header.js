
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


//scroll and active menu link

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
let activeMenuLink = null;
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)

            function onMenuLinkClick(e){

                let menuLink = e.target

                if (activeMenuLink) {
                    activeMenuLink.classList.remove('selected');
                }
                menuLink.classList.add('selected')
                activeMenuLink = menuLink;

                if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

                    const gotoBlock = document.querySelector(menuLink.dataset.goto)
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight
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
            }

        })
}






