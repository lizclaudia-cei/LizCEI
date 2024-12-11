# Apunte de día 34
Formularios 

Estructura de JS
- Comentarios y documentacion
- Constantes y variables
- Funciones utilitarias
- Funciones principales de nuestra web
- EventListeneres
- Iniciar nuestro programa

## Metodos del array
- unshif: nos permite añadir un nuevo valor al inicio del array y devuelve el largo del elemento.
- push: nos permite añadir un nuevo elemento al final del array y devuelve el nuevo lenght de la lista
- pop: elimina el ultimo elemento del array y devuelve dicho elemento.
- shift: Elimina el primer elemento del array y devuelve  dicho elemento.
- splice: Tine tres parametros y devuelve elementos eliminados
       - indice donde se va a posicionar
       - cantidad de elementos a eliminar
       - elementos a agregar
- indexOf: nos permite saber el indice de un elemento


```js
const frutas = ['manzanas', 'platanos','pera'];
let nuevaLongitud = frutas.push('limon','uva');
console.log(nuevaLongitud); // 5

let elementoElimiando = frutas.pop();
console.log(elementoEliminado); // uva

let elementoDeleted = frutas.shift();
console.log(elementoDeleted); // manzanas
console.log(frutas)// platanos, pera, limon;

 nuevLongitud = frutas.unshift('naranja','sandia');
 console.log(nuevaLongitud)// 5
 console.log(frutas)// naranja,sandia,platanos,pera,limon

const elementosQuitados = frutas.splice(2,1,'kiwi','arandano');
console.log(elementosQuitados)//['platanos']
console.log(frutas)//naranja,sandia,kiwi,arandano,pera,limon


frutas.splice(0,1);// quitando el primer elemento
frutas.splice(-1,1);// quitando el ultimo elemento
frutas.splice(2,2);// quita dos elementos a partir del indice 2
frutas.splice(-1,0,"Mandarina","Papaya");// agrega al ultimo lugar los elementos sin eliminar nada


```