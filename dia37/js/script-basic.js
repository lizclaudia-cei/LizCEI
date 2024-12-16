

const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');
const btnNext = document.querySelector('.btnNext');
const btnPrev = document.querySelector('.btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    actualizarSlider();
    actualizarContador();
}
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    actualizarSlider();
    actualizarContador();
}
function actualizarSlider() {
    const width = 400;
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}
function actualizarContador() {
    spanActual.textContent = currentImageIndex + 1;
}

spanTotal.textContent = totalImages;
actualizarContador();
agregarIntervalo();

sliderImages.addEventListener('mouseover', () => {
    clearInterval(intervalos);
});
sliderImages.addEventListener('mouseout', () => {
    agregarIntervalo();
});
function agregarIntervalo() {
    intervalos = setInterval(nextImage, 1000);
}

