# Apuntes dia 38
## JSON
Java Script Object Notation

Json es un formato de intercambio de datos muy utilizado en la actualidad. Es fácil de leer y escribir por humanos y fácil de interpretar y generar por las maquinas. ES muy similar a los objetos JS, con la diferencia de que todas las caracerísticas deben utilizar comillas dobles, y que no se pueden incluir funciones o métodos, solo datos(listas,strings,booleanos,números).

Tenemos 2 métodos para trabajr con json: `JSON.parse()` y `JSON.stringify()`
- parse: convierte un objeto JSON a JS
- stringify: convierte un objeto JS a JSON
```js
let objeto = {
    nombre:"Juan",
    edad:38,
    "casado":false,
    hijos:null,
    "mascotas":[
        {"nombre":"Firulais","raza":"Labrador"},
        {"nomrbe":"Mishi",raza:"Siames"}
    ],
    saludar:()=> {alert("Hola")}
}

let json = JSON.stringify(objeto) // la funcion ya no existe
```