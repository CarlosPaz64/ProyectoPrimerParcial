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
contentDiv.appendChild(encabezadoSticky);

containerDiv.innerHTML = `<div class="container">
<img src="images/principal.gif" />
<div class="text-buttons">
    <h1>¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
    <button id="botonUno" type="button">Iniciar sesión</button>
    <button id="botonDos" type="button">Hola</button>
</div>
</div>`;

flagsDiv.innerHTML=`<div class="flags">
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
    <p>Aprender con Duolingo es divertido y <a class="textAzul" href="https://es.duolingo.com/efficacy">los estudios demuestran que funciona.</a> ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!</p>
</div>
<div class="img-sections">
    <img src="images/man.gif" alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">respaldado por la ciencia</h2>
    <p>Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.</p>
</div>
<div class="img-sections">
    <img src="images/man.gif" alt="">
</div>
</section>

<section class="left">
<div class="text-sections">
    <h2 class="title-section">mantén tu motivación</h2>
    <p>Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.</p>
</div>
<div class="img-sections">
    <img src="images/man.gif" alt="">
</div>
</section>

<section class="right">
<div class="text-sections">
    <h2 class="title-section">aprendizaje personalizado</h2>
    <p class="normalSecciones">Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.</p>
</div>
<div class="img-sections">
    <img src="images/man.gif" alt="">
</div>
</section>`;

document.body.appendChild(despuesHeader);


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
