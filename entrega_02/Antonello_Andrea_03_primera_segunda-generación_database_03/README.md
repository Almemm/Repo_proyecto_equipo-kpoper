# Documentación del proceso de limpieza de datos


## Encontrar los datos

Uno de nuestros principales desafíos para la realización de este trabajo fue la inexistencia de una base de datos oficial o consolidada sobre conciertos de K-pop, sobre todo con información específica sobre su llegada a Chile. Por nuestra hipótesis supimos que teníamos que abordar la relación entre el K-pop y América Latina, con foco principal estando en Chile, por esto era vital identificar qué grupos habían hecho conciertos en nuestro territorio. 

Mientras investigamos, nos enfrentamos con la realidad de que las bases de datos que ya existían, además de ser pocas, no cumplían con nuestras necesidades. Esta razón nos obligó a construir nuestra base desde cero. Esto lo hicimos con la ayuda de Wikipedia, recolectamos estos datos sobre los grupo de K-Pop agregando el criterio de si vinieron a chile o no, ya que a través de esa variante elegiríamos nuestros grupos para trabajar la hipótesis

Yo realice las tablas de la primera generación y de la segunda generación, así fue como descubrimos que **ningún grupo de la primera generación** había realizado conciertos en el país, lo que ya era un hallazgo en sí mismo. Luego, centrándonos en la segunda generación —época clave para la internacionalización del género—, decidimos trabajar con **SHINee, Girls’ Generation y Super Junior**, que sí tuvieron una presencia significativa tanto en Chile como a nivel internacional.

## Creación y limpieza de la tabla

La tabla está organizada bajo los criterios de; el tipo de evento, año, mes, país, ciudad, lugar del evento, capacidad de recinto, precio de las entradas y en que contexto se realizó esta presentación. Así terminamos en un lugar en donde cada fila representa un evento específico. Uno de los principales desafíos fue la diferencia de la cantidad de información de algunos eventos, contra otros: mientras algunos conciertos tenían datos completos (incluyendo capacidad del recinto y precios de entradas), otros solo ofrecían la ciudad y fecha. Este trabajo implicó una limpieza manual y cuidadosa para llegar a los resultados requeridos.

El proceso también incluyó:
- Eliminar duplicados y registros mal ingresados.
- Corregir nombres con errores ortográficos o inconsistencias (como “corea” vs “Corea del Sur”).
- Transformar los precios a dólares.
- Normalizar fechas en formato año-mes.
- Utilizar "N/A" en entradas donde los datos no estaban disponibles de forma confiable.

Una vez completada esta fase, convertí el archivo de Excel a formato CSV para poder cargarlo en un notebook de Google Colab y comenzar a analizarlo con Pandas.

## Decisiones importantes

Una decisión fundamental fue **usar “N/A” para los campos donde no fue posible encontrar precios o capacidad del recinto**. Esto se debió a la antigüedad de algunos eventos o la falta de registros oficiales. 

## Fuentes utilizadas

### Principales:
SHINNee
- https://es.wikipedia.org/wiki/Shinee 
- https://es.wikipedia.org/wiki/Super_Junior 

Girls Generation
- https://es.wikipedia.org/wiki/Girls%27_Generation 
- https://drama.fandom.com/es/wiki/SHINee 

Super Junior
- https://drama.fandom.com/es/wiki/Super_Junior 
- https://drama.fandom.com/es/wiki/Girls%27_Generation 

### Complementarias:
- https://concertarchives.org/ 
- https://x-clusive.sg/2013/08/2013-girls-generation-world-tour-girls-peace-in-singapore-on-12th-october/ 
- https://www.soompi.com/article/363098wpp/girls-generations-first-japanese-arena-concert-a-sellout-success 
- https://girls-generation.fandom.com/wiki/The_1st_Japan_Arena_Tour 
- https://www.soompi.com/es/article/128471wpp/shinee-world-concert-iii-en-chile-agota-dos-localidades-completas 
- https://www.latercera.com/noticia/shinee-la-banda-de-k-pop-que-desato-la-locura-en-la-venta-de-entradas-previo-a-su-debut-en-chile/ 
- https://mredwardsanders.wordpress.com/2017/12/15/171215-shinee-world-the-best-2018-from-now-on-concerts-will-be-held-at-tokyo-dome%E3%83%BBkyocera-dome/ 
- https://weverse.io/superjunior/notice/19107 
- https://es.wikipedia.org/wiki/Super_Show_7_Tour 

## Ejemplos de preguntas que se pueden responder con la base limpia

1. **¿Por qué varios grupos tienen más conciertos en Japón que en Corea del Sur?** 
2. **¿Latinoamérica podría llegar a tener una presencia sostenida de conciertos como en Asia?** 
3. **¿Cuál fue el punto de inflexión que llevó a los grupos de K-pop a realizar giras mundiales?**
