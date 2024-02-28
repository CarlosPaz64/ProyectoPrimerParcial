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


const container = document.getElementById("myContainer");
container.innerHTML = `<div class="container">
<img src="images/man.gif" />
<div class="text-buttons">
    <h1>¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
    <button id="botonUno" type="button">Iniciar sesión</button>
    <button id="botonDos" type="button">Hola</button>
</div>
</div>`;

const flags = document.getElementById("flags");
flags.innerHTML=`<div class="flags">
<nav class="flecha-container">
    <svg class="flecha-izquierda" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L4 8L10 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
    <div class="banderas">
        <ul style="transform: translateX(0px);">
        <li>
            <a href="ingles" class="">
                <svg viewBox="0 0 82 66" style="height: 28.9756px; width: 36px;">
                    <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                </svg>
                <span style="text-decoration: none;">English</span>
            </a>
        </li>
        <li>
        <a class="TNj94" href="/course/fr/es/Aprender-franc%C3%A9s">
        <svg viewBox="0 132 82 66" data-test="flag-fr" class="_1v6Jc" style="height: 28.9756px; width: 36px;">
        <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg">
        </image>
        </svg>
        <span class="w9lql">Francés</span>
        </a>
        </li>
        <li>
        <a class="TNj94" href="/course/de/es/Aprender-alem%C3%A1n"><svg viewBox="0 198 82 66" data-test="flag-de" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Alemán</span></a>
        </li>
        <li>
        <a class="TNj94" href="/course/it/es/Aprender-italiano"><svg viewBox="0 330 82 66" data-test="flag-it" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Italiano</span></a>
        </li>
        <li>
        <a class="TNj94" href="/course/pt/es/Aprender-portugu%C3%A9s"><svg viewBox="0 594 82 66" data-test="flag-pt" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Portugués</span></a>
        </li>
        <li>
        <a class="TNj94" href="/course/ca/es/Aprender-catal%C3%A1n"><svg viewBox="0 2244 82 66" data-test="flag-ca" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Catalán</span></a>
        </li>
        <li>
        <a class="TNj94" href="/course/ru/es/Aprender-ruso"><svg viewBox="0 528 82 66" data-test="flag-ru" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Ruso</span></a>
        </li>
        <li>
        <a class="TNj94" href="/course/sv/es/Aprender-sueco"><svg viewBox="0 792 82 66" data-test="flag-sv" class="_1v6Jc" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span class="w9lql">Sueco</span></a>
        </li>
    </ul>
    </div>
    <svg class="flecha-derecha" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L16 8L10 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
</nav>
</div>`;



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