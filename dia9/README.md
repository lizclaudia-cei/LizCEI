# Apuntes del día 9
Los links tambien posibilitan moverte dentro de la misma web para ello se le indica mediante el id de la sección.Como se muestra a continuación.
```html
<a href="#nosotros"></a>
```

## Las diferentes posiciones
- static: Es la posición que toma por defecto. Cuando se esta en este valor no se aplica ninguna porpiedad de posición. O sea no se puede colocar top, left, right, bottom.

- relative: Afecta la posición top, right, bottom,left y conserva su espacio.Tambien que solo toma una posicion o left o right.

- absolute: Afecta la posición pero no ocupa le espacio original y se posiciona con respecto al padre mas cercano que tenga una propiedad position diferente de static. Normlamente relative, Si no la encuentra usa el body.

- fixed: Posicionar un elemento en la pantalla cuestion que siempre este visible. No ocupa espacio y se posiciona respecto al navegador.

- Sticky: es un relative mientras esta en pantalla pero cuando scroleas y te vas se convierte en un fix.

Nota Si deseas agregar transparencia aun objeto se grega la propiedad opacity = 0,5.

Esta propiedad centra el elemento literalmente en el centro
```css
center{
    left:50%;
    transform:translate(-50%,-50%);
}
```