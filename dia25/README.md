# Apuntes dia 25
Scope: Alcance de variables. En js las variables tienen 3 diferentes alcances.
- Global: Son aquellas que son accesibles desde cualquier parte del codigo.Si se declara en la raíz del código esta puede ser utilizada en todas las subfunciones.Estas pueden saltar incluso de un script a otro en etiquetas html.

```js
let nombre = "Luis"
function saludar(){
    console.log("Hola " + nombre);
}
saludar();
```

- Alcance Local: Son variables definidas dentro de funciones o pequeños fragmentos de código.Por lo que solo podra ser llamada denro de ese fragmento de lo contrario no funcionara.

```js
function saludar(){
    let nombre = "Luis";
    console.log("Hola ", nombre);
}

console.log(nombre);//Error nombre no esta definido.
saludar();// Imprime Hola Luis
```

- Bloque: las variables con `let` o `const`  dentro de un bloque(`{}`) solo son accesibles dentro de ese bloque. Algunos de ejemplos de bloque son: `if` o `for`.

```js
if(true){
let nombre = "Juan";
console.log("Hola ", nombre);// Hola Juan
}
console.log("Hola ", nombre);// Error nombre no esta definido
```
## Hoisting
En js cuando definimos una variable con var estas se mueven al incio del script.Lo que puede provocar cosas inesperadas.

Al usarl `let` o `const` estas variables no se elevaran al inicio del script lo que ayuda a evitar errores.


## Operadores de comparación

Comparación del lado derecho con el izquierdo para obtener un valor boolean.
- Igual (==): Compara si dos valores son iguales.
- Estrictamente igual (===): Compara si los dos valores son iguales y del mismo tipo.
- Distinto (!=): Compara si dos valores son distintos.
- Estrictamente distinto (!===)
- Mayor que (>) : Compara si un valor es mayor que otro
- Menor que (<): Compara si un valor es menor que otro
- Mayor o igual que(>=): Compara si un valor es mayor o igual que otro
- Menor o igual que(<=): Compara si un valor es menor o igual que otro.

```js
let numero = 10;
let esPar = if(numero%2 == 0) ; //true
let esImpar = if(numero%2 == 1 ); //false

let num1 = "5";
let num2 = 5;
let sonIguales = if(num1 == num2)//true
    sonIguales = if(num1 === num2)// false

```
## Truthy/Falsy

Las variables en JS pueden tener un valor de truthy o falsy. Un valor truthy es aquel que se evalua como verdadero en un contexto de booleanos mientras que el falsy se evalua como falso.

Podemos usar esta propiedad para la toma de decisiones en nuestro código.


Cualquier numero positivo o negativo  devuelve un valor truthy y el 0 devuelve un falsy. Un arreglo vacio y un objeto vacio me devuelven un truthy.


Valores falsy

 - undefined
 - null
 - NaN
 - 0
 - "" (Cadena vacia)
 - false


```js
let edad = 18;
if(edad >= 18){
    // se ejecuta si el valor es truthy
    console.log("Eres mayor de edad");
}else{
    // se ejecuta si el valor es falasy
    console.log("Eres menor de edad");
}

let numero = 16;
if(numero%2 == 0){
    console.log("El número ", numero ,"es un número par");
}else{
     console.log("El número ", numero ,"es un número impar");
}

//16%2 =0 y 0 es falsy
if(numero%2){
    console.log("El número ", numero ,"es un número impar");
}else{
     console.log("El número ", numero ,"es un número par");
}

if(false){
    // esto no de ejecuta
}esle{
    // esto si se ejecuta
}

```

## Reduccion de condicionales quitando el else
Podemos simplificar nuestrp código condicional quitando el else. Esto es útil cuando no necesitamos un bloque false o cuando tenemos mulitples condiciones.

```js
let user= "cei";
let password ="abc123";
let mensaje = "Clave correcta";

if(password.lenth <=  8){
    mensjae  = "La pass debe de tener al menos 8 caracteres";
}
if(passwor.includes(" ")){
    mensaje = "La pass no debe de tener espacios";

}
if(password.includes(user)){
    mensaje = "La pass no puede incluir tu nombre de usuario";
}
if(password.toLowerCase() === password){
    mensaje = "La pass debe de contener una letra mayúscula ";
}
console.log(mensaje);

```

# Manipulacion de textos
1. Concatenación
```js
let nombre ="Luis"
let apellido = "Estrada"
let nombreCompleto = nombre + " " + apellido;

// Concatenar utilizando +=
let numero = 5;
numero += 3; 

let saludo = "Hola, ";
saludo += "Como estas?";
```

2. Interpolación

Con las plantillas literales (templare literals), pueden insertar variables o expresiones dentro de una cadena usando `${}`

```js
let nombre ="Luis"
let apellido = "Estrada"
let nombreCompleto = `${nombre} ${apellido}`;

let total = 50;
let iva = 0.21;
console.log(`El total con impuestos es: ${total + (total * iva)}`)
```


3. Métodos de Strings

```js
let nombre ="Luis"
let apellido = "Estrada"
let nombreCompleto = nombre + " " + apellido;
```
