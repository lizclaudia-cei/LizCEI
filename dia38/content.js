let users =[];
const card = document.getElementById("card");

function traerUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        data => {
            users = data;
            console.log(users);
            users = users.slice(0,5);
            // volver a usar map en lugar de for 
            users.map(user => {
                // Crear nuevos elementos para cada usuario
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let pCity = document.createElement('p');
                let pCompany = document.createElement('p');
                let div = document.createElement('div');

                h1.textContent = `${user.name}`;
                p.innerHTML = `<strong>email:</strong> ${user.email}`;
                pCity.innerHTML = `<strong>ciudad:</strong> ${user.address.city}`;
                pCompany.innerHTML = `<strong>compañia:</strong> ${user.company.name}`;
                console.log(h1, p, pCity, pCompany);
                h1.classList.add('Cards-title');
                div.classList.add('Cards-card');
                div.addEventListener('mouseover',()=> div.classList.add('isHover'));
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(pCity);
                div.appendChild(pCompany);
                card.appendChild(div);
            });
        }
    )
}

traerUsuarios();


