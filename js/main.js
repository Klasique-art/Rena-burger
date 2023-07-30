// aos initialisation
AOS.init({
    offset: 100,
    delay: 100,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})

// reveal the search form when clicking the search button
const searchForm = document.querySelector("header .search-form")
const seachBtn = document.querySelector("nav .search-btn")
const hamMenu = document.querySelector("nav .hamburger-menu")
const navMenu = document.querySelector("nav .nav-list")
const navLinks = document.querySelectorAll("nav .nav-list li")

seachBtn.addEventListener("click", openSearchForm)

function openSearchForm(){
    searchForm.classList.toggle("active")
    this.classList.toggle("active")
    navMenu.classList.remove("active")
}

hamMenu.addEventListener("click", openNav)

function openNav() {
    navMenu.classList.toggle("active")
    searchForm.classList.remove("active")
}

function closeNav(){
    navMenu.classList.remove("active")
}

navLinks.forEach((item)=>{
    item.addEventListener("click", closeNav)
})