<<<<<<< HEAD
// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("nav-menu_visible");

//   if (navMenu.classList.contains("nav-menu_visible")) {
//     navToggle.setAttribute("aria-label", "Cerrar menú");
//   } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//   }
// });

function cambiarClase(){
  let siteNav = document.getElementById('site-nav');
      siteNav.classList.toggle('site-nav-open');
  let menuOpen = document.getElementById('menu-toggle');
      menuOpen.classList.toggle('menu-open');    
      
=======
function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
        
>>>>>>> origin/Jonathan-Zambrano
}