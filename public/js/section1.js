var hamburguesaEnMenu = document.getElementById("toggle-menu")
var hamburguesaEnNav = document.getElementById("toggle-menu-nav")
var menu = document.getElementById("menu-principal")

hamburguesaEnMenu.addEventListener("click", ()=>{
    menu.classList.add('hide')
})

hamburguesaEnNav.addEventListener("click", ()=>{
    menu.classList.remove('hide')
})

