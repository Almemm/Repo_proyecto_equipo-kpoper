# Ficha tecnica

## Fuente de los datos

Ambas bases de datos que utilicé (la base de datos general de los grupos y de las generaciones del K-pop, y la base de datos limpia) fueron creadas a partir de información recopilada manualmente desde múltiples medios. La primera base se construyó usando el artículo de Wikipedia que clasifica los grupos por generación. Luego, se añadió manualmente una columna que indicaba si esos grupos habían venido a Chile o no.  
Además de trabajar con la segunda generación, también construí la parte correspondiente a la primera generación. Sin embargo, como ninguno de esos grupos se ha presentado en Chile, no se realizó una limpieza de datos con esos grupos.

---

## Metodología de construcción

Para la base de grupos, descargamos y adaptamos una base de datos con el listado de generaciones del K-pop. Luego, nos dividimos las generaciones, y así, después fuimos completando manualmente el resto de las columnas (como si vinieron a Chile o no).  
Los grupos de la segunda generación que se eligieron, se vio basado en su relevancia internacional y en si se habían presentado en Chile.

En cuanto a la base de conciertos, la información fue organizada por grupo (**SHINee**, **Girls’ Generation** y **Super Junior**), en donde cada fila representa un concierto. Se incluyeron variables como año, país, ciudad, nombre del tour, tipo de evento, capacidad del recinto y precios (cuando fue posible encontrarlos). Todos los datos fueron completados en Excel, realizando su respectiva limpieza de datos.

---

## Alcance de los datos

La cobertura temporal abarca desde **2008 hasta 2024** (algunos pocos hasta 2025), tomando en cuenta desde los primeros tours internacionales hasta los eventos más recientes realizados por los tres grupos.  
En las tablas se incluyeron conciertos realizados en Asia, Europa y América, así lográndose generar una mirada más completa y permitir una comparación más amplia.

---

## Características de los datos

Los datos son **estructurados, abiertos y procesados manualmente**. Se trabajó con información cuantitativa (fechas, capacidad, precios) y cualitativa (nombre del grupo, ciudad, tipo de evento, tour). Los precios encontrados de los conciertos fueron convertidos a dólares estadounidenses para facilitar comprensión y comparación.  

Aunque fue un proceso largo y detallado, **me pareció muy interesante porque uno verdaderamente podía darse cuenta de la historia que se podía encontrar detrás de los datos**: cómo han evolucionado los conciertos, cómo cambió la cantidad de los eventos, y cómo el K-pop fue abriéndose camino por todo el mundo, esto incluyendo a Chile.

---

## Variables incorporadas + descripción

**Base 1: Grupos por generación**
- **Grupo**: Nombre oficial del grupo de K-pop.
- **Generación**: Generación a la que pertenece según la clasificación del K-pop.
- **Género**: Boy group, girl group o mixto.
- **País de origen**: En todos los casos es Corea del Sur.
- **¿Vino a Chile?**: Si el grupo se ha presentado alguna vez en Chile (Sí/No).

**Base 2: Conciertos de segunda generación**
- **Grupo**: SHINee, Girls’ Generation o Super Junior.
- **Tipo de evento**: Concierto, fanmeeting, festival o showcase.
- **Año**: Año en que se realizó el evento.
- **Mes**: Mes numérico del evento (1–12).
- **País**: País en el que se llevó a cabo.
- **Ciudad**: Ciudad donde se realizó.
- **Recinto**: Lugar del evento (estadio, teatro, arena, etc.).
- **Capacidad**: Número aproximado de asistentes que caben en el recinto.
- **Entrada más barata**: Precio de la entrada más económica en dólares.
- **Entrada más cara**: Precio de la entrada más cara en dólares.
- **Nombre del tour**: Nombre oficial de la gira o evento.

---

## Observaciones

En varios conciertos, especialmente los más antiguos y en países como Corea del Sur y Japón, no fue posible encontrar mucha información sobre los precios de entrada. En estos casos decidí dejar “N/A” en las columnas correspondientes.
