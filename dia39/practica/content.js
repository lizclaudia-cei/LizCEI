const box = document.getElementById('box');

function bringImges(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(images =>{
        console.log(images);
        images = images.slice(0,5);
        console.log(images);
        images.map(image =>{
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src = image.url;
            img.alt = image.title;
            div.classList.add('Boxes-box');
            div.appendChild(img);
            box.appendChild(div);
        });
    })
    .catch(error => {
        console.log(error)
        let div = document.createElement('div');
        div.textContent = `Ocurrio un error al cargar los elementos, ${error}`;
        div.classList.add('u-danger');
        box.appendChild(div);
    });
}
bringImges();