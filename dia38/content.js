let users =[];
const card = document.getElementById("card");

// probando fetch
function traerUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        data => {
            users = data 
    
        }
    )

}
// funcion para crear un nuevo div 
let fragmento = document.createDocumentFragment();

const div = document.createElement('div');
users.map(user =>  div.textContent += `nombre: ${user.name}`);
fragmento.appendChild(div);
document.body.appendChild(fragmento);

traerUsuarios();
