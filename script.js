// Encabezado sticky
const encabezadoSticky = document.createElement("div");

encabezadoSticky.className = "header";
encabezadoSticky.id = "myHeader";

// Agregar imagen de encabezado
var img = document.createElement('img');

document.write("Seleccionar idioma: ")

img.src = 'images/f92d5f2f7d56636846861c458c0d0b6c.svg';

document.body.appendChild(encabezadoSticky);
document.body.appendChild(img);

var sticky = encabezadoSticky.offsetTop;

// Función para manejar el evento de scroll
// Propiedades de sticky
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        encabezadoSticky.classList.add("sticky");
    } else {
        encabezadoSticky.classList.remove("sticky");
    }
};

// Creacion de otro div

const debajoHeader = document.createElement("div");

debajoHeader.className = "container";
debajoHeader.id = "contenido";

// Funcion "carrusel de banderas"
const carrusel = document.getElementById("carrusel");

function carruselBanderas() {
    // Crear el elemento <nav>
    const navElement = document.createElement("nav");

    // Crear el elemento <svg>
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Establecer atributos del SVG
    svgElement.setAttribute("class", "_1fESl _1G1lu");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    // Crear el elemento <path>
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M10 2L4 8L10 14");
    pathElement.setAttribute("stroke", "currentColor");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("stroke-width", "2");

    // Agregar el <path> al SVG
    svgElement.appendChild(pathElement);

    // Agregar el SVG al nav
    navElement.appendChild(svgElement);

    // Agregar el nav al cuerpo del documento
    document.body.appendChild(navElement);
}

// Llamar a la función para crear el carrusel de banderas
carruselBanderas();