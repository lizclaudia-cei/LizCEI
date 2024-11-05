# Apuntes día 11

Web Semantica: Etiquetas con significado.

## Ejemplos de etiquetas no semánticas
- div
- Span
 
## Ejemplos de etiquetas semánticas
- Header: Encabezado de página , sección o artículo. 
 
     Propiedades:
     - Incluye elementos como Logo, Texto, menus de navegación.
     - No puede haber múltiples headers en una misma página.
     - No puede haber un header dentro de un footer, o otro header.

```html
<header class="header">
    <nav></nav>
</header>
```

- Footer: El pie  de página de un `sitio web` o `una sección`.

Propiedades:
- Puede haber multiples footer en una misma página.
- Puede incluir información como : 
     - Informació de contacto, 
     - Enlaces a RRSS (redes sociales)
     - Mapa del sitio
     - Formulario de contacto
     - Créditos

```html
<footer>

</footer>
```

- Nav: un conjunto de enlaces de navegación principal.
   
   Propiedades:
     - No todos los links `<a></a>` deben estar dentro del nav, ya que e-reders pueden omitir los navs al leer el contenido.


- Main: El contenedor para el contenido princiapl de la página.

    Propiedades:
    - Debe de haber uno solo
    - El main no debe de incluir contenido de otras secciones, por ejemplo logos, sidebar,navegación etc.
    - No puede ser hijo de estas etiquetas: articulo,footer,header,nav.

```html
<main>
    Contenido principal de mi página web.
</main>
```

- Aside: Define un contenido relacionado indirectamente con el contenido principal, por ej: un sidebar.
   
   Propiedades: 
     - Elementos que suelen estar dentro: 
        - Publicidad
        - Biografía del autor
        - Enlaces realcionados
        - Información de Perfil.

```html 
<aside>
    Biografía
</aside>
``` 

- Section: Define una sección de una página donde se agrupa los contendios relacionados entre si.Puede haber un section dentro de otro section. 
   
   Propiedades:
     - Una web se compone de multiples secciones, y cada una con su propio contenido y proposito.
     - Normalmente incluye un título.
     - Puede ir dentro de main o dentro de aside.

       Ejemplos:
         - Cápitulo
         - Introducción
         - Noticias
         - Información de Contacto

```html
<section>

</section>
```

- Article: Cualquier contenido que sea independiente.El mismo puede ser compartido o utilizado en otro sitio sin requerir contexto.
  
    Propiedades:
     - Suele incluir un título.
         
         Ejemplos:
          - un post de un blog
          - un artículo de una revista
          - un comentario de un usuario
          - tarjeta de un producto 

 ```html
 <article></article>
 ```   
             
Nota: Tanto las secciones como los artículos, pueden estar uno dentro del otro.

- Figure: Definel elementos autocontenidos, como una imagen, un diagrama o grafico, unat tabla, una fotografía, etc.

    Propiedades:
     - Dentro de ella se suele utilizar `figcaption` para describir este contenido.

```html
<figure>
    <img src="ruta-de-imagen.png" alt="Mi imagen"/>
    <figcaption> Fig1. - Imagen de Prueba</figcaption>
</figure>
```

- Mark: define un texto resaltado, normalmente se muestra con un fondo amarillo.
           
        
            

            