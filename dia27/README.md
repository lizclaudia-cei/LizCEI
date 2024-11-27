# Apuntes dia 27
linear gradiant: se indida primero hasta donde (puede ser un angulo) va el color y los colores.Con este ejemplo se le coloca al texto el gradiant.

```css
.Main-text{
    background: linear-gradiant(to right,red,orange,yellow,green,blue,indigo,violet);
    background-clip: text;
    color:transparent;
}
```

Una función puede recibir  variables las cuales seran  parametros y los valores  que se envian a dicha función son llamados  argumentos.

## Metodos JS listas
 lista.pop(): corta el ultimo elemento de la lista.  Pero tiene un bug y es que si la lista esta declarada dentro de una funcion cada que se entre a la funcion la lista se reinicia a ese valor  entonces siempre dara el mismo valor 
 ```js

 // de esta forma siempre devuelve manzana (BUG)
  btnSplit.addEventListener("click", () => {
        let texto3 = "Lechuga, tomate, Peras, Manzanas";
        let lista = texto3.split(", ");
        
       result = lista.pop(); // Manzana
        input.value = result;
        console.log(result);
      });

// De esta forma ya no realiza  el bug

 let texto3 = "Lechuga, tomate, Peras, Manzanas";
 let lista = texto3.split(", ");
  btnSplit.addEventListener("click", () => {
                               // 1 clic  // 2 clic // 3 clic  // 4 clic
        result = lista.pop(); // Manzana // Peras  // tomate  // Lechuga
        input.value = result;
        console.log(result);
      });

 ```

 
     



