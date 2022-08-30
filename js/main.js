const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navLinks = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

const handleNav = () =>{
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
    navLinks.forEach(item => {
        item.addEventListener('click',()=>{
            navMobile.classList.remove('nav-mobile--active')
            navBtn.classList.remove('is-active')
        })
    })
}

navBtn.addEventListener('click',handleNav)


const handleCurrentYear = () =>{
    const year = (new Date).getFullYear()
    footerYear.innerText = year;
}

handleCurrentYear();