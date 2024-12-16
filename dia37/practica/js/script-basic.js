
// -----------------------------------
// Variables
//-------------------------------------
const sliderImages = document.querySelector('.Slider-images');
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;


//-------------------------------------
// Funciones
//-----------------------------------------

btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);
/**
 * Función para que al hacer clic en el boton next te pase a la siguiente imagen
 */
function nextImage() {
    // se incrementa el indice
    currentImageIndex++;
    // realiza una comparación para saber si el indice actual es mayor o igual a el largo de las imagenes 
    if (currentImageIndex >= images.length) {
        // si se cumple la condicion entonces se iguala a 0
        currentImageIndex = 0;
    }
    // se llama a las funcionees actualizar Slider y actualizar el contador
    actualizarSlider();
    actualizarContador();
}
/**
 * Función para ir a la imagen anterior 
 */
function prevImage() {
    // Se disminuye el indice
    currentImageIndex--;
    // realiza una comparación para saber si el indice es menor a cero
    if (currentImageIndex < 0) {
        // si se cumple la condición se iguala a el largo de imagenes -1
        currentImageIndex = images.length - 1;
    }
    // se llama a las funciones actualizar slider y actualizar contador
    actualizarSlider();
    actualizarContador();
}
/**
 * Función para actualizar el slider
 */
function actualizarSlider() {
    // se declara variable para indicar un acnho de imagen
    const width = 400;
    // Se accede a la propiedad transform de la clase slider-Image para actualizar el translateX 
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}
/**
 * Función para actualizar el contador
 */
function actualizarContador() {
    // actualiza el span con id actual para que tenga el el numero de la imagen actual (este sera el indice de la imagen +1)
    spanActual.textContent = currentImageIndex + 1;
}

/**
 * Función para agregar intervalo
 */
function agregarIntervalo() {
    // la varible intervalo hara que se inice el intervalo de cambiar de imagenes por segundo.
    intervalos = setInterval(nextImage, 1000);
}



//----------------------------------------------
//Iniciar mi app y eventos
//---------------------------------------------

// Actualiza el span con id total para que sea igual al total de imagenes
spanTotal.textContent = totalImages;
// invoca a la función actualizar contador
actualizarContador();



//---------------------------------
// Funcionalidad de  Intervalo
//-------------------------------------

// Agrega el evento mouseover  a el slider image
sliderImages.addEventListener('mouseover', () => {
    // frena el intervalo cuando el mouse este sobre el slider
    clearInterval(intervalos);
});
// Agrega el evento mouseout a el slider 
sliderImages.addEventListener('mouseout', () => {
    // agrega el intervalo cuando el mouse esta fuera del slider
    agregarIntervalo();
});

// invoca a la función agregar intervalo
agregarIntervalo();




