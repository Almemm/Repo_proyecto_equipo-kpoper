# __Documentación__ 

## *__Sobre la base utilizada:__* 

La base de datos que seleccioné para esta entrega corresponde a una __unión de 3 bases de datos__ creadas por cada una de las integrantes del grupo sobre los conciertos de los 3 grupos con más oyentes que hayan venido a Chile. En este caso, la base __cuenta con 10 grupos__ (ya que de la primera generación no vino ningún grupo a Chile y de la quinta solo uno). 

Se completaron ciertas columnas (en mi caso personal agregar los precios), se ordenó el formato (para que todas las bases queden iguales en forma, orden y nomenclatura utilizada) y se __agregó la columna de “MERCADO”__ (América Latina, América del Norte, Asia, Brasil, China, Corea del Sur, Estados Unidos, Europa, Japón, México, Oceanía y Sudeste asiático) en base a sugerencias de la entrega 02, todo hecho en Excel. 

Ya con la base lista, se descargó en formato csv para comenzar con el proceso de creación de la visualización. 


## *__Sobre la visualización:__* 

Para crear la visualización, se utilizó Google Colab, para cumplir con el formato de “Jupyter Notebook”. 

Primero se importó la base de datos como se indicaba en el archivo del material de clase (utilizando la galería *panda* para leer el csv). 

Luego se creó un *dataframe* (estructura de datos a utilizar en la visualización). En este caso, me hice la pregunta “¿qué necesito para lo que quiero ver?”, seleccionando la columna de “GRUPO” (para tener los nombres de los grupos seleccionados), “MERCADO” (que es lo que me interesa analizar con la pregunta: ¿A qué mercado se dirige más el K-POP?)  y “PAÍS”, usando esta última como una opción para contar la cantidad de veces que los grupos estuvieron en cierto mercado. 

Con eso hecho, se procedió a crear la visualización con ayuda del material de clases respecto a este tema, seleccionando colores que ayudaran a comprender el gráfico de barras que en este caso quise crear. 

Para que no se me duplicaran ciertos items a la hora de visualizar, ChatGPT me mostró códigos a utilizar para solucionar el problema. 

Luego se exportó e formato *html*, también con ayuda del material de clases. Posteriormente, se descargó en png y se pasó a JPG con un conversor online de archivos. 

 

## *__Preguntas a responder con la visualización:__* 

Esta visualización nos permite contestar diversas preguntas. La principal (con la cual trabajé principalmente para crear la visualización) es: ¿Qué mercado es el más explorado o al que más apuntan los grupos de K-POP?  

Viendo el gráfico, me doy cuenta enseguida de que la respuesta es Japón, seguido de Estados Unidos. 

Otras preguntas que también se pueden contestar con la visualización son: 

- ¿Qué mercado es el menos explorado por grupos de K-POP (Otros países asiáticos, no los grandes). 

- ¿Latinoamérica es uno de los principales mercados para grupos de K-POP? (No). 

- ¿Qué grupo ha visitado más Japón? (SHINee) 

- La misma pregunta de arriba, solo que seleccionando otro mercado o el grupo que menos ha visitado ese mercado (Se observa con ayuda de los colores que diferencian a los grupos). 