# Lenin_Pokemon_Onestic
Pequeño proyecto realizado por Lenin Raga Maravilla para la prueba de front-end de Onestic.

**Proyecto:** [https://github.com/LeninRM/Lenin_Pokemon_Onestic.git](https://github.com/LeninRM/Lenin_Pokemon_Onestic.git)

**GitHub Pages:** [https://leninrm.github.io/Lenin_Pokemon_Onestic](https://leninrm.github.io/Lenin_Pokemon_Onestic) (Puedes probarlo ahora, pero se recomienda leer primero)

Y ¿por qué front-end? La respuesta es muy sencilla: A pesar de que tenía conocimientos para desarrollar ambas pruebas (back-end y front-end), lo necesario para desarrollar la prueba de fron-end es justamente lo que estamos dando ahora en el ciclo superior, por lo que además de disfrutar con ello me ha servido para prepararme para los exámenes y ganar un poco de tiempo. Estudiar y trabajar no deja mucho margen libre.

## ¿QUÉ HERRAMIENTAS HE UTILIZADO?
- **Libreta** - Más vale un lápiz corto que una memoria larga
- **Figma** - Planteamiento, boceto e idea de diseño
- **Visual Estudio Code** - IDE
- **Bootstrap** - CSS framework
- **Angular** - TypeScript framework
- **Angular Materials** - Librería de componentes
- **Postman** - Interacción con la API
- **QuickType** - Interfaces para las respuestas de la API
- **PokéAPI** - Datos

## ¿POR QUÉ ESTAS HERRAMIENTAS?
- Todo proyecto requiere de un planteamiento inicial, siempre empiezo mis proyectos a golpe de lápiz, haciéndome una idea de cómo y con qué voy a trabajar, un pequeño esquema de los pasos a seguir y un cutre pero efectivo boceto que después se traducirá en un diseño. Para ello **Figma** nos ofrece herramientas geniales.
- En segundo lugar, el sistema de columnas que nos brinda **Bootstrap** es de lo más útil a la hora de organizar los componentes. Además de darnos la posibilidad de hacer uso de sus clases para posicionar las cosas a nuestro gusto. Es una buena base sobre la que partir, para luego dar los retoques con un poco de CSS.
- Por último decidí usar **Angular** como framework de Typescript por que es el que estamos aprendiendo a usar ahora mismo, hace apenas unos meses que empezamos con él y la verdad es que me siento bastante cómodo usándolo.
- **Postman** nos da muchas funcionalidades, entre ellas poder interactuar con las APIs, poder guardar peticiones, resultados etc.
- Gestionar las respuestas se hace mucho más sencillo usando interfaces, y **QuickType** es una gran herramienta para transformar esas respuestas en las interfaces que se necesitan para gestionarla correctamente.

## ¿QUÉ PASOS HE SEGUIDO EN EL DESARROLLO?
1. Esquema de ideas y elementos, boceto, diseño.
2. Crear los componentes y vistas principales.
3. Desarrollar el servicio que hace las peticiones HTTP a la API.
4. Desarrollar la vista LIST, crear la lógica, y el HTML/CSS básico de la misma.
5. Crear el servicio compartido para comunicar componentes al mismo nivel.
6. Comunicación entre navbar y vista para cambiar de lista a cuadrícula y añadir el paginado.
7. Crear el modal para el detalle.
8. Desarrollar la lógica para añadir los pokémon a favoritos usando localstorage.
9. Desarrollar la vista FAVORITES, junto a la lógica para recuperar los datos del localstorage.
10. Modo oscuro usando variables de CSS y el localstorage para mantenerlo.
11. Carrusel en el modal que muestra los detalles del pokémon.
12. Ajustes CSS más precisos para ir dejando los componentes a punto.

## ¿CÓMO DESPLEGAR LA APLICACIÓN?
He desplegado la aplicación en **GitHub Pages** para que se le pueda echar un vistazo ([Click aquí para verlo](https://leninrm.github.io/Lenin_Pokemon_Onestic)), pero si lo que se desea es probarla en local aquí dejo los pasos a seguir:

1. Empezaremos clonando el respositorio, en el terminal nos posicionaremos en el directorio donde queramos descargar el proyecto y usaremos git clone sobre la dirección mencionada anteriormente:

    `git clone https://github.com/LeninRM/Lenin_Pokemon_Onestic.git`
2. Desde el directorio del repositorio clonado ejecutaremos el siguiente comando para poner a punto nuestro proyecto:

    `npm install`
3. Después lanzaremos el siguiente comando para desplegar el proyecto:

     `ng serve` 
4. Por último, en el navegador accederemos a [localhost:4200](http://localhost:4200), la cual nos llevará al proyecto. (En caso de que dicho puerto estuviese en uso en la terminal se nos preguntará si queremos desplegarlo en un puerto distinto. Pulsamos “y” para aceptar, y nos indicará el puerto, que deberemos usar para acceder, ej: localhost:EL_PUERTO_INDICADO).

## ¿CÓMO MOVERSE POR LA APLICACIÓN?
El entrar podemos ver en la parte superior la barra de navegación, en el centro encontramos dos secciones, **LIST** y **FAVORITES**, y a la derecha encontramos dos botones uno para cambiar de **modo cuadrícula** a **modo lista**, y otro para alternar entre el **modo claro** y el **modo oscuro** (activo al entrar a la página).

Debajo de la barra de navegación encontramos la **barra de paginado**, en ella podremos seleccionar cuantos pokémon queremos por página, además de botones para cambiar a la primera y última página, anterior y siguiente.

En la vista **LIST**:

- En el contenido principal de la página nos encontramos una cuadrícula con los diferentes pokémon ( o una lista en caso de estar en modo lista). En ella podremos hacer click en cualquiera de ellos y se nos abrirá una **ventana emergente.**
- En la ventana emergente de detalles encontramos 3 partes:
    - **En la sección de arriba** encontraremos, además del nombre, una estrella, la cual podremos marcar y desmarcar para **añadir el pokémon a nuestra lista de favoritos**. Además encontramos un botón **X para cerrar la ventana**.
    - **En la sección central** se nos muestra la foto del pokémon en grande y sus caracterísiticas, como el tipo, habilidades, peso y altura (ambos en formato europeo).
    - Y **en la sección inferior** encontramos dos **botones para cambiar** al siguiente pokémon o al anterior sin necesidad de cerrar la ventana. A la derecha encontramos **otro botón de cerrar**, para que si el usuario navega en un dispositivo pequeño pueda tener siempre a mano la opción de cerrar la ventana.
    - Además si en cualquier momento se hace **click fuera de la ventana** emergente esta se cerrará también.

En la vista **FAVORITES**:

- Por último, si cambiamos a la vista **FAVORITES**, podemos ver los pokémon que hemos guardado en favoritos, **ordenados por el número de identificación**. Cada tarjeta del pokémon nos abrirá la misma ventana emergente que en la vista LIST, donde podremos **añadir y quitar al pokémon de la lista de favoritos**.

## PROBLEMAS Y SOLUCIONES
El principal problema fue la comunicación entre componentes. Es algo que tengo muy reciente puesto que lo hemos visto hace poco y todavía no lo tengo del todo asimilado, pero documentándome un poco pude resolverlo.

Durante el planteamiento del proyecto lo primero que me llamó la atención fue que había que guardar información, y eso era algo que no tenía claro como iba a hacer. Acabé recordando que en clase habíamos hecho uso del localstorage para almacenar algo, y por ello me decidí a usar ese método para persistir los datos.

Otra cosa que tengo muy reciente es la interacción con las APIs mediante peticiones HTTP, puesto que apenas hace unas semanas que las hemos visto en clase, pero me ha venido genial indagar en ello y practicar.

## ¿QUÉ PODRÍA HABER MEJORADO?
Debería haber aislado algunos componentes como por ejemplo el modal de detalle de los pokémon.

Organizar mejor el CSS, distribuirlo mejor entre los componentes para dejarle a cada uno el que le corresponda y usar menos el archivo global.

En el diseño a pesar de cumplir con las especificaciones podría haber quedado mucho mejor de haber invertido más tiempo. De igual forma estoy bastante contento de haber apostado por un diseño moderno y simple, el resultado aunque mejorable es intuitivo.

El testing, es algo que se me queda como pendiente, para indagar y aprender mejor sobre ello, es algo que apenas he tocado.


## SENSACIONES Y CONCLUSIONES
La mayoría de cosas que he usado en este proyecto las he aprendido recientemente en este segundo año del ciclo formativo, por lo que ha sido genial ponerlo en práctica todo junto, he disfrutado mucho de ver como las cosas iban saliendo, y poniendo a prueba de qué soy capaz. 

Sinceramente me hubiese gustado dedicarle más tiempo antes de presentarlo, cosa que seguro que haré como parte de proyecto personal, pero estando los exámenes a la vuelta de la esquina debo centrarme en ellos por el momento.

Sería genial poder desarrollarme profesionalmente en Onestic, pero si no fuese el caso simplemente dar las gracias, pase lo que pase lo he disfrutado mucho.

## LINKS PARA DOCUMENTACIÓN
- [Stackoverflow](https://stackoverflow.com)
- [W3Schools](https://www.w3schools.com/)
- [Angular](https://angular.io/)
- [Bootsrap](https://getbootstrap.com/)
- [Angular Material](https://material.angular.io/)
- [PokéAPI](https://pokeapi.co/)
