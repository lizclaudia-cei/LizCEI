# Apuntes dia 23
## Java Script
Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos.Se utiliza para crear contenido dinámico e interactivo en sitios web.

- Lenguaje de alto nivel:Esta diseñado para ser fácil de leer y escribir para humanos.
- Interpretado: se ejecuta línea por línea.No necesita ser compilado.
- Orientado a objeto: Js utiliza un paradigma (OOP),lo que significa que organiza el código en objetos.
   - Un objeto es una colección de propiedades y métodos que se pueden leer y manipular. 

Ejemplo de orientado a objeto 

Perro
// Propiedades
- color:blanco y negro
- nombre: Teo
- size: pequeño
- cantidadPatas: 4

// Métodos
- ladras(): Hacer un ruido fuerte
- comer(): ingerir alimentos
- moverCola(): demostrar felicidad moviendo la cola

```js

//-------------------------------
//
//-------------------------------    
let numero = 1;
console.log("Mi número vale: ",numero);
// Imprime "Mi número vale:1"
numero = numero + 2;
console.log("Mi número vale: ",numero);
// Imprime "Mi número vale:3"


//--------------------------------------
//      Obejtos
//---------------------------------------

let alumno ={
    nombre: "Luis",
    edad: 26,
    actividades:{
        lugar:"afuera",
        practicar: function(){'Hacer la actividad'}
    },
    saludar:function(){
        console.log('Hola, mi nombre es Luis');}
} 

// Imprimir los datos del alumno 
console.log(alumno.nombre);//valor que imprime => Luis
console.log("Me llamo", alumno.nombre, "y tengo ",alumno.edad, "años")// valor que imprime => Me llamo Luis y tengo 26 años

alumno.saludar();
alumno.actividades.practicar();

```

## Donde puedo probar/codificar js

- En el navegador: en la pestaña de consola,escribimos directamente.
- En etiquetas de html '<script></script>', en un principio se recomienda poner las etiquetas al final del body.
- Se puede usar en archivos externos con extension ".js" y linkeados a nuestro HTML. '<script src="./js/mi-archivo.js"></script>'
- En sitios web externos
    1. https://playcode.io/new
    2. https://linangdata.com/javascript-tester/
    3. https://codepen.io/
    4. https://jsfiddle.net/

## Funcionalidades
- Manipulación del DOM (Documento Object Model): Agregar, modificar o eliminar elementos HTML y CSS.
- Procesar Formularios: Verificar datos ingreados por el usuario, formularios complejos de múltiples secciones.
- Manejo de animaciones: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de eventos: responder a las acciones del usuario Ej: click, desplazarse por la web.
- Comunicación asíncrona con servidores mediante Ajax/Fetch: enviar y recibir datos de un servidore sin tener que recargar la página.

## Variables
- Son como cajas/cubetas que utilizamos para guardar información. Esta info puede ser un número, un texto, una lista de cosas y muchos otros tipos más.Nos permite almpacenar datos para después modificarlos o usarlos en diferentes partes de nuestro programa.

- Definir variable: Asignarle un nombre a la caja.
- Asignar un valor: Colocar cosas dentro de dicha caja.Se realiza con el símbolo '='.

- En js las variable se declaran con la palabra `let` o `const`. Antes se utilizaba la palbara `var` como valor.

   - let: permite que el contenido de la caja sea modificado.
   - const: no permite que le contenido de la caja sea modificado. Y utiliza menos expacio de memoria de la pc.

```js
let nombre = "Luis Angel"
let edad = 26;
const PI= 3.141516;

```
## Comentarios en JS
- Simple `//`
- Simple en la misma línea `nombre=Sofia //soy comentario`
- Multiples líneas `/* ........*/`
- Comentario de Documentación `/** .....*/` para bloques de documentación, este se usa para comentarios de funciones y clases.

```js
// soy simple
nombre = "Luis" ;// soy simple detras de línea
/*
 Soy multilínea
*/
/**
 * Esta es una función que suma dos números
 * la obtuve de esta url : http://asasadada
 * 
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @return {number} La suma de los 2 números anteriores (a+b)  
 *  */
function sumar(a,b){
    return a+b;
}
```
## Tipos de Datos
- Números: enteros,decimales,positivos,negativos.(los decimales son con "." ej: 3.5)
- Cadena de texto (Strings): textos, palabras, frases, 1 letra.Van entre comillas simples '', comillas dobles "" o backticks ``.
- Booleanos: Verdadero/ Falso (true / false)
- Lista de cosas (Arrays): Se escriben entre corchetes [] y se separan con comas ",".
- Obejeto (Object): colección de propiedades (características) y métodos (funcionalidades), y se escriben con {}

```js

// PRIMITIVOS
let texto = "Hola alumnos del CEI";
let textoConComillas = 'Hola estoy "bien"';
let textoConComillasSimple = "I'm Liz"
let texto = `Puedo usar comillas 'simples' y "dobles"`; //template String

let numeros = 123;
let numeros2 = "123";
numeros2 = Number(numeros2); // Convierte strings a números

let entero = 25;
let decimal = 22.30;
let negativo = -5;
const PI= 3.141516;
let num1234 = Number("1234");

let estaPrendido = false;
let isPrimary = true;
let onActive =false;
let esMenorDeEdad = false;

// REFERENCIALES

//Listas /arrays/ arreglos

const alumnosDeDW =["Daniel","Jaime","Laura","Liz"];
const edades =[25,32,30,29];
const listMix=[1,"Luis",true,{edad:18,nombre:"Laura"}]

const listaCompras =["tomates","lechuga"];
listaCompras =["tomate","lechuga","papa"];

console.log(listaCompras[0]);

//Objetos
const alumno={
    nombre:"Luis",
    edad:25,
    saludar:function(){console.log('Hola Mundo')}
}

alumno.edad = 26;


```