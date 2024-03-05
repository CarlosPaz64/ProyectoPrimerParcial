const styleElement = document.createElement('style');
styleElement.textContent = `
/*Estilo del texto arriba de los botones*/
#h1{
    text-align: center; /* Centra horizontalmente el texto */
    align-items: center; /* Centra verticalmente el contenido */
    line-height: 1.5;
    width: 480px;
    height: 88px;
    font-size: 32px;
    font-family: 32px din-round, sans-serif;
    line-height: normal;
    flex: -1;
    margin: 10px 0 0;
    margin-bottom: 50px;
    max-width: 345px;
}
#cambioBoton{
    font-family = var(--otra-fuente);
    font-weight = bold;
}
button:active{
    box-shadow: none;
    transform: translateY(5px);
}
button:hover{
    cursor: pointer;
}
#botonDos{
    background-color: var(--color-blanco);
    box-shadow: 0 5px 0 var(--color-gris);
    font-family: var(--otra-fuente);
    font-weight: bold;
    outline: none;
    border-radius: var(--__internal__border-radius);
    border: 2px solid var(--color-gris);
    border-bottom: 6px solid var(--color-gris);
    margin: 10px;
    transition: all 0.1s;
    display: inline-flex;
    padding: 12px 16px;
    color: var(--color-azul);
    width: 330px;
    height: 46px;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
}
#botonDos:active{
    box-shadow: none;
    transform: translateY(5px);
}
#botonUno{
    background-color: var(--principal-color);
    box-shadow: 0 5px 0 var(--color-botones);
    font-family: var(--otra-fuente);
    font-weight: bold;
    outline: none;
    border-radius: var(--__internal__border-radius);
    border: 2px solid var(--color-botones);
    border-bottom: 6px solid var(--color-botones);
    margin: 10px;
    transition: all 0.1s;
    display: inline-flex;
    padding: 12px 16px;
    color: var(--color-blanco);
    width: 330px;
    height: 46px;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
}
#botonUno:active{
    box-shadow: none;
    transform: translateY(5px);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-blanco);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: border-color .3s, transform .4s cubic-bezier(.22,1,.36,1);
    cursor: pointer;
    margin: 0 auto;
    padding: 0;
    height: 72px;
}
.header img {
    width: 100px; /* ajusta el tamaño según sea necesario */
    cursor: pointer;
    height: 42px;
    width: 179px;
    margin-left: 224px;
}
#right-text {
    color: var(--color-gris);
    margin-left: auto; /* Alinear a la derecha */
    padding: 10px; /* Ajusta el padding según sea necesario */
    white-space: nowrap; /* Evita que el texto se rompa */
    cursor: pointer;
    position: relative;
    margin-right: 250px;
    font-family: var(--otra-fuente);
    font-weight: bold;
    letter-spacing: 1px;
}
.content{
    font-family: var(--fuente);
    color: var(--color-gris);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.sticky + .content {
    padding-top: 102px; 
}
.container{
    background-color: var(--color-blanco);
    padding: 10px 15px 20px;
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
}
.text-buttons{
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
    text-align: left;
}
.container img{
    display: inline-block;
}
.container .p{
    font-family: var(--fuente);
    color: var(--principal-color);
}
.flags {
    display: flex; /* Hace que los elementos dentro del contenedor se alineen en una fila */
    align-items: center; /* Centra los elementos verticalmente dentro del contenedor */
    border: 2px solid rgb(var(--color-gris)); /* Agrega un borde alrededor del carrusel */
    border-radius: 8px; /* Ajusta el radio de borde según sea necesario */
    justify-content: center; /* Centrar horizontalmente las banderas */
    overflow: hidden; /* Ocultar las banderas que desbordan el contenedor */
    margin-top: 130px;
}

.flecha-container {
    display: flex;
    justify-content: center;
    align-items: center; /* Centra verticalmente el contenido */
    width: calc(100% - 5px); /* Ancho del 100% menos 40px para dejar espacio para las flechas */
    border-top: 2px solid var(--color-gris); /* Borde superior de 2px con color gris suave */
    border-width: 2px 0; /* Ancho de borde superior e inferior de 2px */
    border-bottom: 2px solid var(--color-gris); /* Borde inferior de 2px con color gris suave */
    border-left: none; /* Sin borde a la izquierda */
    border-right: none; /* Sin borde a la derecha */
    border-radius: 8px 8px 0 0; /* Radio de borde solo en las esquinas superiores */
    padding: 20px; /* Relleno aumentado */
    font-size: 30px; /* Tamaño de fuente */
    font-family: var(--otra-fuente);
    font-weight: bold;
}




.flecha-izquierda,
.flecha-derecha {
    margin-top: calc(28.9756px - 24px); /* Ajusta el margen superior para alinear con las banderas */
    fill: var(--color-gris); /* Color de relleno para las flechas */
    width: 24px; /* Ancho de las flechas */
    height: 24px; /* Alto de las flechas */
}
.flecha-izquierda:hover,
.flecha-derecha:hover {
    cursor: pointer; /* Cambiar el cursor al pasar el mouse sobre las flechas */
}

.banderas {
    flex: 1; /* Hace que este elemento ocupe todo el espacio disponible */
    display: flex;
    justify-content: center;
    align-items: center; /* Centrar verticalmente las banderas */
    margin-left: auto; /* Empujar las banderas hacia el final del contenedor */
    display: flex;
    transition: transform 0.3s ease; /* Agregar transición suave al desplazamiento */
}

.banderas ul {
    list-style-type: none; /* Quita los estilos de la lista */
    margin: 0; /* Quita el margen predeterminado de la lista */
    padding: 0; /* Quita el relleno predeterminado de la lista */
    max-width: 1036px;
    overflow-x: hidden; /* Permite hacer scroll horizontal si hay más banderas que caben */
    align-items: center;
}

.banderas ul li {
    display: inline-block; /* Hace que los elementos de la lista se muestren en línea */
    margin-right: 10px; /* Espacio entre los elementos de la lista */
    vertical-align: middle;
}
.banderas ul li span {
    text-decoration: none;
}
.flags .banderas{
    display: flex;
    align-items: center; /* Centra verticalmente el contenido */
}
.flags .banderas ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}
.flags .banderas ul li {
    margin-right: 10px;
    display: flex; /* Cambiamos a flex para controlar la posición de los elementos internos */
    align-items: center; /* Centramos verticalmente los elementos */
}
.flags .banderas ul li a {
    display: flex; /* Cambiamos a flex para controlar la posición de los elementos internos */
    align-items: center; /* Centramos verticalmente los elementos */
    color: var(--color-gris);
    text-decoration: none !important; /* Evita que los enlaces estén subrayados */
}
/*Debajo del header*/
.left, .right{
    flex-direction: row;
    gap: 101px;
    margin: 0 auto;
    width: 988px;
    padding: 0;
    align-items: center;
    display: flex;
    color: var(--principal-color);
    font-family: var(--otra-fuente);
    letter-spacing: 1px;
}

.right {
    flex-direction: row-reverse;
    margin: 0 auto; /* Añade margen para centrar */
}
.title-section {
    font-size: 48px;
    max-width: 503px;
    font-family: var(--fuente);
    color: var(--principal-color);
    line-height: normal;
    margin: 0;
    font-weight: 700;
}
section {
    margin-bottom: 20px; /* Ajusta este valor según la separación deseada */
    width: 988px;
    height: 530px;
}
.contenidoSeccion{
    color: var(--color-gris);
}
/*Botones del scrolleable*/
#oneBoton, #twoBoton{
    background-color: var(--color-blanco);
    box-shadow: 0 5px 0 var(--color-gris);
    font-family: var(--fuente);
    outline: none;
    border-radius: var(--__internal__border-radius);
    border: 2px solid var(--color-gris);
    border-bottom: 6px solid var(--color-gris);
    margin: 10px;
    transition: all 0.1s;
    display: inline-flex;
    padding: 12px 16px;
    color: var(--color-gris);
    width: 330px;
    height: 46px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: var(--otra-fuente);
    font-weight: bold;
    letter-spacing: 1px;
}
#oneBoton:active, #twoBoton:active{
    box-shadow: none;
    transform: translateY(5px);
}
.super{
    background-color: var(--color-duo-super);
}
.animate{
    background-color: var(--color-blanco);
    box-shadow: 0 5px 0 var(--color-gris);
    font-family: var(--otra-fuente);
    outline: none;
    border-radius: var(--__internal__border-radius);
    border: 2px solid var(--color-gris);
    border-bottom: 6px solid var(--color-gris);
    margin: 10px;
    transition: all 0.1s;
    display: inline-flex;
    padding: 12px 16px;
    color: var(--color-duo-super);
    width: 330px;
    height: 46px;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.textoButtons{
    font-family: var(--otra-fuente);
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--color-duo-super);
}
.button-section{
    width: 331px;
    height: 50px;
    background-color: var(--color-blanco);
    box-shadow: 0 5px 0 var(--color-gris);
    font-family: var(--otra-fuente);
    font-weight: bold;
    letter-spacing: 1px;
    outline: none;
    border-radius: var(--__internal__border-radius);
    border: 2px solid var(--color-gris);
    border-bottom: 6px solid var(--color-gris);
    margin: 10px;
    transition: all 0.1s;
    display: inline-flex;
    padding: 12px 16px;
    color: var(--color-azul);
    text-align: center;
    justify-content: center;
    align-items: center;
}
.textAzul{
    text-decoration: none; /* Quitar el subrayado */
    color: var(--color-azul); 
}
footer {
    background: var(--principal-color);
    font-family: var(--fuente);
    text-align: center; /* Centra horizontalmente el contenido */
    margin-top: -10px;
}

footer ul {
    list-style: none;
    display: inline-block; /* Alinea los elementos ul horizontalmente */
    color: var(--ul-footer);
    width: 178px;
    height: 412.6px;
    cursor: pointer;
    vertical-align: top;
    text-align: left;
}

footer h3 {
    font-weight: 100;
    margin-bottom: 0;
    color: var(--h3-footer);
}
.last-one {
    margin-top: 20px; /* Cambia el valor según lo que necesites */
    background-color: var(--principal-color);
    margin-top: -18px;
    margin-bottom: auto;
}
.last-one ul {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos de la lista se envuelvan a una nueva línea cuando no haya suficiente espacio */
    justify-content: center; /* Centra los elementos horizontalmente */
    padding: 0; /* Quita el relleno predeterminado */
    list-style: none;
}

.last-one li {
    margin: 8px 12px; /* Espacio entre los elementos */
    cursor: pointer;
    color: var(--ul-footer);
}
.last-one h2{
    color: var(--h3-footer);
}
`;

