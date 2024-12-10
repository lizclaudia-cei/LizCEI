# Apuntes dia 33
```js
 const alumnos = {};
alumno.edad = 33;
alumno['nombre'] = "Juan";
```
## Uso de This 
Al usuar en el arrow function el elemento this a lo que hace referencia es a el elemento Window. Y al utilizarlo en una function tradicional hace referencia a el objeto.
```js
const alumno = {
    "edad":33,
    "nombre":"Juan",
    saluda2:()=>{
        console.log(`Hola${this.nombre}`)
    }

    saludar:function(){
        console.log(this);
          console.log(`Hola${this.nombre}`)
    }
};
console.log(alumno.saludar()); // Hola Juan
```

Es mas adecuado utilizar el foreach en lugar del for cuando no se sabe cuantas veces se debe de ejecutar el bucle y se debe de verificar una condicion al inicio de cada ciclo.

FTP: File Transfer Protocol
