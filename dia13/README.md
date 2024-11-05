# Apuntes día 13

## Nombres de variantes de escritura (y selectores)

- UPPERCASE, lowercase, Title Case
- camel case: `miClase`
- pascal case: `MiClase`
- kebeb case: `mi-clase`
- snake case: `mi_clase`

## Especificidad

La especificidad es la forma en la que los navegadores deciden que regla de CSS se aplica a un elemento.Mientras ,as específica, mas peso tendrá, pero también será mas dificil de sobreescribir.

Valors que se calculan sumando puntos de 3 columnas:
- La primer columna representa los ID
- La segunda columna clases y sus atributos [...] y pseudo clases(:hover :root :required :nth-child(odd), :nth-of-type(3n) )
- la tercera columna es para etiquetas (p, input, strong, main) y pseudo-elementos(:: befor, ::after)

- Los id son pocos recomendables al utilizar en css.
Ejemplos

```css
/* Este es el valor que va a aplicar */
/* (1 1 0) */
#header .caja{
    background: red;
}

/* (0 2 0) */
.box:hover {
    background: green;
}

/* (1 0 0) */
#soyCaja{
    background:blue;
}

/* (0 0 2) */
p > br {
background:yellow;
}

input[type=checkbox]{
    
}

```

## Link para proyecto
Este link se utilizara para revisar el css de nuestro proyecto `https://jonassebastianohlsson.com/specificity-graph/`

## Nomenclatura BEM(Block-Elements-Modifier)

- Sus nombres son en kebab-case
- bloques:".boton", ".fomurlario", ".navegacion"
- elementos: son hijos de bloques **ej**: ".formualrio__checkbox", ".fomulario__boton", ".formulario__titulo"
- modificadores: Son clases que modifican tanto `elementos` como `bloques`**ej**: ".fomulario__boton--disabled"

```css

.header{}
.header__nav{}
.header__nav-item{}
.header__nav-link{}


.formulario{}
.formulario__boton{
    background-color:green;
}
.formulario__boton--disabled{
    background-color:grey;
}
```
Nota: debe de tener la menor especificidad posible.

