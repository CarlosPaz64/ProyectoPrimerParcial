// Encabezado sticky
const encabezadoSticky = document.createElement("div");

encabezadoSticky.className = "header";
encabezadoSticky.id = "myHeader";

// Contenido del encabezado 
encabezadoSticky.textContent = "duolingo";

document.body.appendChild(encabezadoSticky);

var sticky = encabezadoSticky.offsetTop;

// Función para manejar el evento de scroll
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        encabezadoSticky.classList.add("sticky");
    } else {
        encabezadoSticky.classList.remove("sticky");
    }
};
