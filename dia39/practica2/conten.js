

const box = document.getElementById('box');
async function traerPostDeUsaurios() {
    try {
        // traer todos los usuarios
        let users = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await users.json();
        console.log(users);
        users.map(async (user) => {
            try {
                const userId = user.id;
            let divP = document.createElement('div');
            divP.classList.add('Boxes-box');
            let h1 = document.createElement('h1');
            h1.textContent = user.name;
            divP.appendChild(h1);
            let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId = ${userId}`);
            posts = await posts.json();
            posts = posts.slice(0, 3);
            console.log(posts);
            posts.map(post => {
                let div = document.createElement('div');
                let p = document.createElement('p');
                let h2 = document.createElement('h2');
                div.classList.add('Boxes-box');
                p.textContent = post.body;
                h2.textContent = post.title;
                div.appendChild(h2);
                div.appendChild(p);
                divP.appendChild(div);
            })


            box.appendChild(divP);
                
            } catch (error) {
                console.log(error);
                
            }
            
        }

        )


    } catch (error) {
        console.log('Tuve un error: ', error);
    }
}
traerPostDeUsaurios();