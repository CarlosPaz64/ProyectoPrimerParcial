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