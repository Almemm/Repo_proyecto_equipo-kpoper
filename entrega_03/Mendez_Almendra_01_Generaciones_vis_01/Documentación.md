## Base de datos seleccionada 

Para mi visualización utilicé la base de las **generaciones de Kpop** y sus respectivos grupos. El por qué la seleccioné fue por dos razones: 
1.	En la entrega anterior una de las preguntas que me planté fue > En la tercera generación ¿Hubo más grupos femeninos, masculinos o mixtos?. 
2.	Y por un comentario de la profe Trinidad, donde mencionaba que esta base de datos quedó opacada en la entrega 2 y que igualmente, aquí teníamos información que podría resultar muy interesante de trabajar. 

Sin embargo, para lograr una visualización completa, la base tuvo que pasar por cambios para lograr su procesamiento. Aquí detallaré los pasos que realicé: 
1.	En una nueva hoja de excel se copió toda la información obtenida de cada una de las generaciones con el objetivo de crear una **gran y única** base de datos del Kpop y sus generaciones. 
2.	Para eso, se creó una nueva columna para detallar y filtrar los grupos por generaciones. 
3.	Se arreglaron algunos errores de los datos de la gen 1 y 2 porque tenía una columna extra que complicaba el orden de la información 
4.	Los grupos que siguen activos hasta la fecha se les reemplazo: "presente" por 2025 y así evitar tener tanto texto/palabras en la visualización de datos
5.	Se arregló un error en la columna del número de los miembros
6.	Se añadió una nueva columna, "PERIODO" para otra posible visualización de datos para mostrar si los grupos duraban más antes o ahora
7.	Cambié algunos nombres de las columnas, que en intentos pasados de visualización me generaban problemas ("GÉNERO" > "GENERO", "AÑO_DEBUT", "AÑO_FIN")
8.	En la columna de género, había un error (hombre) por lo que habían cuatro categorías. Se encontró el error y se corrigió 
9.	Por última vez, se realizó una revisión para evitar nuevos conflictos con la base. 

## Bitácora de trabajo 
### Día 1
- En un vídeo de [YouTube>minuto 19:55](https://www.youtube.com/watch?v=cKWPg4ukg3Q&list=PLmb4BKXLetJBQa_M8mvvN51KoiN3nJ1h1&index=1&ab_channel=SimplificandoDatos) vi una visualización/gráfico que me gustó bastante, así que copié manualmente el código para usarlo.
- Subí la nueva base de datos y comencé el código con import pandas as pd y el resto 
- Me arrojó error con la columna de género, así que busque y se puede cambiar o modificar a través de códigos >> **GEN["GENERO"] = GEN["GENERO"].map({"mujeres": "Femenino", "hombres": "Masculino"})**
- Me volvió a salir otro error, en el código de YT sale "rangeStep", pero en internet encontré que por una actualización de altair se debe cambiar por "band", aunque al cambiarlo y correr el código tampoco funcionó
- Seguí corrigiendo los errores que me salían al correr, y lo iba cambiando, pero estuve así harto rato.
- Cree un nuevo notebook en colab para no perder los intentos anteriores y tampoco confundirme. 
- Le pregunté a copilot, sí para mi idea de visualización era necesario filtrar entre 1990 y 2025 + si me convenía usar la columna "Años" o "Año_debut", y me dio un código.
- Comencé un nuevo cuadro de código, y copié paso a paso, desde importar nuevamente la base de datos, agregar las sugerencias de copilot (filtrar los años+ agrupar y contar los grupos por año de debut). 
- Ya de ahí, copié el código del vídeo con el "brush selection"
- Así, hasta terminar con el concatenar las gráficas 
- Nuevamente, me salió error, pero esta vez, apreté la opción de "explicar error", y me dio la opción de copiar y crear un nuevo cuadro de código con las correcciones sugeridas
- Me fui por esa opción 
- Al correrlo, quedó parecido a lo que tenía en mente, pero hay algunos errores. Por ejemplo, en la columna de la derecha de género me aparecen 4 colores (hombre, hombres, mixto y mujeres)
- Además, mi visualización no tiene elementos de interactividad. Sobre todo, porque en el vídeo tutorial uno podía moverse por el gráfico de barras y se venían los puntos correspondientes a los años. 
- También, creo que los números están pequeños y cuesta ver bien las cifras. Así que ahora toca corregir esos detalles. 
- Se corrigió el error en la base de datos donde salía (**hombre** y no **hombres**)

### Día 2

- [Búsqueda y lectura en Altair](https://altair-viz.github.io/altair-tutorial/notebooks/06-Selections.html) para lograr interacciones, y otros detalles visuales al mi trabajo. 
- De los ejemplos, en el sitio. Seleccioné (tomando en cuenta también el vídeo inspo >>brush selection) el: **Interval selection** 
- También se usó el mouseover 
- Luego de subir la base de datos corregida, cambié la ruta del csv en el código original, en ese, donde no estaban elementos de interactividad 
- Copié el código, y agregué los patrones para la nueva versión 
- Luego de correrlo, funcionó la visualización. 
- Igualmente, verifiqué al azar las cifras que me mostró para confirmar que todo estuviera correcto. 
- Luego, hice todos los pasos para descargar la visualización en formato html 
- Abrí en Chrome, la descarga y desde ahí descargué la foto de la visualización

## Ejemplos de preguntas que se pueden responder 

- ¿Cómo ha ido aumentando el número de grupos femeninos en el Kpop desde 1990? 
- ¿Los grupos mixtos han tenido un aumento sostenido o han sido menos comunes (populares) en comparación con grupos femeninos o masculinos? 
- ¿En que año debutaron más grupos femeninos, masculinos y mixtos? 
