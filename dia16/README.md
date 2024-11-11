# Apuntes dia 16

## GRID CSS

Es un sistema para creación de Layouts del estilo de tablas. Se compone de filas y columnas, y se pueden anidar unos dentros de otros.
- Su ventaja respecto a Flex es que podemos crear layouts complejos con pocas líneas de código.
- No es opuesto a Flex ni a Float, se pueden combinar entre ellos.
- Se utilizan propiedades para indicar cuantas filas y columnas lo componen indicando el tamaño de cada una de ellas.

Ejemplo : 

```css
/* Sistema de 3x3 */
.container{
    display:grid;
    /* Cantidad de columnas*/
    grid-template-columns:100px 100px 100px;
      /* Cantidad de filas*/
    grid-template-rows: 100px 100px 50px;
}
```
Podemos indicar a cada item donde posicionarlo con las reglas `grid-row-start`,` grid-row-end`, `grid-column-start`, `grid-column-end`.
* Tener en cuenta que se cuenta desde 1 no de 0.

Si queremos que un item ocupe 3 columnas y 1 fila, deberiamos de indicar que comience en la columna 1 y termine en la columnas 4. Que comience en la fila 1 y termine en la fila 2.

Ejemplo: 
```css
.conatiner{
    display:grid;
    grid-template-columns:100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    
}
.item-1{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:3; /* Para que use el espacio de las filas 1 y 2*/

}

```
* Se pueden invertir el start y el end.
```css

.item-1{
    grid-column-start:4;
    grid-column-end:1;
    grid-row-start:3;
    grid-row-end:1; 

}

```
* Existen los números negativos de filas y columnas negativas para seleccionar elementos desde el final del grid.
```css
/* esto ocupa todo el espacio de nuestra grid*/
.item-1{
    grid-column-start:1;
    grid-column-end:-1;
    grid-row-start:1;
    grid-row-end:-1; 

}
```
* En vez de seleccionar el inicio y fin de la fila/columna, podemos usar span para indicar cuanto se expande nuestro item
```css

.item-1{
    grid-column-start:4;
    grid-column-end:span 2;/* se amplia uno mas (totla dos bloques) */
    grid-row-start:1;
    grid-row-end:span 3;  /*En total va tener 3*/

}
```
* Se puede utilizar la regla reducida span para expnadir el objeto

```css
.item-1{
    /* Bloque de 2x2 */
    grid-column: span2;
    grid-row: span 2;
}
```
* Se puede simpllifcar la regla grid-column-start/end en una sola usando el simbolo "/".

```css
.item-1{
    grid-column:1 /4;
    grid-row: 1/4;

}
```
* Se puede simplificar aun mas utilizando `grid-area`
```css

.item-1{
    /* grid-row-start  grid-col-start grid-row-end grid-col-end */
    grid-area: 1/2/3/6;

}

```
* Podemos utilizar `grid-gap`(alias` gap`) para definir un espacio entre filas y columnas.
```css

.container{
    grid-gap:10px;/* mismo valor para filas y columnas*/
    grid-gap: 1em 3em;/* Diferenciado*/

}
```
* Si se agrega mas bloques dentro de nuestro grid que cantidad de filas y columnas. grid creara automaticamente ua nueva fila. Esto se llama "grid-implicita".
  - Podemos usar `grid-auto-rows:100px` para definir el tamaño dde nuevas celdas.
  - Podemos usar `grid-auto-flow` que nos permite definir si las nuevas celdas serán filas o columnas

```css
.conatiner{
    display:grid;
    grid-template-columns:100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    
    grid-auto-rows:100px;

    grid-auto-flow:column;
    grid-auto-columns:100px;
}

```
*  En grid poseemos una nueva medida llamada fraccion "fr".

```css
.conatiner{
    display:grid;
    grid-template-columns:1fr 2fr 1fr; /*25% 50% 25%*/
    grid-template-columns:200px 1fr 1fr; /* 3 columnas: 200px */
    grid-template-rows: 100px 100px 100px;
   
}

```