document.head.appendChild(styleElement);

// Creación del div content
const contentDiv = document.createElement("div");
contentDiv.className = "content";

// Creación del div flags
const flagsDiv = document.createElement("div");
flagsDiv.id = "flags";

// Creación del div myContainer
const containerDiv = document.createElement("div");
containerDiv.id = "myContainer";

// Agregar los elementos al body del documento
document.body.appendChild(contentDiv);
document.body.appendChild(containerDiv);
document.body.appendChild(flagsDiv);

// Encabezado sticky
const encabezadoSticky = document.createElement("nav");
encabezadoSticky.className = "header";
encabezadoSticky.id = "myHeader";

var img = document.createElement('img');
img.src = 'images/f92d5f2f7d56636846861c458c0d0b6c.svg';

const textoDerecha = document.createElement("nav");
textoDerecha.id = "right-text";
textoDerecha.textContent = "Idioma de la página: Español";

encabezadoSticky.appendChild(img);
encabezadoSticky.appendChild(textoDerecha);

var sticky = encabezadoSticky.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        encabezadoSticky.classList.add("sticky");
        encabezadoSticky.style.boxShadow = "0px 0.2vw 1vw rgba(0, 0, 0, 0.1)";
    } else {
        encabezadoSticky.classList.remove("sticky");
        encabezadoSticky.style.boxShadow = "none";
    }
};
window.addEventListener('scroll', function() {
    var boton = document.getElementById('right-text');

    if (window.pageYOffset > 300) { // Cambia 200 por la altura a la que deseas cambiar el texto a un botón
        boton.innerHTML = '<button id="cambioBoton">EMPIEZA AHORA</button>';
    } else {
        boton.innerHTML = 'Idioma de la página: Español';
    }
});
// Agregar el encabezado sticky al contenido
contentDiv.appendChild(encabezadoSticky);

