# FICHA TÉCNICA
## Fuente de los datos 
Ambas bases de datos (Tercera Generación (Base Alme) y Conciertos Tercera Generación) fueron **creadas y completadas por mí.**
1.Para la base *Tercera Generación (Base Alme)* (2012-2017) busqué en algunas páginas y saqué datos de Spotify, pero la app del computador. La lista completa de los grupos que forman parte de esta generación fueron recopilados de [**Wikipedia**](https://es.wikipedia.org/wiki/Anexo:Grupos_%C3%ADdolos_de_Corea_del_Sur), y también busqué en la página individual de cada grupo en [**Drama.fandom**](https://drama.fandom.com/es/wiki/Wiki) sí habían venido alguna vez al país. Ya con esta información, busqué en la aplicación de Spotify el número de oyentes mensuales. 


2.Para la base de los conciertos, las fuentes y sitios que ocupé fueron: de los tres grupos: [**BTS**](https://drama.fandom.com/es/wiki/BTS) ; [**TWICE**](https://drama.fandom.com/es/wiki/TWICE) y [**SEVENTEEN**](https://drama.fandom.com/es/wiki/SEVENTEEN). Y una lista larga de sitios para completar las columnas de precios de entradas. 

## Metodología de construcción

Con respecto a la *metodología de construcción*. En la *base 1 Tercera Generación (Base Alme)*, luego de traspasada la lista de Wikipedia, comencé a completar los datos que como grupo creímos relevantes, a la vez que limpié ciertos “errores” que tenía. 
Con la *base 2 Conciertos Tercera Generación*, cada hoja representa un listo completo de los conciertos dados por los tres grupos seleccionados. Luego se completó la información del país, ciudad, recinto, capacidad del lugar y los valores en dólares de la entrada más barata y cara del show. 
Al ser ambas bases una creación personal, no tuve que limpiar demasiados datos, sobre todo en la segunda. En la base de la tercera generación, me preocupé de borrar los pies de página que se copiaron del sitio web. 

## Alcance de datos 
Por la división del trabajo e investigación de cada integrante del grupo, mis datos obtenidos en la *base 1* tienen una *cobertura temporal* de 2012 hasta 2017. Ya en la *base 2* sobre los conciertos de tres grupos seleccionados la temporalidad abarca desde 2014 hasta 2025. 
Respecto al *alcance geográfico*, en la *base 1*, por obvias razones tiene un enfoque en Corea del Sur. Sobre la *base 2*, está intenta tener un alcance lo más global posible porque analiza los distintos países y ciudades que visitaron los tres grupos seleccionados. 

## Características de los datos 
Son datos para esta investigación son: procesados, de fuente abierta, estructurados. En su mayoría se intentó conseguir datos cuantitativos (años de actividad, número de miembros, oyentes mensuales, capacidad del recinto, precio entradas), pero también existen datos cualitativos (nombre del grupo, empresa a la que pertenecen, género del grupo, nombre del tour y nombre del recinto del concierto). 

## Variables incorporadas + descripción 

### Base 1 (Generación): 

*Variable: descripción*

- **Grupo:** Nombre del grupo 
- **Empresa:** Nombre de la empresa a la que pertenecen
- **Año debut:** Año en que el grupo debutó
- **Año fin:** Año en que el grupo terminó o si continúan juntos en la actualidad
- **Género:** Especificar si es un *girl group, boy group o un grupo mixto*
- **N°miembros:** Número de integrantes del grupo
- **Chile (Si/No):** Información sí el grupo ha dado un concierto en el país o no
- **Oyentes Spotify:** Con los grupos que sí visitaron chile, se obtuvo el número de oyentes mensuales que tienen en Spotify 

### Base 2 (Conciertos)

*Variable: descripción*

- **Nombre tour:** Nombre del tour del grupo
- **Año:** Año en que se realizó el concierto
- **Mes:** Mes del año (en número del 1 al 12)
- **País:** País donde se realizó el concierto
- **Ciudad:** Ciudad donde se realizó el concierto
- **Recinto:** Nombre del recinto del concierto
- **Capacidad:** Capacidad de personas del recinto 
- **Entrada más barata:** Precio en dólar de la entrada más barata del concierto 
- **Entrada más cara:** Precio en dólar de la entrada más cara del concierto

## Observaciones 
En varios conciertos, sobre todo en Corea del Sur y Japón, no encontré información sobre los precios de las entradas. En mi búsqueda de los conciertos más antiguos, en la mayoría me aparecía la venta del DVD o *merch* del concierto. Por esto, se rellenó con “Sin datos”. 

Para facilitar la clasificación, todos los precios fueron pasados de la moneda local del país a **dólares**. Esto con el propósito de unificar los precios y poder compararlos de manera más sencilla. Cabe mencionar que los precios no incluyen los cargos extras *(cargo por servicio o tax)* ni tampoco los gastos adicionales como pueden ser: la membresía del grupo ni lightstick. 
