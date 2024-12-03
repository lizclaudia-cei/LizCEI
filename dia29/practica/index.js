//---------------------------------------------
// Variables
//---------------------------------------------

const txtGanadas=document.getElementById("ganadas");
const txtPerdidas=document.getElementById("perdidas");
const txtEmpatadas=document.getElementById("empatadas");

const txtResultado=document.querySelector(".txtResultado");
const txtStats=document.querySelector(".txtStats");


const btnPiedra=document.getElementById("btnPiedra");
const btnPapel=document.getElementById("btnPapel");
const btnTijera=document.getElementById("btnTijera");
const btnAutoPlay=document.getElementById("btnAutoPlay");
const btnReset=document.getElementById("btnReset");

const objScore={
    ganadas:0,
    perdidas:0,
    empatadas:0,
    stats:{
        ai_piedra:0,
        ai_papel:0,
        ai_tijera:0,
        user_piedra:0,
        user_papel:0,
        user_tijera:0
    }
}

console.log("text body: ",document.body.innerText);

//---------------------------------------------
// Funciones
//---------------------------------------------


/**
 * Funcion para resetear el juego
 * @returns {object} - Devuelve el objeto objScore con los valores en 0
 */
function reset(){
    objScore.ganadas=0;
    objScore.perdidas=0;
    objScore.empatadas=0;
    objScore.stats.ai_piedra=0;
    objScore.stats.ai_papel=0;
    objScore.stats.ai_tijera=0;
    objScore.stats.user_piedra=0;
    objScore.stats.user_papel=0;
    objScore.stats.user_tijera=0;
    showScore();
}


/**
* Funcion para que juegue el usuario
* @param {string} usuario  - Recibe piedra, papel o tijera como opciones
* @returns {string} - Devuelve el resultado de la partida
* 
*/
function jugar(usuario){
    const jugadorAI=elegirJugadorAI(); // devuelve piedra, papel o tijera

    let resultado="";

    if(jugadorAI == 'piedra' && usuario == 'piedra' || jugadorAI == 'papel' && usuario == 'papel' || jugadorAI == 'tijera' && usuario == 'tijera'){
        resultado='Empate';
    }else{
        if(jugadorAI == 'piedra' && usuario == 'papel' || jugadorAI == 'papel' && usuario == 'tijera' || jugadorAI == 'tijera' && usuario == 'piedra'){
            resultado='Ganaste';
        }else{
            resultado='Perdiste';
        }
    }

    // Stats de los Jugadores
    if(usuario=='piedra'){ objScore.stats.user_piedra++; }
    if(usuario=='papel'){ objScore.stats.user_papel++; }
    if(usuario=='tijera'){ objScore.stats.user_tijera++; }
    if(jugadorAI=='piedra'){ objScore.stats.ai_piedra++; }
    if(jugadorAI=='papel'){ objScore.stats.ai_papel++; }
    if(jugadorAI=='tijera'){ objScore.stats.ai_tijera++; }

    // Score
    if(resultado=='Empate') { objScore.empatadas++; }
    if(resultado=='Perdiste') { objScore.perdidas++; }
    if(resultado=='Ganaste') { objScore.ganadas++; }

    txtResultado.innerHTML=`<h1>${resultado}</h1>Tu has tirado <b>${usuario.toUpperCase()}</b> y la AI ha tirado <b>${jugadorAI.toUpperCase()}</b>.`;

    showScore();
}

/**
 * Funcion para mostrar el score
 */
 const showScore = ()=>{

    txtGanadas.innerHTML=objScore.ganadas;
    txtPerdidas.innerHTML=objScore.perdidas;
    txtEmpatadas.innerHTML=objScore.empatadas;

    
    txtStats.innerHTML=`<p><h3>AI:</h3> ✊x${objScore.stats.ai_piedra} ✋x${objScore.stats.ai_papel} ✌x${objScore.stats.ai_tijera}</p>
                        <p><h3>Usuario:</h3> ✊x${objScore.stats.user_piedra} ✋x${objScore.stats.user_papel} ✌x${objScore.stats.user_tijera}</p>`;
    graficar();
}

/**
 * Funcion para que la AI elija con que objto desea jugar
 * @returns {string} - Devuelve piedra, papel o tijera
 */
 const elegirJugadorAI = ()=>{
    const opciones=['piedra','papel','tijera'];
    const numero=Math.floor(Math.random()*opciones.length);
    return opciones[numero];
}

/**
 * Funcion para que la AI juegue contra la AI
 */
const  AIvsAI =()=>{
    const opciones=['piedra','papel','tijera'];

    setInterval(function(){
        const numero=Math.floor(Math.random()*opciones.length);
        const usuario=opciones[numero];
        jugar(usuario);
    },100);
    // const numero=Math.floor(Math.random()*3);
    // usuario=opciones[numero];
    // jugar(usuario);
}

/**
 * Funcion para graficar el score de las partidas
 */
 const graficar= ()=>{
    const total=objScore.ganadas+objScore.perdidas;// +objScore.empatadas;
    const porcentajeGanadas=(objScore.ganadas/total)*100;
    const porcentajePerdidas=(objScore.perdidas/total)*100;
    //const porcentajeEmpatadas=(objScore.empatadas/total)*100;

    const divGanadas=document.querySelector("div>div:nth-child(1)");
    const divPerdidas=document.querySelector("div>div:nth-child(2)");

    divGanadas.innerHTML="Ganadas: "+Math.round(porcentajeGanadas)+"%";
    divPerdidas.innerHTML="Perdidas: "+Math.round(porcentajePerdidas)+"%";
    divGanadas.style.width=porcentajeGanadas+"%";
    divPerdidas.style.width=porcentajePerdidas+"%";
}

//---------------------------------------------
// Eventos
//---------------------------------------------

btnPiedra.addEventListener("click",()=>{ jugar('piedra'); });
btnAutoPlay.addEventListener("click",()=>{ AIvsAI(); });
btnPapel.addEventListener("click",()=>{ jugar('papel'); });
btnTijera.addEventListener("click",()=>{ jugar('tijera'); });

btnReset.addEventListener("click",()=>{
    reset();
});


