# Apuntes del dia 29

```js
// Funciones nombradas
function suma(a,b){
    let resultado = a+b;
    return resultado;
}

console.log(suma(10,5));// 15
const resultado = suma(24,-3); // res = 21;


// Funciones anonimas

 const cuadrado = function(a){
    return a*a;
}

console.log(cuadrado(3));//9


// Funciones flechas
// funcion que devuelve el cubo de un numero.
const cacularCubo = (num) =>{
    return num *num * num;
}
 const result = calcularCubo(3)//27

// funcion flecha con 1 solo parámetro y sin return
// Recibe un numero y devuelve el doble de ese numero

// Optimizacion 1: quitar parentesis cuando tengo un solo parametro
// Optimizacion 2: si mi codigo tiene 1 sola linea, puedo devolverlo sin llaves ni return

const calcularDoble = (num)=>{2num}
const doble = a =>a*2;
```

