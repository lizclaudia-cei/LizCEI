
// -----------------------------------
// Variables
//-------------------------------------
const sliderImages = document.querySelector('.Slider-images');
// const images = document.querySelectorAll('.Slider-img');
const images = []; // lista de elementos html con imagenes adentro
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
let totalImages = images.length;
let arrayImages = [];
// const arrayImages = [
//     {
//         id: 1,
//         file: 'imgs/imagen1.jpg',
//         description: 'Imagen 1',

//     },
//     {
//         id: 2,
//         file: "imgs/imagen2.jpg",
//         description: "Imagen 2"

//     },
//     {
//         id: 3,
//         file: "imgs/imagen3.jpg",
//         description: "Imagen 3"

//     },
//     {
//         id: 4,
//         file: "imgs/imagen1.jpg",
//         description: "Imagen 1"

//     },
//     {
//         id: 5,
//         file: "imgs/imagen2.jpg",
//         description: "Imagen 2"

//     },
//     {
//         id: 6,
//         file: "imgs/imagen4-long.jpg",
//         description: "Imagen 3"

//     },
//     {
//         id: 7,
//         file: "imgs/imagen3.jpg",
//         img: "Imagen 3"
//     }
// ]

// Lista de imagenes en JSON (string)

// const lista_imagenes_json = `[
//     {
    
//         "file": "imgs/imagen1.jpg",
//         "description": "Imagen 1"

//     },
//     {
     
//         "file": "imgs/imagen2.jpg",
//         "description": "Imagen 2"

//     },
//     {
   
//         "file": "imgs/imagen3.jpg",
//         "description": "Imagen 3"

//     },
//     {
      
//         "file": "imgs/imagen1.jpg",
//         "description": "Imagen 1"

//     },
//     {
     
//         "file": "imgs/imagen2.jpg",
//         "description": "Imagen 2"

//     },
//     {
      
//         "file": "imgs/imagen4-long.jpg",
//         "description": "Imagen 3"

//     },
//     {
      
//         "file": "imgs/imagen3.jpg",
//         "img": "Imagen 3"
//     }
// ]`;
// // convertir de JSON a Objeto JS
// const arrayImages = JSON.parse(lista_imagenes_json);
// // convertir de JS a JSON
// const stringJson = JSON.stringify(arrayImages);
// console.log(stringJson);


// Lista de imagenes obtendia desde una API con promesas/fetch
function traerImagenesAPI(){
    // fetch('https://phptps.google.com/misFotos')
    fetch('./basededatos.json')
    .then( response => response.json())// JSON.parse()
    .then(data => {
        arrayImages = data;
        addImages();
    } )
    
}



//-------------------------------------
// Funciones
//-----------------------------------------

btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);

/**
 * Funcion para agregar el arreglo de imagenes
 */
function addImages() {
    arrayImages.map((image) => {
        // metodo inseguro   sliderImages.innerHTML += `<img class="Slider-img" src="${image.file}" alt="${image.description}">`
        // metodo seguro y de mayor control
        const img = document.createElement('img'); // crea etiqueta img
        img.classList.add("Slider-img");// agrega clase a la etiqueta
        img.src = `${image.file}`; // agrega el src
        img.alt = image.description; // agrega el alt
        sliderImages.appendChild(img);// agrega la etiqueta img al sliderImages

        images.push(img); // agregar la etiqueta img a la lista images

        // img.textContent = 'el texto que quiera dentro de la etiqueta'
        // img.setAttribute('edad',38); // <img edad=38 />
        // img.addEventListener('click',()=>console.log('click en la imagen')) // agrega un vento 
    }
    );

    // images = document.querySelectorAll('.Slider-img');
    totalImages = images.length;
    // Actualiza el span con id total para que sea igual al total de imagenes
    spanTotal.textContent = totalImages;
    // invoca a la función actualizar contador
    actualizarContador();

}

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

traerImagenesAPI()
// addImages();




//---------------------------------
// Funcionalidad de  Intervalo
//-------------------------------------

// Agrega el evento mouseover  a el slider image
sliderImages.addEventListener('mouseover', () => {
    // frena el intervalo cuando el mouse este sobre el slider
    // Elimina el timer
    clearInterval(intervalos);
});
// Agrega el evento mouseout a el slider 
sliderImages.addEventListener('mouseout', () => {
    // agrega el intervalo cuando el mouse esta fuera del slider
    agregarIntervalo();
});

// invoca a la función agregar intervalo
agregarIntervalo();




