let number1 = 1;
let number2 = 2;
let result =0;
console.log(`suma de ${number1} + ${number2} = ${number1 + number2}`);
console.log(`resta de ${number1} - ${number2} = ${number1 - number2}`);
console.log(`multiplicacion de ${number1} * ${number2} = ${number1 * number2}`);
console.log(`division de ${number1} / ${number2} = ${number1 / number2}`);
console.log(`modulo de ${number1} % ${number2} = ${number1 % number2}`);


//------------------------------//
//           Variables  
//------------------------------//

const btnSum = document.getElementById('btnSuma');
const btnRest = document.getElementById('btnResta');
const btnMult = document.getElementById('btnMult');
const txtResultado = document.getElementById('result');
const btnclear = document.getElementById('btnClear');

let resultado = txtResultado.innerText;

//------------------------------//
//           Funciones
//------------------------------//

/**
 * Funcion para sumar 1 a un número
 * @param {num1} num1 
 * @returns {number } // restorna num1 + 1
 */
function suma(num1) {
     num1++;
    return num1;
}

/**
 * Funcion para restar 1 a un número
 * @param {num1} num1 
 * @returns {number}   //retorna num1 - 1 
 */
function resta(num1) {
    num1--;
    return num1;
}

/**
 * Funcion para multiplicar un número  por 5
 * @param {num1} num1
 * @returns {number} // retorna num1 * 5
 */
function multiplicacion(num1) {
    let result = num1 * 5;
    return result;
}


/**
 * Funcion para que el numero regrese a 0
 * @param {num1} num1 
 * @returns {number } // restorna 0
 */
function limpiar(num1) {
    num1 = 0;
   return num1;
}


const imprimirPantalla = function(resultado){
    console.log('Resultado: ', resultado);
    txtResultado.innerText = resultado;
}

//------------------------------//
//           Eventos
//------------------------------//

btnSum.addEventListener('click', () => {
     resultado = suma(resultado);
        imprimirPantalla(resultado);
});

btnRest.addEventListener('click', () => {
    resultado = resta(resultado);
    imprimirPantalla(resultado);
});

btnMult.addEventListener('click', () => {
    resultado = multiplicacion(resultado);
    imprimirPantalla(resultado);
});
btnclear.addEventListener('click', () => {
    resultado = limpiar(resultado);
    if(false){
        console.log('esto no se ejecuta');  
    }else{
        console.log('esto si se ejecuta');
    }
    imprimirPantalla(resultado);
});