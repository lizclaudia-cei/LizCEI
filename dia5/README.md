# Apuntes del día 5
Atributos son las propiedades que poseen las etiquetas.

A los elementos de inline y block se les pueden modificar las propiedades para que estas etiquetas tengan como comportamiento el de otro. O sea quel de block se comporte como un inline o viceversa.

Para crear un elemento con una propiedad de clase se puede utilizar el siguiente comando
```
Etiqueta html + . + nombre de la clase
span.box
```
La propiedad inset del shadow hace que tenga un estilo degradado tambien dentro de esta propiedad se puede colocar el color y esto es para la sombra interna (--> es para indicar de que propiedad se habla)
El filter es otra propiedad para la sombra de la caja
```css
.box {
        width: 100px;
        height: 100px;
        border: 2px solid black;
        background-color: #eb9d37;
        padding:5px;
        margin: 10px;
    --> box-shadow: inset 10px 10px 10px rgb(253, 200, 102);
    /* Apariencia de borde dibujado a mano */
    --> border-radius: 255px 15px 225px 15px  / 15px 225px 15px 225px; 
         filter: drop-shadow(2px 2px 2px rgba(0, 0, 0,0.5));
      }
```

Al agregar la propiedad display inline a una etiqueta inline lo deja igual y no se le modifica el with ni el hight,pero si se le agrega la propiedad block a una etiqueta inline lo que hace es lo coloca con un break line y soporta el with y hight.

Al colocarle un display inline-block lo que haces es que permite combinar las opciones.Y no coloca el break line y respeta el with y el height.

Al colocar un display none lo que hace es que esconde la caja a la que se le aplica la propiedad. Esto es útil cuando se desea que cosas aparezcan por momentos.

```css
 .inline {
        display: inline;
      }

      .block {
        display: block;
      }

      .inline-block {
        display: inline-block;
      }
      .hidden{
        display: none;
      }
```

Display flex 
Flex posibilita decirle al padre como sus hijos se van a comportar. Por lo que las reglas solo se le colocan al padre aunque se las aplique a todos los elementos.
```css
.flex{
  display:flex;

}
```
## Porpiedades de flex 
- Direction: indica en que dirección se debe de ver los elementos.Siempre toma por defecto el row.
- Flex Wrap: Es el rapeo de texto por defecto siempre toma el nowrap por defecto. Baja los elemntos que no caben y si esta el reverse los sube.
- Justify content: esta regla siempre se aplica en el eje principal. Siempre toma por defecto el flex-start. El acomodo de los elementos horizontal
- Align items: El acomodo de los elementos verticalmente
- Flex Gorw: les aplica el mismo height.
```css
.eje1{
flex-direction: column;
flex-direction: column-reverse;
flex-direction:row-reverse;
flex-direction: row;

flex-wrap:wrap;
flex-wrap:nowrap;
flex-wrap: wrap-reverse;

justify-content:flex-start; /* Mueve los elementos de izquierda/arriba */
justify-content:flex-end; /* Mueve los elementos derecha/abajo */
justify-content:center; /* centra los elementos drejando el mismo espcaio arriba y abajo */
justify-content: space-evenly; /* Los distribuye con el mismo espacio */
justify-content:space-between; /* Agrega todo el espacio que puede entre ellos  pero el primero y el ultimo van pegados al margen*/
justify-content: space-around;  /* Agrega mas espacio en los laterales */

align-items: flex-start; /* Arriba */
align-items: flex-end; /* Abajo */
align-items: center; /* Centra los elementos */
align-items: baseline; /* Realiza una linea imaginaria y ordena los elementos en esa linea */
align-items:stretsh; /* Estira a todos los elementos como el mas grande */


flex-grow:1;
}
```