containerDiv.innerHTML = `<div class="container">
<img src="images/inicial.svg" width="424" height="424" style="width: 424px; height: 424px;"/>
<div class="text-buttons">
    <h1 id="h1">¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
    <button id="botonUno" type="button">EMPIEZA AHORA</button>
    <button id="botonDos" type="button">YA TENGO UNA CUENTA</button>
</div>
</div>
`;

// Carrusel de las banderas mediante un innerHTML
flagsDiv.innerHTML = `<div class="flags">
<nav class="flecha-container">
    <svg class="flecha-izquierda" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L4 8L10 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
    <div class="banderas">
        <ul>
            <li>
                    <a href="">
                        <svg viewBox="0 0 82 66" style="height: 28.9756px; width: 36px;">
                            <image height="3168" class="ingles" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                        </svg>
                        <span>Inglés</span>
                    </a>
                </li>
            <li>
                <a class="frances" href="">
                    <svg viewBox="0 132 82 66" data-test="flag-fr" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="frances" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Francés</span>
                </a>
            </li>
            <li>
                <a class="aleman" href="">
                    <svg viewBox="0 198 82 66" data-test="flag-de" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="aleman" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Alemán</span>
                </a>
            </li>
            <li>
                <a class="italiano" href="">
                    <svg viewBox="0 330 82 66" data-test="flag-it" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="italiano" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Italiano</span>
                </a>
            </li>
            <li>
                <a class="portugues" href="/course/pt/es/Aprender-portugu%C3%A9s">
                    <svg viewBox="0 594 82 66" data-test="flag-pt" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="portugues" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Portugués</span>
                </a>
            </li>
            <li>
                <a class="catalan" href="/course/ca/es/Aprender-catal%C3%A1n">
                    <svg viewBox="0 2244 82 66" data-test="flag-ca" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="catalan" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Catalán</span>
                </a>
            </li>
            <li>
                <a class="ruso" href="/course/ru/es/Aprender-ruso">
                    <svg viewBox="0 528 82 66" data-test="flag-ru" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="ruso" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Ruso</span>
                </a>
            </li>
            <li>
                <a class="sueco" href="/course/sv/es/Aprender-sueco">
                    <svg viewBox="0 792 82 66" data-test="flag-sv" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
                        <image height="3168" class="sueco" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                    </svg>
                    <span class="w9lql">Sueco</span>
                </a>
            </li>
        </ul>
    </div>
    <svg class="flecha-derecha" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L16 8L10 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
</nav>
</div>
`;






