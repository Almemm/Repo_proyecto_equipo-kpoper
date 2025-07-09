# FICHA TÉCNICA
## Fuente de los datos 
Ambas bases de datos **Base_conciertos** y **Base_grupos** fueron creadas de manera grupal y durante la primera parte del semestre sufrieron algunas modificaciones (se añadieron o sacaron columnas). Por ejemplo, para la realización de las visualizaciones se unificaron los trabajos que cada integrante había hecho por separado para dejar *2 grandes bases* que nos ayudaran a mostrar descubrimientos con respecto a nuestra hipótesis. 


1.Para la **Base_grupos** (1990-2025) se buscó información en páginas de fanáticos y datos de Spotify, específicamente la aplicación del computador. Para obtener la lista completa de los grupos en la historia del K-pop, la información fue recopilada de [**Wikipedia**](https://es.wikipedia.org/wiki/Anexo:Grupos_%C3%ADdolos_de_Corea_del_Sur). Pero también, cada integrante con sus respectivas generaciones, buscó en la página individual de cada grupo en [**Drama.fandom**](https://drama.fandom.com/es/wiki/Wiki) sí habían venido alguna vez al país. Ya con esta información y con el propósito de realizar un segundo filtro se buscó en la aplicación de Spotify el número de oyentes mensuales, donde se terminó por seleccionar a los grupos que sí vinieran a Chile y estuvieran dentro del top 3 de mayores oyentes mensuales.  


2.Para la **base de los conciertos**, nuevamente, cada integrante buscó en las Wiki de cada uno de los 10 grupos seleccionados su historial de conciertos (nombre del tour, año, mercado, país, ciudad, recinto, etc.). Para luego, recopilar la mayor información posible sobre los precios que tuvieron las entradas a conciertos de dichos grupos. 

>Importante: Luego de un profundo análisis, se decidió excluir de algunas visualizaciones (en Google Colab) los precios extremos que se mostraba en la base de datos. Esta información se encuentra también señalada en las crónicas de las dos integrantes (Almendra y Daniela).



## Metodología de construcción

Con respecto a la *metodología de construcción*. En la *Base_grupos*, luego de traspasada la lista de Wikipedia, se comenzó a completar los datos que como grupo creímos relevantes, a la vez que se "limpió" ciertos “errores” que tenía. 

Con la *Base:conciertos*, luego de la recopilación de la información relevante que cada integrante buscó de manera personal (país, ciudad, recinto, capacidad del lugar y los valores en dólares de la entrada más barata y cara del show). Se unificaron las tres bases de datos de conciertos para tener una única gran base. Finalmente, el último paso fue dejar toda la información de precios en un mismo formato que no tuviera texto para facilitar los siguientes trabajos. 


## Alcance de datos 
Por la división del trabajo e investigación de cada integrante del grupo, los datos obtenidos en la *base_grupos* tienen una *cobertura temporal* de 1990 hasta 2025. Ya en la *base_conciertos* sobre los conciertos de los 10 grupos seleccionados la temporalidad abarca desde 2010 hasta 2025. 
Respecto al *alcance geográfico*, en la *base_grupos*, por obvias razones tiene un enfoque en Corea del Sur. Sobre la *base_conciertos* está intenta tener un alcance lo más global posible porque analiza los distintos países y ciudades (que fueron agrupados según el mercado al que pertenecen) y que visitaron los grupos seleccionados. 

## Características de los datos 
Son datos para esta investigación son: procesados, de fuente abierta, estructurados. En su mayoría se intentó conseguir datos cuantitativos (años de actividad, número de miembros, oyentes mensuales, capacidad del recinto, precio entradas), pero también existen datos cualitativos (nombre del grupo, empresa a la que pertenecen, género del grupo, nombre del tour y nombre del recinto del concierto). 

## Variables incorporadas + descripción 

### Base_grupos: 

*Variable: descripción*

- **Grupo:** Nombre del grupo 
- **Empresa:** Nombre de la empresa a la que pertenecen
- **Año debut:** Año en que el grupo debutó
- **Año fin:** Año en que el grupo terminó o si continúan juntos en la actualidad
- **Género:** Especificar si es un *girl group, boy group o un grupo mixto*
- **N°miembros:** Número de integrantes del grupo
- **Chile (Si/No):** Información sí el grupo ha dado un concierto en el país o no
- **Oyentes Spotify:** Con los grupos que sí visitaron chile, se obtuvo el número de oyentes mensuales que tienen en Spotify 

### Base_conciertos:

*Variable: descripción*

- **Nombre grupo**: Nombre del grupo 
- **Nombre tour:** Nombre del tour del grupo
- **Año:** Año en que se realizó el concierto
- **Mes:** Mes del año (en número del 1 al 12)
- **Mercado**: Mercado músical al que pertenece el país visitado
- **País:** País donde se realizó el concierto
- **Ciudad:** Ciudad donde se realizó el concierto
- **Recinto:** Nombre del recinto del concierto
- **Capacidad:** Capacidad de personas del recinto 
- **Entrada más barata:** Precio en dólar de la entrada más barata del concierto 
- **Entrada más cara:** Precio en dólar de la entrada más cara del concierto
