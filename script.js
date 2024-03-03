// Crear el div content
const contentDiv = document.createElement("div");
contentDiv.className = "content";

// Crear el div flags
const flagsDiv = document.createElement("div");
flagsDiv.id = "flags";

// Crear el div myContainer
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
scrolleableMontado.className = "scroll";

scrolleableMontado.innerHTML = `
<div class="scrolleable" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 988px; height: 530px; margin: 0 auto;">
  <h1 style="width: 583px; height: 240px; display: flex; align-items: center; justify-content: center; text-align: center;">aprende cuando quieras y donde quieras</h1>
  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <button id="oneBoton" type="button" style="width: 180px; height: 62px; position: relative;">
      <i class="fa fa-apple" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 34px; color: var(--color-gris);"></i>
      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">Descárgalo en<br/>App Store</span>
    </button>
    <button id="twoBoton" href="//play.google.com/store/apps/details?hl=es&amp;id=com.duolingo&amp;referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash" tabindex="0" style="width: 180px; height: 62px; position: relative;">
      <i class="fab fa-google-play" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 34px; color: var(--color-gris);"></i>
      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">Disponible en<br/>Google Play</span>
    </button>
  </div>
</div>
`;

document.body.appendChild(scrolleableMontado);

const scrolleableReal = document.createElement("div");
scrolleableReal.id = "animationContainer";
document.body.appendChild(scrolleableReal);

// Creamos el contenedor de la animación
const animationContainer = document.getElementById("animationContainer");
animationContainer.style.position = "relative"; // Añadimos posición relativa para poder posicionar el GIF dentro

// Establecer la ruta del GIF
const gifSrc = "images/duolingo.gif";

// Crear el elemento de imagen GIF
const gifImage = document.createElement("img");
gifImage.src = gifSrc;
gifImage.style.position = "absolute"; // Añadimos posición absoluta para poder ajustar la posición del GIF
gifImage.style.top = "0"; // Alineamos el GIF al principio del contenedor
gifImage.style.left = "0"; // Alineamos el GIF a la izquierda del contenedor
animationContainer.appendChild(gifImage);

// Función para obtener la posición actual del scroll en relación con el documento completo
function getScrollPercentage() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const scrollBottom = scrollTop + windowHeight;
  const scrollPercentage = (scrollBottom / documentHeight) * 100;
  return scrollPercentage;
}

// Función para sincronizar la posición del GIF con la posición del scroll
function syncGifPosition() {
  const scrollPercentage = getScrollPercentage();
  const gifDuration = 5000; // Duración del GIF en milisegundos
  const gifPosition = (scrollPercentage / 100) * gifDuration;
  gifImage.style.objectPosition = `0px -${gifPosition}px`;
}

// Función para manejar el evento de desplazamiento
function handleScroll() {
  syncGifPosition();
}

// Agregar el controlador de eventos al desplazarse
window.addEventListener("scroll", handleScroll);

// Sincronizar la posición del GIF cuando se cargue la página
window.addEventListener("load", syncGifPosition);


// Crear el contenedor principal
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
buttonText.textContent = "Prueba 2 semanas gratis";
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

