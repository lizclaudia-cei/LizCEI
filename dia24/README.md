# Apuntes día 24

## JS continuación

## Mas tipos de datos.
- undefined: es un valor que se asigna a una variable pero que no tiene valor.
- Null : valor que se asigna a una variable que no tiene valor.
- NaN(Not a Number): valor que se asigna cuando se esperaba un número pero lo que se recibió no es un número.
- Empty: String tiene un valor de '' o ""
- función: 
- fecha:

```js
let noDefinido = undefined;
let nulo = null;
let noEsUnNumero = NaN;
let vacio = "";
const moverLaCola = function (){}
const hoy = new Date();
```

Para ver que tipo de datos es una variable podemos usar el operador `typeof`

```js
console.log(typeof noDefinido);//undefined
console.log(typeof vacio);//String
console.log(typeof hoy);//Object
console.log(typeof moverLaCola)//function
```
## Consola 
 Permite depurar el codigo
 ```js
 
 console.log("Este es un mensaje informativo");
 console.error("Este es un mensaje de error");
 console.warn("Esto es una advertencia");
 console.info("Este es un mensaje de informacion");
 console.debug("Mensaje de depuración");
 //Tabla de datos
 console.table(["Manzana","Banana","Cereza"]);

 ```

 ## Operadores aritméticos
  Se utilizan para realizar operaciones matemáticas en JS.

  - Suma(+): Suma dos valores
  - Resta(-): Resta dos valores
  - Multiplicación(*): Multiplica 2 valores
  - División (/): Divide 2 valores
  - Módulo (%):Devulve el resto de la división de enteros de  dos valores.Para saber si un elemento es par o impar.
  - Incremento (++): Aumenta en uno el valor.
  - Decremento(--): Decrementa en uno el valor.

```js
let a = 10;
let b= 5;
let suma = a+b; // 15
let resta = a-b; // 5
let multiplicar = a*b; // 50
let division = a/b; // 2
let modulo = a%b; // 0
let incremento = a++ ;// 11
let decremento = b--;//4


```
