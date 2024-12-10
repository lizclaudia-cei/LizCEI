
//------------------------------------
// Comentarios y doc 
//------------------------------------
/*
    Vamos a realizae un ToDo list para prácticar el uso de Objetos y Arrays.
    link al manual:
    Autor: El profe Tomi
*/


//-------------------------------
// Variables
//-------------------------------
const btnSubmit = document.getElementById('btnSubmit');
const formTareas = document.getElementById('formTareas');
const inputAddTask = document.getElementById('inputAddTask');
const boxTasks = document.getElementById('boxTasks');

const listaDeTareas = ['Ordenar el codigo JS', 'Crear las funciones', 'Probar el codigo'];

// -------------------------------
// Funciones 
//---------------------------------

/**
 * Función para imprimir la lista de Tareas en el html
 */
function showTasks() {
    // borrar contendio de la caja
    boxTasks.innerHTML = ``;

    listaDeTareas.forEach((tarea) => {
        boxTasks.innerHTML += `<li>${tarea}</li>`
    });
}

/**
 * Función para agregar una nueva tarea a la lista listaDeTareas
 * Si la tarea viene vacia muestra una alerta 
 * @param {String} tarea
 */
function addTask() {
    inputAddTask.value != null && inputAddTask.value.trim() != "" 
        ? listaDeTareas.push(inputAddTask.value)
        : alert("Por favor ingresa una tarea válida");
    inputAddTask.value = ''
    showTasks();
}



// -------------------------------
// Eventos  
//---------------------------------


// escuchar el evento cuando se envia
formTareas.addEventListener("submit", (event) => {
    // No envies el formulario para realizar antes
    event.preventDefault();
    addTask();

});


// -------------------------------
// Iniciar nuestro programa  
//---------------------------------
showTasks();