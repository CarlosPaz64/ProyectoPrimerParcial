// Encabezado sticky
const encabezadoSticky = document.createElement("nav");

encabezadoSticky.className = "header";
encabezadoSticky.id = "myHeader";

// Agregar imagen de encabezado
var img = document.createElement('img');

img.src = 'images/f92d5f2f7d56636846861c458c0d0b6c.svg';

const textoDerecha = document.createElement("nav");
textoDerecha.id = "right-text";
textoDerecha.textContent = "Seleccionar idioma: ";

// Creación del div de contenido
const debajoHeader = document.createElement("div");
debajoHeader.className = "main";
debajoHeader.textContent = "Contenido de ejemplo";

// Agregar elementos al encabezado
encabezadoSticky.appendChild(img);
encabezadoSticky.appendChild(textoDerecha);

document.body.appendChild(encabezadoSticky);

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




// Dear teacher: 
//  
// Once you are done trying to 'evaluate' this proyect, 
// and have realized what a terrible mistake that was, 
// please increment the following counter as a warning 
// to the next guy: 
//  
// total_hours_wasted_here = 42 
// When I wrote this, only God and I understood what I was doing 
// Now, God only knows 