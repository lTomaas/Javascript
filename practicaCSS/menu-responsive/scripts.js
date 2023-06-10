const toggleMenuElement = document.getElementById("toggle-menu__button")
const mainMenuElement = document.getElementById("main-menu")

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle("main-menu--show")  /* Toggle para agregar o sacar esta clase del menu*/
})