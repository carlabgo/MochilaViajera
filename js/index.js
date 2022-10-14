const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

let destinos = [
    {
        nombre: "Jujuy",
        img: "img/Cerrodelos7colores.jpg",
        id: 1
    },
    {
        nombre: "Usuahia",
        img: "img/Les_Eclaireurs_Lighthouse-1024x768.jpg",
        id: 2
    },
    {
        nombre: "Mendoza",
        img: "img/potrerillos.jpg",
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
// let carruselArray = [
//     {
//         img: "img/bariloche.jpg",
//         id:1
//     },
//     {
//         img: "img/potrerillos.jpg",
//         id: 2
//     },
//     {
//         img: "img/aconcagua.jpg",
//         id: 3
//     },
//     {
//         img: "img/ushuaia.webp",
//         id: 4
//     },
//     {
//         img: "img/5142724_Catedral-de-Salta2.jpg",
//         id: 5
//     },
//     {
//         img: "img/laslenas.jpg",
//         id: 6
//     },
//     {
//         img: "img/Dique-El-Jumeal_Carolina-Cabrera_50.jpg",
//         id: 7
//     },
//     {
//         img: "img/cerro-siete-colores-jujuy-529939.jpg",
//         id: 8
//     },
//     {
//         img: "img/cafayate-1.jpg",
//         id: 9
//     },
//     {
//         img: "img/lasquijadas.jpg",
//         id: 10
//     },
//     {
//         img: "img/casa-historica-de-tucuman-3.jpg",
//         id: 11
//     },
//     {
//         img: "img/valledelaluna.jpg",
//         id: 11
//     },
// ];
// const $carrusel = document.getElementById("carrusel_items");
const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
    stop();
});

carrusel.addEventListener("mouseout", () => {
    start();
});

start();