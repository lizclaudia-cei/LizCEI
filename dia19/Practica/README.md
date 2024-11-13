# Práctica de DW

0. Crear un ejemplo nuevo en la carpeta "dia19/dw-party", y crear las carpetas "css" e "imgs" dentro de ella. Crear el archivo index.html con título "Práctica Diseño Web - Web Party de DW" y vincular el archivo CSS externo.

1. `Layout Principal:` Crear un HTML con un layout de grid con 3 columnas y 3 filas, con un header, un main, un sidebar y un footer. Características:

- el `header` debe ocupar toda la fila superior y ser de 100px.
- el `main` debe tener la clase contenido y ocupar 2/3 de la fila central.
- el `sidebar` debe tener la clase sidebar y ocupar 1/3 de la fila central.
- el `footer` debe ocupar toda la fila inferior y ser de 100px.
- la fila central debe ocupar todo el espacio posible, dejando el footer en la parte inferior de la pantalla


2. Utiliza flexbox para centrar el contenido de cada componente.
- El header debe tener 2 elementos, un texto "header" y un botón. Centrados verticalmente, y con la mayor cantidad de espacio posible entre ellos.
- El footer y sidebar deben tener un texto "footer" y "sidebar" respectivamente, centrados verticalmente y horizontalmente.
- Todos con un padding de 10px.


3. Crear dentro del main 3 secciones "hero", "container" y "galeria" con las siguientes características:

- `Hero:` Dentro de esta sección con clase "hero" incluir una imágen centrada y con sombra (investigar la propiedad filter, drop-shadow), y un título que diga "Web Party DW!". Ambos con su clase correspondiente en BEM.

- `Container:` Dentro de esta sección con clase "container" incluir otro div dentro con clase "container__caja" y el texto "Hazme Click". Al hacer hover sobre este div, debe cambiar de angulo 90 grados, con una transición de 1 segundo.

- `Galería:` Dentro de esta sección con clase "galeria" incluir otro grid con 8 imagenes de 600x400 con el texto imágen 1, imágen 2, etc.. (puedes usar las de https://placehold.co/ para ayudarte). Las mismas deben estar en 3 columnas con un gap de 10px entre cada una.


# JavaScript

1. `Click`: Obtner el elemento container__caja y agregarle un evento click que al hacer click sobre el mismo, cambie su texto a "Me han activado!" y que cambié su color usando la clase `isActivated`.

2. `Modo Oscuro:` En el header agregar un botón con id `btn-claro-oscuro` para cambiar la web de modo claro a oscuro y viceversa.

3. En el sidebar crear un acordeón con 3 elementos, que al hacer click sobre cada uno, muestre un texto diferente. Al hacer click sobre otro, el anterior debe cerrarse.