// Las sections de los SVG con texto
const despuesHeader = document.createElement("div");
despuesHeader.className = "sections";

despuesHeader.innerHTML =
    `<section class="left">
<div class="text-sections">
    <h2 class="title-section">divertido, efectivo y gratis</h2>
    <p class="contenidoSeccion">Aprender con Duolingo es divertido y <a text-decoration="none"; class="textAzul" href="https://es.duolingo.com/efficacy">los estudios demuestran que funciona.</a> ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!</p>
</div>
<div class="img-sections">
    <img src="images/section1.svg" width="530px" height="530px" alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">respaldado por la ciencia</h2>
    <p class="contenidoSeccion">Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.</p>
</div>
<div class="img-sections">
    <img src="images/section2.svg" width="530px" height="530px" alt="">
</div>
</section>

<section class="left">
<div class="text-sections">
    <h2 class="title-section">mantén tu motivación</h2>
    <p class="contenidoSeccion">Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.</p>
</div>
<div class="img-sections">
    <img src="images/section3.svg" width="530px" height="530px"alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">aprendizaje personalizado</h2>
    <p class="contenidoSeccion">Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.</p>
</div>
<div class="img-sections">
    <img src="images/section4.svg" width="530px" height="530px" alt="">
</div>
</section>`;

document.body.appendChild(despuesHeader);

