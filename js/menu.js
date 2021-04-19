const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click', () => {
     menu.classList.toggle("spread")
});

window.addEventListener('click', e => {
     if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
          menu.classList.toggle("spread");
     }
});
