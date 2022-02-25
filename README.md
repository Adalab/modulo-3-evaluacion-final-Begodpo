# Ejercicio de evaluación de Adalab, módulo de React

[Echa un vistazo al proyecto](https://begodpo.github.io/harry-potter/)

## Enunciado

El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

### 1. Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Harry Potter. Para eso, vamos a
utilizar el servicio de https://hp-api.herokuapp.com/ que nos devuelve información sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece. Sobre cada uno, vamos a pintar al menos:

- Foto
- Nombre
- Especie

**Imágenes**
Algunas de los personajes que devuelve el API no tienen imagen (como, por ejemplo, los Dursley: Vernon
Dursley, Petunia Dursley, ... o James Potter). En ese caso hay que mostrar una imagen de relleno. Podemos
crear una imagen de relleno con el servicio de placeholder.com donde en la propia URL indicamos el
tamaño, colores, texto: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter, o puedes usar
tu creatividad...

### 2. Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
escribir 'h' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
**Nota**: en principio no es necesario tener en cuenta si las letras están en mayúscula / minúscula para
la búsqueda, pero si queréis añadir esta mejora pues genial.

### 3. Filtrado por casa

Ahora que ya tenemos el listado de personajes en pantalla, y filtrado por nombre la siguiente parte consiste
en poder buscarlos por casa. Para eso, añadimos un select a la interfaz, de forma que al seleccionar una
casa queden en la interfaz solo los personajes cuya casa es la seleccionada.
**Nota**: Por defecto, cuando carga la página debe aparecer la casa gryffindor.

### 4. Componentes del listado de personajes

El listado debe tener los siguientes componentes como mínimo:

- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado.
- Componente para el detalle de cada personaje.

### 5. Detalle de personajes

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre, la casa a la que pertenece , si está vivo o muerto, género,
especie y los nombres alternativos en caso de que los tenga

![Ejemplo de tarjeta](src/images/card_example.png)

**Nota**: no recomendamos mostrar el detalle del personaje con una ventana modal por encima del
listado del personaje porque es más complejo. Es mejor quitar el componente CharacterList y
mostrar el componente CharacterDetail usando React Router.
