/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
 
/*===== Menu Show =====*/
 if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
 }
 /*===== Menu Hidden =====*/
if (navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    } )
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click' , linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader () {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport, add the scroll-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll' , scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

     this.scrollY >= 50 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive () {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // rest: true
})

sr.reveal(`.home__header, .section__title`,{delay:600})
sr.reveal(`.home__footer`, {delay:700})
sr.reveal(`.home__img`, {delay:900, origin:'top'})

sr.reveal(`.sponsor__img, .products__card`, {origin:'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`, {origin:'left', interval: 100})
sr.reveal(`.specs__img, .discount__img `, {origin: 'right'})

sr.reveal(`.case__img`,{ origin:'bottom'})
sr.reveal(`.case__data`, {origin:'right', interval:200})

sr.reveal(`.footer__container`, {origin:'top'})