const scrolleableMontado = document.createElement("div");
scrolleableMontado.className = "scrolleable"; // Cambiando la clase a "scrolleable"

scrolleableMontado.style.backgroundColor = "#E1F5FF";

scrolleableMontado.innerHTML = `
<div class="scrolleable" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 988px; height: 530px; margin: 0 auto; background-image: url('scrolleable/background.svg'), url('scrolleable/prueba1.svg');">
  <h1 style="width: 583px; height: 240px; display: flex; align-items: center; justify-content: center; text-align: center;">aprende cuando quieras y donde quieras</h1>
  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <button id="oneBoton" type="button" style="width: 180px; height: 62px; position: relative;">
      <i class="fa fa-apple" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 34px; color: var(--color-botones-enemigos);"></i>
      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: var(--color-botones-enemigos)">Descárgalo en<br/>App Store</span>
    </button> 
    <button id="twoBoton" href="//play.google.com/store/apps/details?hl=es&amp;id=com.duolingo&amp;referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash" tabindex="0" style="width: 180px; height: 62px; position: relative;">
      <i class="fab fa-google-play" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 34px; color: var(--color-botones-enemigos);"></i>
      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: var(--color-botones-enemigos);">Disponible en<br/>Google Play</span>
    </button>
  </div>
  
  <!-- Contenedor del video -->
  <div id="videoContainer" style="display: flex; justify-content: center; align-items: center; height: 50vh; max-width: 40%;">
    <video id="videoElement" src="scrolleable/scroll.mp4" muted autoplay loop style="max-width: 100%;"></video>
  </div>
</div>
`;

document.body.appendChild(scrolleableMontado);

// Función para reproducir el video cuando se hace scroll
function playVideoOnScroll() {
    const videoContainer = document.getElementById("videoContainer");
    const videoElement = document.getElementById("videoElement");

    const windowHeight = window.innerHeight;
    const videoTop = videoContainer.getBoundingClientRect().top;

    if (videoTop < windowHeight && videoTop > -videoContainer.offsetHeight) {
        // Reproducir el video si está dentro del viewport
        videoElement.play().catch(function(error) {
            // Manejar cualquier error de reproducción
            console.error("Error al reproducir el video:", error);
        });
    } else {
        // Pausar el video si está fuera del viewport
        videoElement.pause();
    }
}

// Agregamos el controlador de eventos al hacer scroll
window.addEventListener("scroll", playVideoOnScroll);

// Reproducir el video automáticamente al cargar la página
playVideoOnScroll();




// Crear el contenedor principal del super Duolingo
const superDuo = document.createElement("div");
superDuo.className = "super";
superDuo.style.cssText = "display: flex; align-items: center; justify-content: center; gap: 48px; max-width: 100%; width: 100%; height: 900px;";

// Crear el elemento de video
const video = document.createElement("video");
video.controls = false; // Desactivar controles para que no sean visibles
video.setAttribute("width", "50%");
const sourceVideo = document.createElement("source");
sourceVideo.setAttribute("src", "images/superduper.mp4");
sourceVideo.setAttribute("type", "video/mp4");
video.appendChild(sourceVideo);

