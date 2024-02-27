// Encabezado sticky
const encabezadoSticky = document.createElement("nav");
encabezadoSticky.className = "header";
encabezadoSticky.id = "myHeader";

var img = document.createElement('img');
img.src = 'images/f92d5f2f7d56636846861c458c0d0b6c.svg';

const textoDerecha = document.createElement("nav");
textoDerecha.id = "right-text";
textoDerecha.textContent = "Seleccionar idioma: ";

encabezadoSticky.appendChild(img);
encabezadoSticky.appendChild(textoDerecha);

var sticky = encabezadoSticky.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        encabezadoSticky.classList.add("sticky");
    } else {
        encabezadoSticky.classList.remove("sticky");
    }
};

// Agregar el encabezado sticky al contenido
const contentDiv = document.querySelector(".content");
contentDiv.appendChild(encabezadoSticky);

// Función para cambiar el cursor a una mano cuando se pasa el mouse sobre los botones
function changeCursorToPointer() {
    document.body.style.cursor = "pointer";
}

// Función para restaurar el cursor predeterminado cuando se quita el mouse de los botones
function restoreDefaultCursor() {
    document.body.style.cursor = "default";
}

// Debouncing para limitar la velocidad de ejecución de las funciones
function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

// Obtener los botones
const botonUno = document.getElementById("botonUno");
const botonDos = document.getElementById("botonDos");

// Cambiar el cursor a una mano cuando se pasa el mouse sobre los botones
botonUno.addEventListener("mouseover", debounce(changeCursorToPointer, 100));
botonDos.addEventListener("mouseover", debounce(changeCursorToPointer, 100));

// Restaurar el cursor predeterminado cuando se quita el mouse de los botones
botonUno.addEventListener("mouseout", debounce(restoreDefaultCursor, 100));
botonDos.addEventListener("mouseout", debounce(restoreDefaultCursor, 100));



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