//-------------------------------
//     Variables
//-------------------------------
const btnParimpar = document.getElementById('btnParImpar');
const btnPosNeg = document.getElementById('btnPosNeg');
const btnMayorMenor = document.getElementById('btnMayorMenor');
const btnDiaSemana = document.getElementById('btnDiaSemana');
const btnGanador = document.getElementById('btnGanador');

let text = document.getElementById('texto');

let resultado;

//-------------------------------
//     Funciones
//-------------------------------

/**
 * Función para solicitarle al usuario que ingrese un numero al dar clic en un btn
 * 
 */
function pedirNumero() {
   resultado = prompt('Ingrese un número');
   if(isNaN(resultado)) {
         alert('Por favor ingrese un número');
         pedirNumero();
   }
    return resultado;
}

/**
 * Función para solicitarle al usuario que ingrese un dia al dar clic en un btn
 * 
 */
function pedirDia() {
    resultado = prompt('Ingrese un dia de la semana');
     return resultado;
 }

 /**
 * Función para solicitarle al usuario que ingrese un texto al dar clic en un btn
 * 
 */
function pedirObjeto() {
    resultado = prompt('Ingresa una opcion de las siguientes: piedra, papel o tijera para iniciar el juego');
     return resultado;
 }

/**
 * Función que determina si un número es par o impar
 * @param {number} num
 * @returns {string} // Par o Impar
 */
function parImpar(num) {
    if(num % 2 === 0) {
        
        resultado = `Tu número ${num} es par`;
        console.log(resultado);
    }else{
        resultado = `Tu número ${num} es impar`;
    }
    return resultado;
}
/**
 * Función que determina si un número es positivo,negativo o cero
 * @param {number} num
 * @returns {string} // Positivo, Negativo o Cero
 */
function posNeg(num) {
    if(num > 0) {
        resultado = `Tu número ${num} es positivo`;
    }else if(num < 0){
        resultado = `Tu número ${num} es negativo`;
    }else{
        resultado = `Tu número es cero`;
    }
    return resultado;
}

/**
 * Función que determina si es mayor o menor de edad
 * @param {number} edad 
 * @returns {string} // Mayor de edad o Menor de edad
 */
function mayorMenor(edad) {
    console.log(edad);
    if(edad >= 18) {
        resultado = `Si tienes ${edad} años de edad entonces eres mayor de edad`;
    }else{
        resultado = `Si tienes  ${edad} años de edad entonces eres menor de edad`;
    }
    return resultado;
}
/**
 * Función que determina el día de la semana
 * @param {String} dia
 */
function diaSemana(dia) {
    console.log(dia.trim().toLowerCase());
   let  diaM = dia.trim().toLowerCase().replace(/[áéíóú]/g, (vocal) => {
        const mapping = {
          á: "a",
          é: "e",
          í: "i",
          ó: "o",
          ú: "u",
        };
        return mapping[vocal];
      });

    
    
    if(diaM == "sabado" || diaM == "domingo" || diaM == 6 || diaM == 7) {
        resultado = `El día ingresado ${dia} es un día no laboral`;
    }else{
        resultado = `El día ingresado ${dia} es un día laboral`;
    }  
    return resultado;
}

/**
 * Función que determina el ganador de un juego
 * @param {String} jugador1
 * @param {String} jugador2
 * @returns {String} // Ganador
 */
function juego(jugador1, jugador2) {
    console.log("Objeto 1: ", jugador1);
    console.log("Objeto 2: ", jugador2);

    if(jugador1.trim().toLowerCase() == 'piedra' && jugador2.trim().toLowerCase() == 'tijera' || jugador1.trim().toLowerCase() == 'papel' && jugador2.trim().toLowerCase() == 'piedra' || jugador1.trim().toLowerCase() == 'tijera' && jugador2.trim().toLowerCase() == 'papel') {
        resultado = `El ganador es el jugador 1`;
    }else if(jugador1.trim().toLowerCase() == 'tijera' && jugador2.trim().toLowerCase() == 'piedra' || jugador1.trim().toLowerCase() == 'piedra' && jugador2.trim().toLowerCase() == 'papel' || jugador1.trim().toLowerCase() == 'papel' && jugador2.trim().toLowerCase() == 'tijera') {
        resultado = `El ganador es el jugador 2`;
    }else{
        resultado = `Empate`;
    }
    return resultado;
}

//-------------------------------
//     Eventos
//-------------------------------

btnParimpar.addEventListener('click', () => {
    pedirNumero();
    parImpar(resultado);
    text.value = resultado;
});

btnPosNeg.addEventListener('click', () => {
    pedirNumero();
    posNeg(resultado);
    text.value = resultado;
});

btnDiaSemana.addEventListener('click', () => {
    pedirDia();
    diaSemana(resultado);
    text.value = resultado;
});

btnMayorMenor.addEventListener('click', () => {
    pedirNumero();
    console.log(resultado);
    mayorMenor(resultado);
    text.value = resultado;
});

btnGanador.addEventListener('click', () => {
    pedirObjeto();
    let jugador1 = resultado;
    pedirObjeto();
    let jugador2 = resultado;
    juego(jugador1, jugador2);
    text.value = resultado;
});