// Configurar evento para reproducir el video cuando se haya interactuado con la página
document.addEventListener("DOMContentLoaded", function(event) {
    video.play();
});

superDuo.appendChild(video);

// Crear el contenedor para la imagen y el botón
const contentContainer = document.createElement("div");
contentContainer.style.cssText = "display: flex; flex-direction: column; align-items: center;";

// Crear la imagen
const imgElement = document.createElement("img");
imgElement.setAttribute("alt", "Súper Duolingo");
imgElement.setAttribute("class", "videoSuper");
imgElement.setAttribute("height", "55");
imgElement.setAttribute("src", "https://d35aaqx5ub95lt.cloudfront.net/images/splash/dd7453522d3192d4df06d4652508b8bc.svg");
imgElement.setAttribute("width", "339");
contentContainer.appendChild(imgElement);

// Crear el botón
const button = document.createElement("button");
button.className = "animate";
const buttonText = document.createElement("span");
buttonText.className = "textoButtons";
buttonText.textContent = "PRUEBA 2 SEMANAS GRATIS";
button.appendChild(buttonText);
contentContainer.appendChild(button);

// Agregar el contenedor de imagen y botón al contenedor principal
superDuo.appendChild(contentContainer);

// Agregar el contenedor principal al body del documento
document.body.appendChild(superDuo);


const ultimasSections = document.createElement("div");
ultimasSections.className = "sections";

ultimasSections.innerHTML = `<section class="left">
<div class="text-sections">
    <h2 class="title-section">duolingo english test</h2>
    <p class="contenidoSeccion">Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.</p>
    <button class="button-section">CERTIFICA TU INGLÉS</button>
</div>
<div class="img-sections">
    <img src="images/section5.svg" width="530px" height="530px" alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">duolingo for schools</h2>
    <p class="contenidoSeccion">Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.
    </p>
    <button class="button-section">POTENCIA TU SALÓN DE CLASES</button>
</div>
<div class="img-sections">
    <img src="images/section6.svg"  width="530px" height="530px"alt="">
</div>
</section>

<section class="left">
<div class="text-sections">
    <h2 class="title-section">duolingo abc</h2>
    <p class="contenidoSeccion">¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!
    </p>
    <button class="button-section">CONOCE DUOLINGO ABC</button>
</div>
<div class="img-sections">
    <img src="images/section7.svg" width="530px" height="530px" alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">duolingo math</h2>
    <p class="contenidoSeccion">¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.</p>
    <button class="button-section">MEJORA EN MATEMÁTICA</button>
</div>
<div class="img-sections">
    <img src="images/section8.svg" width="530px" height="530px" alt="">
</div>
</section>
`;

document.body.appendChild(ultimasSections);

// Crear el contenedor antes del footer
const antesFooter = document.createElement("div");
antesFooter.className = "before-footer";

// Crear el elemento <h1>
const h1Element = document.createElement("h1");
h1Element.textContent = "aprende idiomas con duolingo";
h1Element.style.textAlign = "center"; // Alinear el texto al centro

// Crear el botón
const buttonElement = document.createElement("button");
buttonElement.textContent = "EMPIEZA AHORA";
buttonElement.style.width = "330px";
buttonElement.style.height = "50px";
buttonElement.style.display = "block"; // Hacer que el botón sea un bloque para centrarlo
buttonElement.style.cursor = "pointer";
buttonElement.style.fontFamily = "var(--otra-fuente)";
buttonElement.style.fontWeight = "bold";
buttonElement.style.letterSpacing = "1px";

// Agregar el h1 y luego el botón al contenedor antes del footer
antesFooter.appendChild(h1Element);
antesFooter.appendChild(buttonElement);

