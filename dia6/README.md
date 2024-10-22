# Apuntes día 6
Align-self : aplica la propiedad para un solo elemento.
Order: especificar un orden de un solo elemento.Siempre toma por defecto el valor 0.Y va desde  valores negativos a positivos.
Align-content: al tener multiples lineas se le detecta como ver las ultimas líneas.
flex-flow: se utiliza para juntar el flex-direction con el flex-wrap separados por un espacio.
```css
.box{
 align-self:center;
 order: -1;
 flex-flow: column-reverse wrap-reverse;
}
```
Normalmente se parte de una columna debido a que siempre se lee la pagina web de arriba hacia abajo.
AL colocar como propiedad flex lo que hace es aplicar un flex grow, un flex flex-shrink y flex-basis.
```css
.content{
flex:1;
}
```

Para llegar a un elemento dentro de otro en css se realiza lo siguiente
```css
/* Este colocara este estilo a todos los links que esten dentro de sidbar */
.sidebar a{
   text-decoration: none;
   color:darkgrey;
}
/* Este colocara el estilo a todos las a que esten dentro de un li en mi web */
li a{
    text-decoration : none;
}
/* Este colocara el estilo a las listas solamente */
.sidebar ul {
    text-decoration:none;
}
```

Cuando se coloca esta propiedad ocupa el 100% del view Hight p view Width
```css
.conatiner{
    height:100vh;
    width:100vw;
}
```
overflow: permite que hacer cuando hay desbordamiento de texto
```css
.content{
    overflow: hidden; 
    overflow: scroll;/* Opcional para ver el footer permanenetemente */
    overflow-y:scroll; /*Overflow vertical */
    overflow-x:scroll; /*Overflow horizontal */
}
```

Si se desea modificar el flex direction en cada uno se debe de volver a declarar el display flex.
```css
 .container{
        display: flex;
        flex-direction: column;
      }
      .header{
        display: flex;
        flex-direction: row;
        padding: 20px;
        background-color: beige;
      }
```