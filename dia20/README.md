# Apuntes de dia 20

## Emmet
Nos permite escrir HTMl y CSS 
Emmet:
- > Nos metemos dentro de la caja (crear un hijo)
- . Agregamos una o mas clases
-  #Agregamos un id
- + Agregar sibbling/hermano
-  *Repetidor/cantidad
- {} colocar contenido o texto dentro del elemento
- $ dentro del contenido enumerar elementos
- lorem10 tetxo lorem ipsum de 10 
- () agrupar elementos
[Emmet](https://docs.emmet.io/cheat-sheet/)

```
 main.contenido.modo--obscuro#contenido1>(h1.titulo+p.texto>lorem10)+(ul>li*5{Item de Lista $})+footer.pie

//Realizaria esto en html
  <main class="contenido modo--obscuro" id="contenido1">
        <h1 class="titulo"></h1>
        <p class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias.</p>
        <ul>
            <li>Item de Lista 1</li>
            <li>Item de Lista 2</li>
            <li>Item de Lista 3</li>
            <li>Item de Lista 4</li>
            <li>Item de Lista 5</li>
        </ul>
        <footer class="pie"></footer>
    </main>

```
## Variables en CSS
Se pueden crear variables para reutilizar valores en distintas partes del codigo.
   - Mejorar la legibilidad del código
   - Facilitar la actualización de los valores.
   - Se pueden crear de manera global en la raíz del documento en caso Web `<html>`.En otros caso en imagenes SVG es la etiqueta `<svg>`.
   - Para que Css lo reconozca debe de tener dos guiones medio.

Ejemplo de uso
[Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variable)

```css

*{
    margin:0;
}
:root {
    --blue : #1e90ff;
    --wwhite: #fff;
    --danger: red;
    --primary:#aaaccb;

}

.dark-mode{
    --primary: #bbbbaacc;
}


.container{
    background-color: var(--primary);
    color: var(--white);

}

```

## Metodologí Suit CSS
[SuitCSS Oficial](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

Se utiliza en muchos framworks como Angular React etc.Es una nomclatura basada en BEM pero con algunas diferencias.

* Sus partes son :
    - Componentes
    - Elementos
    - Modificadores
    - Estados: Son modificadores pero temporales de un elemento(actvivo, inactivo, abierto,cerrado), y son independientes de los componentes en que se utilizan.
    - Utilidades: Es una clase que se puede aplicar a cualquier etiqueta y que no tiene relación con el componente.Haciendo una lista de utilidades se puede utilizar para todo.

Incluso las utilities poseen variantes para diferentes tamaños de pantalla responsive como :
   - u-md-textCenter
   - u-lg-textCenter

* sm small
* md medium
* lg large


```css
/* Componente */
.MyComponent{} 
.Gallery{}

/* Elemento*/
.MyComponent-elementName{}
.Gallery-title{}
.Gallery-img{}
.Gallery-footerGallery{}

/* Modificadores*/
.MyComponent--modifierName{}
.Principal--gallery{}
.Gallery-img--extraLarge{}

/* Estados ej: isActive  onHover */
.isActive{}
.MyComponent.isEstateComponent{}
.MyComponent.isActive{}
.MyGallery.isActive{}

.MyComponent.onHover{}
.MyComponent.isLoading{}


/* utilidades */
.u-utilityName 
.u-textCeter{
    text-align:center;
    margin-left:auto;
    margin-right:auto;

}
.u-bgRed{
    background-color:red;
}

.u-textRight{}
.u-textDanger{
    background-color:red;
}
.u-bgPrimary{
    background-color:blue;
}

@media (max-width: 600px){
    .u-sm-bgPrimary{
        background-color:red;
    }
}
@media (min-width: 601px) and (max-width: 1024px){
    .u-md-bgPrimary{
        background-color:green;
    }
}
@media (min-width: 1025px){
    .u-lg-bgPrimary{
        background-color:blueViolet;
    }
}



```

```html
<div class="MyComponent isActive"></div>
<div class="MyComponent "></div>
<div class="MyComponent "></div>

<div class="MyGallery isActive"></div>
<div class="MyGallery "></div>
<div class="MyGallery "></div>
```