// Estilos CSS para centrar el contenedor
antesFooter.style.display = "flex";
antesFooter.style.flexDirection = "column"; // Apilar elementos verticalmente
antesFooter.style.justifyContent = "center";
antesFooter.style.alignItems = "center";
antesFooter.style.marginBottom = "-280px"; // Ajustar según sea necesario

//antesFooter.style.height = "100vh"; // Ajustar la altura si es necesario

// Agregar el contenedor antes del footer al documento
document.body.appendChild(antesFooter);

const pocoAntesFooter = document.createElement("div");

var imagFoot = document.createElement("img");
imagFoot.src = "images/animacionFooter.svg";


pocoAntesFooter.style.paddingTop = "5px"; // Ajustar según sea necesario

pocoAntesFooter.appendChild(imagFoot);

document.body.appendChild(pocoAntesFooter);

// Se viene el footer
// Inicio del footer

// Crear el contenedor footer
const footer = document.createElement("footer");
footer.className = "footer";

footer.innerHTML = ` <ul>
<h3>Sobre nosotros</h3>
<li>Cursos</li>
<li>Misión</li>
<li>Método de enseñanza</li>
<li>Eficacia</li>
<li>Equipo</li>
<li>Investigación</li>
<li>Empleo</li>
<li>Guía para uso de marca</li>
<li>Tienda</li>
<li>Prensa</li>
<li>Inversionistas</li>
<li>Contáctanos</li>
</ul>
<ul>
<h3>Productos</h3>
<li>Duolingo</li>
<li>Duolingo for Schools</li>
<li>Duolingo English Test</li>
<li>Podcast</li>
<li>Duolingo for Business</li>
<li>Súper Duolingo</li>
<li>Regala Súper Duolingo</li>
</ul>
<ul>
<h3>Aplicaciones</h3>
<li>Duolingo para Android</li>
<li>Duolingo para iOS</li>
</ul>
<ul>
<h3>Ayuda y soporte</h3>
<li>App de Duolingo</li>
<li>Schools</li>
<li>Duolingo English Test</li>
<li>Estado</li>
</ul>
<ul>
<h3>Términos y privacidad</h3>
<li>Normas de la comunidad</li>
<li>Términos</li>
<li>Privacidad</li>
<h3>Social</h3>
<li>Blog</li>
<li>Instagram</li>
<li>Facebook</li>
<li>Twitter</li>
<li>YouTube</li>
</ul>`;

document.body.appendChild(footer);

const ultimoDiv = document.createElement("div");
ultimoDiv.className = "last-one";

ultimoDiv.innerHTML = `
<h2>Idioma de la página</h2>
<ul>
<li><a tabindex="0">العربية</a></li>
<li><a tabindex="0">বাংলা</a></li>
<li><a tabindex="0">Čeština</a></li>
<li><a tabindex="0">Deutsch</a></li>
<li><a tabindex="0">Ελληνικά</a></li>
<li><a tabindex="0">English</a></li>
<li><a tabindex="0">Español</a></li>
<li><a tabindex="0">Français</a></li>
<li><a tabindex="0">हिंदी</a></li>
<li><a tabindex="0">Magyar</a></li>
<li><a tabindex="0">Bahasa Indonesia</a></li>
<li><a tabindex="0">Italiano</a></li>
<li><a tabindex="0">日本語</a></li>
<li><a tabindex="0">한국어</a></li>
<li><a tabindex="0">Nederlands</a></li>
<li><a tabindex="0">Polski</a></li>
<li><a tabindex="0">Português</a></li>
<li><a tabindex="0">Română</a></li>
<li><a tabindex="0">Русский</a></li>
<li><a tabindex="0">తెలుగు</a></li>
<li><a tabindex="0">ภาษาไทย</a></li>
<li><a tabindex="0">Tagalog</a></li>
<li><a tabindex="0">Türkçe</a></li>
<li><a tabindex="0">Українською</a></li>
<li><a tabindex="0">Tiếng Việt</a></li>
<li><a tabindex="0">中文</a></li></ul>`;

document.body.appendChild(ultimoDiv);