// Función para crear y agregar el header
function agregarHeader() {
    // Crear el elemento header
    var header = document.createElement("header");
    header.textContent = "Este es el header";

    // Agregar clases y estilos al header
    header.style.backgroundColor = "#333";
    header.style.color = "white";
    header.style.padding = "10px 0";
    header.style.position = "relative"; // Posición relativa para permitir que otros elementos floten alrededor
    header.style.zIndex = "1000"; // Asegurar que el z-index sea mayor que otros elementos
    
    // Agregar el header al body
    document.body.insertBefore(header, document.body.firstChild);

    // Obtener la posición original del header
    header.originalOffsetTop = header.offsetTop;
}

// Llamar a la función para agregar el header
agregarHeader();

// Función para hacer pegajoso el header
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");

    // Obtener la posición actual de desplazamiento vertical
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Si el desplazamiento es mayor que la posición original del header, hacerlo pegajoso
    if (scrollPosition > header.originalOffsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
