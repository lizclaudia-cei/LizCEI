# Apuntes día 7
Reset: limpia las propiedades que el navegador le coloque a nuestro html.

Flex funciona con una fila o una columna a la vez.

El % no es lo mismo al vh o vw ya que el porcentaje hace referencia al padre.

Comando para crear varias cosas 
```
div.card*6>{Tarjeta $}
```
Cuando coloquemos la propiedad flex en lugar de colocar margin a los elementos hijos colocar gap al elemento padre.

## Propiedades flex
- flex-grow: Indica el tamaño que debe de crecer el elemento con respecto a los otros elementos.
- flex-shrink: Indica que tan rapido debe de hacerse pequeña con respecto a los otros elementos.
- flex-basis: Indica de que tamaño es el elemento incialmente.

```css
.card{
      flex-grow:1; /* Podes ser mas grande */
      flex-shrink: 0; /* no podes ser mas pequeña */
      flex-basis: 200px;/* valor inicial */

     flex:1; /* Indica que grow sea 1 y lo demas se mantenga de igual forma */
}
```