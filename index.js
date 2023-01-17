const iconMenu = document.querySelector(".icon-menu")
const menu = document.querySelector(".menu")
const showIconMenu = document.querySelector(".show-icon-menu")


showIconMenu.addEventListener("click", function(){
    menu.classList.toggle("icon-menu")
})