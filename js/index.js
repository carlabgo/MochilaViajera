const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

let destinos = [
    {
        nombre: "Jujuy",
        img : "img/Cerrodelos7colores.jpg",
        id: 1
    },
    {
        nombre: "Usuahia",
        img : "img/Les_Eclaireurs_Lighthouse-1024x768.jpg",
        id: 2
    },
    {
        nombre: "Mendoza",
        img : "img/potrerillos.jpg",
        id: 3
    },
];


const $mostrar = document.getElementById("mostrar_destinos");


function mostrarDestinos(array) {
    $mostrar.innerHTML = array.map((item) =>
    `<div class="destinos-array" id="${item.id}">
    <img src="${item.img}">
    <h3>${item.nombre}</h3>
    </div>`
    ).join(" ");
}

mostrarDestinos(destinos);