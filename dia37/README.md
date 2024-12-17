## Apuntes dia 37
Sliders
Estilos para botones https://neumorphism.io/

## Creacion de etiquetas html con js
 El uso de innerhtml es rapido y sencillo  y es util para grandes bloques de contenido.

 ```js
 let div = document.getElementById('#container');
 div.innerHTML= `<style> body {backgound-color:red}</style> <h1>Título</h1>`

 ```

Alternativamente  podemos crear elementos HTML de forma programática.
Desventajas:
- Requiere mas pasos para construir el html
 Ventajas
 - Ofrece control total sonre los elementos
 - Es mas seguro (ya que podemos usar textContent en vez de innerHTML)
 - Permite agregar eventos a cada elemento individual

```js
let fragmento = document.createDocumentFragment();// etiqueta invisible
let div = document.createElement('div');// creamos un div
div.classList.add('clase1','clase2');// agregamos una clase o mas <div class="clase1 clase2"></div>
div.id="idCaja";
div.textContent= "<h1>Título</h1>"// los h1 se muestran como TEXTO
div.setAtribute('data-color',"red");// <div id="idCaja" class="clase1 clase2" data-color="red"> '<h1>Titulo</h1>' </div>
div.addEventListener("click",()=> {console.log("click en el div")});
fragmento.appendChild(div);// lo metemos en el fragmento

document.body.appendChild(fragmento);// agrega nuevo fragmento al final del body

document.body.insertBefore(fragmento,document.body.firstChild);// al pirncipio del body.

```

Cada que se utiliza el fragmento se destruye 

```js
const img = document.createElement('img'); // crea etiqueta img
        img.classList.add("Slider-img");// agrega clase a la etiqueta
        img.src = `${image.file}`; // agrega el src
        img.alt = image.description; // agrega el alt
        sliderImages.appendChild(img);// agrega la etiqueta img al sliderImages

        // img.textContent = 'el texto que quiera dentro de la etiqueta'
        // img.setAttribute('edad',38); // <img edad=38 />
        // img.addEventListener('click',()=>console.log('click en la imagen')) // agrega un vento 
```