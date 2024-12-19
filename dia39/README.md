# Apuntes dia 39

## Funciones de callback / Promesas

## Concepto de Sincronía vs Asincronia

La sincronía es la ejecución de tareas en in orden secuencial , es decir una detras de otras.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos() {
  // espera 3 segundos
  esperar(3000);
  console.log("PAso 2");
}

function esperar(milisegundos) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milisegundos);
}
```

La asincornía es la ejecución de tareas No secuenciales, es decir se puede ejecutar antes de que la anterior haya terminado.

Esto se usa para:

- traer información de una base de datos(DB)
- traer información de una API externa
- Manipular nuestros propioes archivos.

Para lograr esto,simplemente debemos enviar como parametro una función de `callback` que se ejecutara al finalizar la tarea asincrona.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos() {
  // espera 3 segundos
  setTimeout(() => {
    console.log("Paso 2");
  }, 3000);
}
```

## Funciones de callback

Como debemos de esperar a que una tarea asíncrona termine para poder continuar con la siguiente, se utiliza los callbacks para realizar una acción después de que la tarea asíncrona ha terminado.

## Promesas

La gran desventaja de los callbacks es que se pueden anidar y se vuelven muy dificiles de leer y mantener. A esto se llama `Callback Hell`. Por eso se han creado las `Promesas`.

Una promesa es un objeto que representa la `terminación` o el `fracaso` de una operación asíncrona.

Puede tener uno de estos tres estados

- pendiente: cuando aún no se ha completado y no se sabe si se va a cumplir o no.
- resuelta: (con resolve) ,cuando se ha completado con éxito.
- rechazada: (con reject), cuando ocurre un error

las promesas se pueden encadenar.

```js
const miPromesa = new Promise((resolve, reject) => {
  console.log("Intentando hacer lo que te prometí");
  //......
  setTimeout(() => {
    // pude cumplir la promesa
    resolve("EXITO!");
    // no pude cumplir la promesa
    reject("ERROR. no encontre los archivos que me pediste");
  }, 3000);
});
miPromesa
  .then((resultad0) => console.log(resultado))
  .catch((error) => console.log("Tuve un error", error))
  .finally(() => console.log("Termine la tarea(con error o exito)"));
```

Link ===> https://www.youtube.com/watch?v=eiC58R16hb8

## Fetch con .then() y .catch()

Uno de los usos fundamentales de las promesas es el Fetch API para hacer `peticiones HTTP ` a otros servidores.
La función fetch() nos devuelve una promesa.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(jsonString =>return JSON.parse(jsonString))
     .then(datos =>  console.log('Mis datos son: ', datos.title))
     .catch(error=> console.log('Tuvimos un error al tarer los datos', error));
```

## Fetch con async/await
La desventaja de las promesas es que se vuelven dificiles de entender cuando se anidan. Por se crearon las funciones `async` y `await`.

```js

async funciton traerDatos(){
try{
    const  response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const datos = await response.json(); // convierte mi jsonString en un objeto JS
  console.log('Mis datos son: ', datos);
}catch(error){
    console.log('Tuve un error: ', error);
}

}
let listaDeUsuarios = traerDatos();
```

Ejemplos de fecth anidados con async/await

```js
async function traerPostDeUsaurios(){
    try{
        // traer todos los usuarios
        let users = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await users.json();
        console.log(users);
        const userId = users[0].id
        let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId = ${userId}`);
        posts = await posts.json();
        console.log(posts);

        // traer los posts del primer usuario
    }catch(error){
        console.log('Tuve un error: ', error);
    }
}
traerPostDeUsaurios();
```

Evento input oara agregar determinada funcionalidad cada que se modifique el valor del input.