# Apuntes dia 40
## El uso de async y defer

El atributo defer en la etiqueta `script`nos permite cargar un script de manera asyncrona pero asegurandonos de que se ejecute despues de que el documento html se haya parseado.

```html
<head>
    <script defer src="./context.js"></script>
</head>
```
 el async no es recomendable porque puede que haya script que carguen más rapido que otros.
## Loading lazy
La eriqueta `img` posee un atributo `loading` que nos permite cargar imaganes de manera diferida.Esto se utiliza para cargar imagenes que no se encuentran en el viewport del usuario.

```html
<img src="imagen.png" loading="lazy" alt =" Esta es una imagen">
```
Es bueno para todas las galerias porque ayuda a que la página cargue más rapdio.

Funciones de githubCopilot
para preguntar sobre mi codigo con atach content le indicio los archivos que se desean mirar para obtener respuestas.
con comentarios pedirle cosas
 seleccionar el codigo y las teclas command + i

