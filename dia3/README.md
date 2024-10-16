# Estos son los apuntes del día 3

Sitio web Can I use se utiliza para conocer si se puede utilizar ciertas caracteristicas de codigo html en los distintos navegadores.

Nota: El texto alternativo debe ser obligatorio en las imagenes y no debe de ser confundido con el title.

Ejemplo de realizar un comentario 

```html
<!-- Hola soy un comentario >
```

Ejemplo de realizar un comentario con varias lineas 

```html
<!-- 
 
 ,'.-.'.         
'\~ o/` ,,
 { @ } f
 /`-'\$ 
(_/-\_)          
 
   ,-.       _,---._ __  / \
 /  )    .-'       `./ /   \
(  (   ,'            `/    /|
 \  `-"             \'\   / |
  `.              ,  \ \ /  |
   /`.          ,'-`----Y   |
  (            ;        |   '
  |  ,-.    ,-'         |  /
  |  | (   |        Tom | /
  )  |  \  `.___________|/
  `--'   `--'
  >
```
Comando para realizar comentarios
```
Shift + Comand + 7
```
La etiqueta html es la etiqueta principal y estos son sus atributos principales lang para language y dir para la direccion de nuestra pagina
```html
<html lang = "en" dir="ltr">

</html>
```

Cabecera contiene etiquetas para el navegador

Las etiquetas met son utilizadas para que el navegador web pueda leer de mejor manera la información que se desea visualizar.

Nota:    Las etiquetas meta para indicar que charset se utiliza en este caso es el globas de ASCII, tambien para indicar como se ve nuestro tamaño de texto e imaganes de acuerdo a cada dispositivo viewport 

```html
<head> 
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Esta página es nuestra primer página realizada en el Módulo de DW">
    <meta name="keywords" content=" Diseño Web, CEI, Página, CSS, JS">
    <meta name="author" content="Alumnos de DW v3">
    <title>Pruebitas</title>
    <style>
        .felino{
            width: 200px;
            height: 200px;
        }
        
    </style>

</head>
```

Body contine todo el cuerpo de mi página web
```html
<body>
    <p> Este es el cuerpo de la pagina web y esto es una etiqueta parrafo</p>
</body>    
```
En reglas la pagina web solo debería de tener un h1
```html
<h1>Hola</h1>
```
Para colocar varias etiquetas iguales 
```html
<!-- Esto creara 5 elementos de una misma etiqueta -->
li*5
<!--  En este caso una lista -->
  <ul>
     <li>item1</li>
     <li>item2</li>
     <li>item4</li>
     <li>item3</li>
     <li>item5</li>
  </ul>
```
Comando para modificar varios elementos a un mismo tiempo
```
Dejar precionado la tecla option y seleccionar lo que deseas modificar
```
Se coloca index.html debido a que es el primer lugar al que va a buscar nuestro servidor web
La etiqueta target toma por defecto la opcion _self que indica que es al hacer click en el link, pero se utiliza _blanck para que al dar clic se abra una nueva pestaña con la dirección del link.
```html
<a href="/dia2/index.html" target="_self" >Ir a notas de clase anterior</a>
<a href="/dia2/index.html" target="_blanck" >Ir a notas de clase anterior</a>
```
Para realizar navegación saliendo de una carpeta se realiza con la estructura 
```
../
```

