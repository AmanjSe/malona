const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")
const navLinks = document.querySelectorAll(".nav-menu .nav-link")

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu vesibility
    document.body.classList.toggle("show-mobile-menu")
})
// close menu bar whent the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// close menu bar whent the nav button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
})

const swiper = new Swiper('.slider-wrapper', {
    loop:true, // this will make the slide loop , false : then it will stop in the last picture
    grabCursor:true,
    spaceBetween:25,

    // if we need pagination
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },

    // navigatoin arrows
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0:{
            // breakpoint spaceBetween , adjusts gap per screen
            slidesPerView:1,
            spaceBetween:10
        },
        768:{
            slidesPerView:2,
            spaceBetween:20
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30 
        }
    }

});