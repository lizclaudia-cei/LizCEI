let users =[];
const card = document.getElementById("card");

function traerUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        data => {
            users = data;
            console.log(users);
            users.map(user => {
                // Crear nuevos elementos para cada usuario
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let pCity = document.createElement('p');
                let pCompany = document.createElement('p');
                let div = document.createElement('div');
                let fragmento = document.createDocumentFragment();

                h1.textContent = `${user.name}`;
                p.innerHTML = `<strong>email:</strong> ${user.email}`;
                pCity.innerHTML = `<strong>ciudad:</strong> ${user.address.city}`;
                pCompany.innerHTML = `<strong>compañia:</strong> ${user.company.name}`;
                console.log(h1, p, pCity, pCompany);
                h1.classList.add('Cards-title');
                div.classList.add('Cards-card');
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(pCity);
                div.appendChild(pCompany);
                fragmento.appendChild(div);
                card.appendChild(fragmento);
            });
        }
    )
}

traerUsuarios();


