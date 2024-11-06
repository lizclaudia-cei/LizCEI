# Apuntes del día 15

## Unidaddes de medida en CSS
- Pixeles: son unidades absolutas que representan un punto en la pantalla.
    - Son ideales para tamaños precisos y no cambiar en relación a otros elementos.
    - No se adaptan a diseños responsive.

- Porcentajes: Es una unidad relativa al tamaño del elemento padre.
     - Si un elemento tiene 200px y el hijo tiene 50%, el elemento ocupara un tamaño de 100px.
     - Son utiles para crear diseños fluidos y responsive que se adapten a distintos tamaños de pantalla.

- EM: Es una unidad relativa al tamaño de la fuente del elemento padre.
     - Por ejemplo si el padre tiene un font-size: 10px, y un margin: 3em, el margen seráde 30px.
     - Esta unidad es útil para crear tamaños de texto y márgenes que escalen con el tamaño de la fuente. Esto mejor la accesibilidad y flexibilidad del diseño.
     - Es ideal para escalar elementos proporcionalmente al texto.
     - Por defecto los navegadores asignan el fontsize a 16px;
     
 
 ```css
 .card{
    font-size:16px; /* 16px*/
    padding:1em; /* 16px*/
 }
 .card__title{
    font-size:2em; /* 32px*/
    margin: 2.5em; /* 48px*/
 }
 ```
- REM: (Root Em) es la unidad relativa al tamaño de fuente de nuestro elemento raiz (normalmente es el <html>). 
   - Por defecto esta es de 16px.
   - REm es util para mantener una escala consistente en el documento, independientemente de la estructura del DOM.

```css
html{
    font-size:16px;

}

.card{
    font-size:2em; /* 32 px*/
}

.card__title{
    /*EL REM ignora el font-size de .card */
    margin: 1rem; /* 16 px */
}
```
