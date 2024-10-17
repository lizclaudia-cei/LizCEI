# Estos son los apuntes del día 4

CheetSheet o W3Schools: para buscar info sobre las distintas etiquetas html

Para los nombres de archivos no utilizar caracteres especiales ni mayúsculas

pixeles: que ancho ocupa de la pantalla cada elemento
Las etiquetas de html pueden estar tanto en mayúscula o minuscula y de igual forma las va a pintar.

Reglas de cs mas avanzadas ayudan a que el navegador no seleccione por mi lo que deseo mostrar. Por ejemplo en las listas si se desean flechas en lugar de puntos se realiza con css.

Para seleccionar varios elementos que sean de lo mismo ultizamos el siguiente comando 
 ```
 command + D
```
Al utilizar collspan lo que se hace es que se recorren las columnas,si no se necesita que se recorran entonces solo se elimina esa columna de la fila que le continua
Esto es un tr con un collspan y un rowspan cada uno de ellos ocupa un lugar
```html
<tr>
    <td rowspan = "2"> Gato</td>
    <td collspan = "2" >Jugar</td>
</tr>
```
Nota: el proyecto una vez entregado ya no se puede modificar, se entrega un enlace de github. Dicho repo no se puede modificar nada hasta que se regrese con la nota.

 # Inline Vs Block
Ejemplos de etiquetas Inline: flow de elementos en forma horizontal
- las imagenes `<img>`
- botones `<button>`
- enlaces `<a>`
- cajas `<span>`
- textos `<strong> <em> <i> <mark>`

Ejemplos de etiquetas en Block:
- los div `<div>`
- parrafos `<p>`
- headers `<h1> <h2> <h3> <h4> <h5> <h6>`
- tablas `<table>`
- regletas `<hr>`
- listas `<ul> <li> <ol>`

Los elementos inline no puede colocarsele la regla de with ni hight

En Css para indicar que es una clase se realiza de la siguiente manera
```css
.box{
    width:200px;
    height:200px;
}
```
Para indicar que es una etiqueta
```css
h1{
    color:red;
}
```
Para indicar un id
```css
#felix{
    color:green;
}
```

## Box-Model
El box model es la forma en que se estructura un elemento HTML.Cada elemento tiene un content, border,marging y padding.

- El marging: es el espacio que hay entre un elemento y otro.
- El border: es el borde del elemento.
- El padding: es el espacio entre el contenido y el borde.
- El content: es el contenido de nuestra caja.
- el box-sizing : Hace que los elementos de la página tengan la medida que se le otorga con el width y el hight y hace que el contenido sea mas pequeño.

```css
.caja{
    margin:10px;

    border-color:black;
    border-width:2px;
    /* Muestra el borde continuo */
    border-style:solid;
    /* Muestra el borde punteado */
    border-style:dashed;
    /* de manera resumida se puede colocar lo siguiente */
    border: 2px solid black;

    padding:20px;

    box-sizing:border-box;

    
}
```

el * en css hace que se le coloque el atributo a todos los elementos de la web. Si se desea que algo no lo posea se debe de sobreescribir la regla para el elemento especifico.

```css
*{
    box-sizing:border-box;
}
```

Para mover la linea de un lugar o otro se utiliza el siguiente comando
```
seleccionar la línea + option + flechitas
```


