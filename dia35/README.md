# Apuntes dia 35

## Uso de forEach y Map
La diferencia entre uno y otro es que el forEach no retorna nada mientras que el map retorna un nuevo array con los resultados de la funcion que se le pase.

```js
const numeros = [1,2,3,4,5];
const cuadrados = [];

numeros.forEach((numero)=>{
    cuadrados.push(numero*numero);
})
console.log(cuadrados);

cuadrados = numeros.map(numero => numero*numero);
console.log(cuadrados);
```

## Metodos de búsquedas en array
Los metodos de busqueda se podrian conciderar un método map modificado que devuelve tanto elementos como booleanos.

- find: devuelve el primer elemento que cumpla con determinada condición.
- some: devuelve un verdadero o falso si al menos un elemento del array cumple con condicion a evaluar.
- every: devuelve un verdadero o falso  si todos los elementos del array cumplen con una condicion.
- filter: devuelve todos los elementos que cumplan con una condicion.
- 

```js
const coches = ['Peugeot','BMW','VW','Tesla','Ford','BYD'];

const coche = coches.find(coche => coche === 'BMW');
console.log(coche); // BMW

const tieneTesla = coches.some(coche => coche === 'Tesla');
console.log(tieneTesla);//true

const todoEmpiezaconB = coches.every(coche => coche[0] === 'B' );
console.log(todoEmpiezaconB);//false

const cochesConB = coches.filter(coche => coche[0] === 'B');
console.log(cochesConB);// ['BMW', 'BYD']

const cochesconT = coches.filter(coche => coche.includes('T'));
console.log(cochesconT);// ['Tesla']

const cochesconTyt = coches.filter(coche => coche.toUpperCase().includes('T'));
console.log(cochesconTyt);//['Peugeot', 'Tesla']

const  cochesDeTresLetras = coches.filter(coche => coche.length == 3);
console.log(cochesDeTresLetras);// ['BMW', 'BYD']


```