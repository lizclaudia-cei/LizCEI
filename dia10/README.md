# Apuntes día 10
Formas de alinear los elementos. 
align-items: los alinea de forma vertical alinea el eje secundario
justify-content: los alinear en el eje principal

Para obtener el primer hijo con css hacemos esto 
```css
  .categoria div:first-child{
            position: sticky;
            background-color: darkgrey;
            color: white;
            border-bottom:  1px solid black;
            top: 20px;
        }
```