 function toggleInfo(boton) {
      const simbolo = boton.querySelector(".simbolo");
      const contenido = boton.nextElementSibling;

      const estaAbierto = contenido.classList.toggle("abierto");
      simbolo.textContent = estaAbierto ? "−" : "+";
    }


(function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}, "axis": {"labelFont": "Gowun Dodum", "titleFont": "Gowun Dodum"}, "legend": {"labelFont": "Gowun Dodum", "titleFont": "Gowun Dodum"}, "title": {"font": "Gowun Dodum"}}, "hconcat": [{"data": {"name": "data-a786da24a5801dbed0bacbe78b3cacba"}, "mark": {"type": "bar"}, "encoding": {"color": {"field": "Color", "legend": null, "scale": null, "type": "nominal"}, "opacity": {"condition": {"param": "param_15", "value": 0.9}, "value": 0.1}, "order": {"field": "GENERO", "sort": "ascending", "type": "nominal"}, "tooltip": [{"field": "A\u00d1O_DEBUT", "type": "quantitative"}, {"field": "Cantidad", "type": "quantitative"}, {"field": "GENERO", "type": "nominal"}, {"field": "Etiqueta", "type": "nominal"}], "x": {"axis": {"title": "A\u00f1o de debut"}, "field": "A\u00d1O_DEBUT", "type": "ordinal"}, "y": {"field": "Cantidad", "title": "Cantidad de grupos", "type": "quantitative"}}, "name": "view_3"}, {"layer": [{"mark": {"type": "rect", "height": 20, "width": 20}, "encoding": {"color": {"field": "Color", "scale": null, "type": "nominal"}, "y": {"axis": null, "field": "Etiqueta", "sort": ["Primera generaci\u00f3n", "Segunda generaci\u00f3n", "Tercera generaci\u00f3n", "Cuarta generaci\u00f3n", "Quinta generaci\u00f3n"], "title": null, "type": "nominal"}}, "title": "Colores por generaci\u00f3n"}, {"mark": {"type": "text", "align": "left", "dx": 25}, "encoding": {"text": {"field": "Etiqueta", "type": "nominal"}, "y": {"field": "Etiqueta", "sort": ["Primera generaci\u00f3n", "Segunda generaci\u00f3n", "Tercera generaci\u00f3n", "Cuarta generaci\u00f3n", "Quinta generaci\u00f3n"], "type": "nominal"}}}], "data": {"name": "data-6fc93e1a45e3d0ea6d11817c9ae1dcfd"}, "height": 120, "width": 150}], "params": [{"name": "param_15", "select": {"type": "interval", "encodings": ["x"]}, "views": ["view_3"]}, {"name": "param_16", "select": {"type": "point", "fields": ["A\u00d1O_DEBUT"], "on": "mouseover"}, "views": ["view_3"]}], "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-a786da24a5801dbed0bacbe78b3cacba": [{"A\u00d1O_DEBUT": 1990, "GENERO": "Hombres", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1992, "GENERO": "Hombres", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1992, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 1993, "GENERO": "Hombres", "Cantidad": 2, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1994, "GENERO": "Hombres", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1994, "GENERO": "Mixto", "Cantidad": 4, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 1995, "GENERO": "Hombres", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1996, "GENERO": "Hombres", "Cantidad": 2, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1996, "GENERO": "Mixto", "Cantidad": 2, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 1997, "GENERO": "Hombres", "Cantidad": 4, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1997, "GENERO": "Mujeres", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 1998, "GENERO": "Hombres", "Cantidad": 4, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1998, "GENERO": "Mixto", "Cantidad": 2, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 1998, "GENERO": "Mujeres", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 1999, "GENERO": "Hombres", "Cantidad": 5, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 1999, "GENERO": "Mujeres", "Cantidad": 4, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 2000, "GENERO": "Hombres", "Cantidad": 2, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 2000, "GENERO": "Mujeres", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 2001, "GENERO": "Hombres", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 2001, "GENERO": "Mixto", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 2001, "GENERO": "Mujeres", "Cantidad": 7, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 2002, "GENERO": "Hombres", "Cantidad": 5, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#ab6376"}, {"A\u00d1O_DEBUT": 2002, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#bf8997"}, {"A\u00d1O_DEBUT": 2002, "GENERO": "Mujeres", "Cantidad": 3, "Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#d4aeb8"}, {"A\u00d1O_DEBUT": 2003, "GENERO": "Hombres", "Cantidad": 8, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2003, "GENERO": "Mujeres", "Cantidad": 1, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2004, "GENERO": "Hombres", "Cantidad": 1, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2004, "GENERO": "Mujeres", "Cantidad": 1, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2005, "GENERO": "Hombres", "Cantidad": 9, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2005, "GENERO": "Mujeres", "Cantidad": 6, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2006, "GENERO": "Hombres", "Cantidad": 6, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2006, "GENERO": "Mixto", "Cantidad": 2, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#aaa6c9"}, {"A\u00d1O_DEBUT": 2006, "GENERO": "Mujeres", "Cantidad": 3, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2007, "GENERO": "Hombres", "Cantidad": 7, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2007, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#aaa6c9"}, {"A\u00d1O_DEBUT": 2007, "GENERO": "Mujeres", "Cantidad": 6, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2008, "GENERO": "Hombres", "Cantidad": 11, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2008, "GENERO": "Mujeres", "Cantidad": 3, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2009, "GENERO": "Hombres", "Cantidad": 8, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2009, "GENERO": "Mixto", "Cantidad": 2, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#aaa6c9"}, {"A\u00d1O_DEBUT": 2009, "GENERO": "Mujeres", "Cantidad": 13, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2010, "GENERO": "Hombres", "Cantidad": 19, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2010, "GENERO": "Mixto", "Cantidad": 6, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#aaa6c9"}, {"A\u00d1O_DEBUT": 2010, "GENERO": "Mujeres", "Cantidad": 16, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2011, "GENERO": "Hombres", "Cantidad": 24, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#837eb1"}, {"A\u00d1O_DEBUT": 2011, "GENERO": "Mixto", "Cantidad": 3, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#aaa6c9"}, {"A\u00d1O_DEBUT": 2011, "GENERO": "Mujeres", "Cantidad": 37, "Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#d1cfe2"}, {"A\u00d1O_DEBUT": 2012, "GENERO": "Hombres", "Cantidad": 41, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2012, "GENERO": "Mixto", "Cantidad": 2, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#778ebc"}, {"A\u00d1O_DEBUT": 2012, "GENERO": "Mujeres", "Cantidad": 45, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2013, "GENERO": "Hombres", "Cantidad": 39, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2013, "GENERO": "Mujeres", "Cantidad": 28, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2014, "GENERO": "Hombres", "Cantidad": 42, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2014, "GENERO": "Mixto", "Cantidad": 3, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#778ebc"}, {"A\u00d1O_DEBUT": 2014, "GENERO": "Mujeres", "Cantidad": 50, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2015, "GENERO": "Hombres", "Cantidad": 31, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2015, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#778ebc"}, {"A\u00d1O_DEBUT": 2015, "GENERO": "Mujeres", "Cantidad": 44, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2016, "GENERO": "Hombres", "Cantidad": 24, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2016, "GENERO": "Mixto", "Cantidad": 3, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#778ebc"}, {"A\u00d1O_DEBUT": 2016, "GENERO": "Mujeres", "Cantidad": 49, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2017, "GENERO": "Hombres", "Cantidad": 41, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#5371a9"}, {"A\u00d1O_DEBUT": 2017, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#778ebc"}, {"A\u00d1O_DEBUT": 2017, "GENERO": "Mujeres", "Cantidad": 49, "Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9cadce"}, {"A\u00d1O_DEBUT": 2018, "GENERO": "Hombres", "Cantidad": 27, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#3f9ca9"}, {"A\u00d1O_DEBUT": 2018, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#59b4c1"}, {"A\u00d1O_DEBUT": 2018, "GENERO": "Mujeres", "Cantidad": 32, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7ec5cf"}, {"A\u00d1O_DEBUT": 2019, "GENERO": "Hombres", "Cantidad": 31, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#3f9ca9"}, {"A\u00d1O_DEBUT": 2019, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#59b4c1"}, {"A\u00d1O_DEBUT": 2019, "GENERO": "Mujeres", "Cantidad": 24, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7ec5cf"}, {"A\u00d1O_DEBUT": 2020, "GENERO": "Hombres", "Cantidad": 32, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#3f9ca9"}, {"A\u00d1O_DEBUT": 2020, "GENERO": "Mixto", "Cantidad": 3, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#59b4c1"}, {"A\u00d1O_DEBUT": 2020, "GENERO": "Mujeres", "Cantidad": 29, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7ec5cf"}, {"A\u00d1O_DEBUT": 2021, "GENERO": "Hombres", "Cantidad": 14, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#3f9ca9"}, {"A\u00d1O_DEBUT": 2021, "GENERO": "Mixto", "Cantidad": 1, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#59b4c1"}, {"A\u00d1O_DEBUT": 2021, "GENERO": "Mujeres", "Cantidad": 18, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7ec5cf"}, {"A\u00d1O_DEBUT": 2022, "GENERO": "Hombres", "Cantidad": 11, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#3f9ca9"}, {"A\u00d1O_DEBUT": 2022, "GENERO": "Mujeres", "Cantidad": 22, "Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7ec5cf"}, {"A\u00d1O_DEBUT": 2023, "GENERO": "Hombres", "Cantidad": 27, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#6aaada"}, {"A\u00d1O_DEBUT": 2023, "GENERO": "Mujeres", "Cantidad": 19, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#daeaf6"}, {"A\u00d1O_DEBUT": 2024, "GENERO": "Hombres", "Cantidad": 21, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#6aaada"}, {"A\u00d1O_DEBUT": 2024, "GENERO": "Mujeres", "Cantidad": 24, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#daeaf6"}, {"A\u00d1O_DEBUT": 2025, "GENERO": "Hombres", "Cantidad": 3, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#6aaada"}, {"A\u00d1O_DEBUT": 2025, "GENERO": "Mujeres", "Cantidad": 2, "Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#daeaf6"}], "data-6fc93e1a45e3d0ea6d11817c9ae1dcfd": [{"Generacion": 1, "Etiqueta": "Primera generaci\u00f3n", "Color": "#D4AFB9"}, {"Generacion": 2, "Etiqueta": "Segunda generaci\u00f3n", "Color": "#D1CFE2"}, {"Generacion": 3, "Etiqueta": "Tercera generaci\u00f3n", "Color": "#9CADCE"}, {"Generacion": 4, "Etiqueta": "Cuarta generaci\u00f3n", "Color": "#7EC5CF"}, {"Generacion": 5, "Etiqueta": "Quinta generaci\u00f3n", "Color": "#DAEAF6"}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('vis1');
      vegaEmbed("#vis1", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);


(function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}, "axis": {"labelFontSize": 12, "titleFontSize": 14}, "title": {"fontSize": 16}}, "data": {"name": "data-709be34be59fcdae8799afc2f04099b5"}, "mark": {"type": "bar"}, "encoding": {"color": {"field": "MERCADO", "scale": {"domain": ["AM\u00c9RICA LATINA", "AM\u00c9RICA DEL NORTE", "COREA DEL SUR", "ASIA", "BRASIL", "CHINA", "ESTADOS UNIDOS", "EUROPA", "HONG KONG", "JAP\u00d3N", "M\u00c9XICO", "OCEAN\u00cdA", "OTROS ASIA", "TAIW\u00c1N", "SUDESTE ASI\u00c1TICO"], "range": ["#ffc14c", "#9cadce", "#d460ff", "#672e78", "#f6c992", "#eb8484", "#008eb4", "#50b5d0", "#ef6a9f", "#ffb1c1", "#ffe281", "#8cd3f7", "#d6a4e9", "#cb8277", "#d1cfe2"]}, "type": "nominal"}, "tooltip": [{"field": "A\u00d1O", "type": "quantitative"}, {"field": "MERCADO", "type": "nominal"}, {"field": "CANTIDAD", "type": "quantitative"}], "x": {"field": "A\u00d1O", "type": "ordinal"}, "y": {"field": "CANTIDAD", "type": "quantitative"}}, "height": 400, "title": "Cantidad de Eventos por Mercado a lo Largo de los A\u00f1os", "width": 600, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-709be34be59fcdae8799afc2f04099b5": [{"A\u00d1O": 2008, "MERCADO": "CHINA", "CANTIDAD": 3}, {"A\u00d1O": 2008, "MERCADO": "COREA DEL SUR", "CANTIDAD": 3}, {"A\u00d1O": 2008, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 1}, {"A\u00d1O": 2009, "MERCADO": "CHINA", "CANTIDAD": 6}, {"A\u00d1O": 2009, "MERCADO": "COREA DEL SUR", "CANTIDAD": 4}, {"A\u00d1O": 2009, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 3}, {"A\u00d1O": 2010, "MERCADO": "CHINA", "CANTIDAD": 9}, {"A\u00d1O": 2010, "MERCADO": "COREA DEL SUR", "CANTIDAD": 4}, {"A\u00d1O": 2010, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 2}, {"A\u00d1O": 2010, "MERCADO": "JAP\u00d3N", "CANTIDAD": 2}, {"A\u00d1O": 2010, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 2}, {"A\u00d1O": 2010, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 2}, {"A\u00d1O": 2011, "MERCADO": "CHINA", "CANTIDAD": 1}, {"A\u00d1O": 2011, "MERCADO": "COREA DEL SUR", "CANTIDAD": 4}, {"A\u00d1O": 2011, "MERCADO": "EUROPA", "CANTIDAD": 3}, {"A\u00d1O": 2011, "MERCADO": "JAP\u00d3N", "CANTIDAD": 17}, {"A\u00d1O": 2011, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 7}, {"A\u00d1O": 2011, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 3}, {"A\u00d1O": 2012, "MERCADO": "CHINA", "CANTIDAD": 5}, {"A\u00d1O": 2012, "MERCADO": "COREA DEL SUR", "CANTIDAD": 3}, {"A\u00d1O": 2012, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 2}, {"A\u00d1O": 2012, "MERCADO": "EUROPA", "CANTIDAD": 2}, {"A\u00d1O": 2012, "MERCADO": "JAP\u00d3N", "CANTIDAD": 13}, {"A\u00d1O": 2012, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 10}, {"A\u00d1O": 2012, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 4}, {"A\u00d1O": 2013, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 3}, {"A\u00d1O": 2013, "MERCADO": "BRASIL", "CANTIDAD": 1}, {"A\u00d1O": 2013, "MERCADO": "CHINA", "CANTIDAD": 8}, {"A\u00d1O": 2013, "MERCADO": "COREA DEL SUR", "CANTIDAD": 5}, {"A\u00d1O": 2013, "MERCADO": "EUROPA", "CANTIDAD": 1}, {"A\u00d1O": 2013, "MERCADO": "JAP\u00d3N", "CANTIDAD": 22}, {"A\u00d1O": 2013, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2013, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 13}, {"A\u00d1O": 2013, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 3}, {"A\u00d1O": 2014, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 2}, {"A\u00d1O": 2014, "MERCADO": "ASIA", "CANTIDAD": 1}, {"A\u00d1O": 2014, "MERCADO": "BRASIL", "CANTIDAD": 1}, {"A\u00d1O": 2014, "MERCADO": "CHINA", "CANTIDAD": 6}, {"A\u00d1O": 2014, "MERCADO": "COREA DEL SUR", "CANTIDAD": 4}, {"A\u00d1O": 2014, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 1}, {"A\u00d1O": 2014, "MERCADO": "JAP\u00d3N", "CANTIDAD": 35}, {"A\u00d1O": 2014, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2014, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 5}, {"A\u00d1O": 2014, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 1}, {"A\u00d1O": 2015, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 1}, {"A\u00d1O": 2015, "MERCADO": "BRASIL", "CANTIDAD": 1}, {"A\u00d1O": 2015, "MERCADO": "CHINA", "CANTIDAD": 4}, {"A\u00d1O": 2015, "MERCADO": "COREA DEL SUR", "CANTIDAD": 6}, {"A\u00d1O": 2015, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 5}, {"A\u00d1O": 2015, "MERCADO": "JAP\u00d3N", "CANTIDAD": 11}, {"A\u00d1O": 2015, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2015, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 2}, {"A\u00d1O": 2015, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 9}, {"A\u00d1O": 2015, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 3}, {"A\u00d1O": 2016, "MERCADO": "CHINA", "CANTIDAD": 3}, {"A\u00d1O": 2016, "MERCADO": "COREA DEL SUR", "CANTIDAD": 1}, {"A\u00d1O": 2016, "MERCADO": "JAP\u00d3N", "CANTIDAD": 13}, {"A\u00d1O": 2016, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 3}, {"A\u00d1O": 2016, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 10}, {"A\u00d1O": 2016, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 1}, {"A\u00d1O": 2017, "MERCADO": "AM\u00c9RICA DEL NORTE", "CANTIDAD": 3}, {"A\u00d1O": 2017, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 2}, {"A\u00d1O": 2017, "MERCADO": "BRASIL", "CANTIDAD": 1}, {"A\u00d1O": 2017, "MERCADO": "CHINA", "CANTIDAD": 4}, {"A\u00d1O": 2017, "MERCADO": "COREA DEL SUR", "CANTIDAD": 1}, {"A\u00d1O": 2017, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 8}, {"A\u00d1O": 2017, "MERCADO": "JAP\u00d3N", "CANTIDAD": 20}, {"A\u00d1O": 2017, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 1}, {"A\u00d1O": 2017, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 11}, {"A\u00d1O": 2017, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 2}, {"A\u00d1O": 2018, "MERCADO": "AM\u00c9RICA DEL NORTE", "CANTIDAD": 1}, {"A\u00d1O": 2018, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 4}, {"A\u00d1O": 2018, "MERCADO": "ASIA", "CANTIDAD": 1}, {"A\u00d1O": 2018, "MERCADO": "CHINA", "CANTIDAD": 3}, {"A\u00d1O": 2018, "MERCADO": "COREA DEL SUR", "CANTIDAD": 3}, {"A\u00d1O": 2018, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 6}, {"A\u00d1O": 2018, "MERCADO": "EUROPA", "CANTIDAD": 4}, {"A\u00d1O": 2018, "MERCADO": "JAP\u00d3N", "CANTIDAD": 7}, {"A\u00d1O": 2018, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2018, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 11}, {"A\u00d1O": 2018, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 2}, {"A\u00d1O": 2019, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 2}, {"A\u00d1O": 2019, "MERCADO": "ASIA", "CANTIDAD": 1}, {"A\u00d1O": 2019, "MERCADO": "BRASIL", "CANTIDAD": 1}, {"A\u00d1O": 2019, "MERCADO": "CHINA", "CANTIDAD": 1}, {"A\u00d1O": 2019, "MERCADO": "COREA DEL SUR", "CANTIDAD": 7}, {"A\u00d1O": 2019, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 10}, {"A\u00d1O": 2019, "MERCADO": "EUROPA", "CANTIDAD": 6}, {"A\u00d1O": 2019, "MERCADO": "JAP\u00d3N", "CANTIDAD": 10}, {"A\u00d1O": 2019, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2019, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 2}, {"A\u00d1O": 2019, "MERCADO": "OTROS ASIA", "CANTIDAD": 1}, {"A\u00d1O": 2019, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 14}, {"A\u00d1O": 2020, "MERCADO": "ASIA", "CANTIDAD": 1}, {"A\u00d1O": 2020, "MERCADO": "COREA DEL SUR", "CANTIDAD": 1}, {"A\u00d1O": 2020, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 15}, {"A\u00d1O": 2020, "MERCADO": "JAP\u00d3N", "CANTIDAD": 2}, {"A\u00d1O": 2020, "MERCADO": "M\u00c9XICO", "CANTIDAD": 1}, {"A\u00d1O": 2020, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 2}, {"A\u00d1O": 2021, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 2}, {"A\u00d1O": 2022, "MERCADO": "AM\u00c9RICA DEL NORTE", "CANTIDAD": 1}, {"A\u00d1O": 2022, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 1}, {"A\u00d1O": 2022, "MERCADO": "CHINA", "CANTIDAD": 1}, {"A\u00d1O": 2022, "MERCADO": "COREA DEL SUR", "CANTIDAD": 12}, {"A\u00d1O": 2022, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 37}, {"A\u00d1O": 2022, "MERCADO": "JAP\u00d3N", "CANTIDAD": 8}, {"A\u00d1O": 2022, "MERCADO": "M\u00c9XICO", "CANTIDAD": 2}, {"A\u00d1O": 2022, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 18}, {"A\u00d1O": 2022, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 1}, {"A\u00d1O": 2023, "MERCADO": "AM\u00c9RICA DEL NORTE", "CANTIDAD": 1}, {"A\u00d1O": 2023, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 6}, {"A\u00d1O": 2023, "MERCADO": "BRASIL", "CANTIDAD": 3}, {"A\u00d1O": 2023, "MERCADO": "CHINA", "CANTIDAD": 3}, {"A\u00d1O": 2023, "MERCADO": "COREA DEL SUR", "CANTIDAD": 9}, {"A\u00d1O": 2023, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 28}, {"A\u00d1O": 2023, "MERCADO": "EUROPA", "CANTIDAD": 12}, {"A\u00d1O": 2023, "MERCADO": "JAP\u00d3N", "CANTIDAD": 37}, {"A\u00d1O": 2023, "MERCADO": "M\u00c9XICO", "CANTIDAD": 4}, {"A\u00d1O": 2023, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 7}, {"A\u00d1O": 2023, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 14}, {"A\u00d1O": 2023, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 2}, {"A\u00d1O": 2024, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 2}, {"A\u00d1O": 2024, "MERCADO": "BRASIL", "CANTIDAD": 2}, {"A\u00d1O": 2024, "MERCADO": "CHINA", "CANTIDAD": 15}, {"A\u00d1O": 2024, "MERCADO": "COREA DEL SUR", "CANTIDAD": 13}, {"A\u00d1O": 2024, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 23}, {"A\u00d1O": 2024, "MERCADO": "EUROPA", "CANTIDAD": 7}, {"A\u00d1O": 2024, "MERCADO": "HONG KONG", "CANTIDAD": 2}, {"A\u00d1O": 2024, "MERCADO": "JAP\u00d3N", "CANTIDAD": 28}, {"A\u00d1O": 2024, "MERCADO": "M\u00c9XICO", "CANTIDAD": 2}, {"A\u00d1O": 2024, "MERCADO": "OCEAN\u00cdA", "CANTIDAD": 10}, {"A\u00d1O": 2024, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 16}, {"A\u00d1O": 2024, "MERCADO": "TAIW\u00c1N", "CANTIDAD": 7}, {"A\u00d1O": 2025, "MERCADO": "AM\u00c9RICA DEL NORTE", "CANTIDAD": 3}, {"A\u00d1O": 2025, "MERCADO": "AM\u00c9RICA LATINA", "CANTIDAD": 3}, {"A\u00d1O": 2025, "MERCADO": "BRASIL", "CANTIDAD": 3}, {"A\u00d1O": 2025, "MERCADO": "COREA DEL SUR", "CANTIDAD": 5}, {"A\u00d1O": 2025, "MERCADO": "ESTADOS UNIDOS", "CANTIDAD": 30}, {"A\u00d1O": 2025, "MERCADO": "EUROPA", "CANTIDAD": 21}, {"A\u00d1O": 2025, "MERCADO": "HONG KONG", "CANTIDAD": 1}, {"A\u00d1O": 2025, "MERCADO": "JAP\u00d3N", "CANTIDAD": 7}, {"A\u00d1O": 2025, "MERCADO": "M\u00c9XICO", "CANTIDAD": 4}, {"A\u00d1O": 2025, "MERCADO": "SUDESTE ASI\u00c1TICO", "CANTIDAD": 3}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('vis2');
      vegaEmbed("#vis2", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);


(function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "data": {"name": "data-b367ebae0a4faeef48b468bb884c2801"}, "mark": {"type": "bar"}, "encoding": {"color": {"field": "GRUPO", "scale": {"domain": ["ARTMS", "BTS", "Girls' Generation (SNSD)", "I-DLE", "SEVENTEEN", "SHINee", "Stray Kids", "Super Junior", "TWICE", "aespa"], "range": ["#d1cfe2", "#D460FF", "#ffb1c1", "#672e78", "#9cadce", "#4BEDF3", "#EB8484", "#008EB4", "#FFE281", "#a9daff"]}, "title": "Grupos", "type": "nominal"}, "tooltip": [{"field": "GRUPO", "title": "Grupo", "type": "nominal"}, {"field": "PA\u00cdS", "title": "Cantidad de conciertos", "type": "quantitative"}, {"field": "MERCADO", "title": "Mercado", "type": "nominal"}], "x": {"field": "PA\u00cdS", "title": "Cantidad de conciertos", "type": "quantitative"}, "y": {"field": "MERCADO", "title": "Mercado", "type": "nominal"}}, "height": 500, "params": [{"name": "param_42", "select": {"type": "interval", "encodings": ["x", "y"]}, "bind": "scales"}], "title": "Cantidad de conciertos por mercado", "width": 1000, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-b367ebae0a4faeef48b468bb884c2801": [{"GRUPO": "ARTMS", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 2}, {"GRUPO": "ARTMS", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 1}, {"GRUPO": "ARTMS", "MERCADO": "BRASIL", "PA\u00cdS": 1}, {"GRUPO": "ARTMS", "MERCADO": "CHINA", "PA\u00cdS": 1}, {"GRUPO": "ARTMS", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 4}, {"GRUPO": "ARTMS", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 22}, {"GRUPO": "ARTMS", "MERCADO": "EUROPA", "PA\u00cdS": 13}, {"GRUPO": "ARTMS", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 1}, {"GRUPO": "ARTMS", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 1}, {"GRUPO": "ARTMS", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 3}, {"GRUPO": "BTS", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 2}, {"GRUPO": "BTS", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 1}, {"GRUPO": "BTS", "MERCADO": "BRASIL", "PA\u00cdS": 3}, {"GRUPO": "BTS", "MERCADO": "CHINA", "PA\u00cdS": 6}, {"GRUPO": "BTS", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 6}, {"GRUPO": "BTS", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 19}, {"GRUPO": "BTS", "MERCADO": "EUROPA", "PA\u00cdS": 6}, {"GRUPO": "BTS", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 20}, {"GRUPO": "BTS", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 1}, {"GRUPO": "BTS", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 3}, {"GRUPO": "BTS", "MERCADO": "OTROS ASIA", "PA\u00cdS": 1}, {"GRUPO": "BTS", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 13}, {"GRUPO": "BTS", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 3}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 1}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "ASIA", "PA\u00cdS": 2}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "CHINA", "PA\u00cdS": 10}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 14}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 4}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "EUROPA", "PA\u00cdS": 2}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 35}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 17}, {"GRUPO": "Girls' Generation (SNSD)", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 5}, {"GRUPO": "I-DLE", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 1}, {"GRUPO": "I-DLE", "MERCADO": "CHINA", "PA\u00cdS": 9}, {"GRUPO": "I-DLE", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 6}, {"GRUPO": "I-DLE", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 20}, {"GRUPO": "I-DLE", "MERCADO": "EUROPA", "PA\u00cdS": 6}, {"GRUPO": "I-DLE", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 5}, {"GRUPO": "I-DLE", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 2}, {"GRUPO": "I-DLE", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 2}, {"GRUPO": "I-DLE", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 8}, {"GRUPO": "I-DLE", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 3}, {"GRUPO": "SEVENTEEN", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 1}, {"GRUPO": "SEVENTEEN", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 2}, {"GRUPO": "SEVENTEEN", "MERCADO": "CHINA", "PA\u00cdS": 4}, {"GRUPO": "SEVENTEEN", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 9}, {"GRUPO": "SEVENTEEN", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 25}, {"GRUPO": "SEVENTEEN", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 18}, {"GRUPO": "SEVENTEEN", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 1}, {"GRUPO": "SEVENTEEN", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 3}, {"GRUPO": "SEVENTEEN", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 26}, {"GRUPO": "SHINee", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 3}, {"GRUPO": "SHINee", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 2}, {"GRUPO": "SHINee", "MERCADO": "BRASIL", "PA\u00cdS": 1}, {"GRUPO": "SHINee", "MERCADO": "CHINA", "PA\u00cdS": 9}, {"GRUPO": "SHINee", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 11}, {"GRUPO": "SHINee", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 4}, {"GRUPO": "SHINee", "MERCADO": "EUROPA", "PA\u00cdS": 2}, {"GRUPO": "SHINee", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 78}, {"GRUPO": "SHINee", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 1}, {"GRUPO": "SHINee", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 11}, {"GRUPO": "SHINee", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 8}, {"GRUPO": "Stray Kids", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 3}, {"GRUPO": "Stray Kids", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 1}, {"GRUPO": "Stray Kids", "MERCADO": "BRASIL", "PA\u00cdS": 3}, {"GRUPO": "Stray Kids", "MERCADO": "CHINA", "PA\u00cdS": 2}, {"GRUPO": "Stray Kids", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 13}, {"GRUPO": "Stray Kids", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 42}, {"GRUPO": "Stray Kids", "MERCADO": "EUROPA", "PA\u00cdS": 13}, {"GRUPO": "Stray Kids", "MERCADO": "HONG KONG", "PA\u00cdS": 2}, {"GRUPO": "Stray Kids", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 29}, {"GRUPO": "Stray Kids", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 2}, {"GRUPO": "Stray Kids", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 8}, {"GRUPO": "Stray Kids", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 14}, {"GRUPO": "Stray Kids", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 1}, {"GRUPO": "Super Junior", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 11}, {"GRUPO": "Super Junior", "MERCADO": "ASIA", "PA\u00cdS": 2}, {"GRUPO": "Super Junior", "MERCADO": "BRASIL", "PA\u00cdS": 3}, {"GRUPO": "Super Junior", "MERCADO": "CHINA", "PA\u00cdS": 27}, {"GRUPO": "Super Junior", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 15}, {"GRUPO": "Super Junior", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 1}, {"GRUPO": "Super Junior", "MERCADO": "EUROPA", "PA\u00cdS": 3}, {"GRUPO": "Super Junior", "MERCADO": "HONG KONG", "PA\u00cdS": 1}, {"GRUPO": "Super Junior", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 15}, {"GRUPO": "Super Junior", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 6}, {"GRUPO": "Super Junior", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 42}, {"GRUPO": "Super Junior", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 8}, {"GRUPO": "TWICE", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 1}, {"GRUPO": "TWICE", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 1}, {"GRUPO": "TWICE", "MERCADO": "BRASIL", "PA\u00cdS": 1}, {"GRUPO": "TWICE", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 1}, {"GRUPO": "TWICE", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 17}, {"GRUPO": "TWICE", "MERCADO": "EUROPA", "PA\u00cdS": 3}, {"GRUPO": "TWICE", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 8}, {"GRUPO": "TWICE", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 2}, {"GRUPO": "TWICE", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 3}, {"GRUPO": "TWICE", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 13}, {"GRUPO": "aespa", "MERCADO": "AM\u00c9RICA LATINA", "PA\u00cdS": 1}, {"GRUPO": "aespa", "MERCADO": "AM\u00c9RICA DEL NORTE", "PA\u00cdS": 1}, {"GRUPO": "aespa", "MERCADO": "BRASIL", "PA\u00cdS": 1}, {"GRUPO": "aespa", "MERCADO": "CHINA", "PA\u00cdS": 4}, {"GRUPO": "aespa", "MERCADO": "COREA DEL SUR", "PA\u00cdS": 6}, {"GRUPO": "aespa", "MERCADO": "ESTADOS UNIDOS", "PA\u00cdS": 15}, {"GRUPO": "aespa", "MERCADO": "EUROPA", "PA\u00cdS": 8}, {"GRUPO": "aespa", "MERCADO": "JAP\u00d3N", "PA\u00cdS": 23}, {"GRUPO": "aespa", "MERCADO": "M\u00c9XICO", "PA\u00cdS": 2}, {"GRUPO": "aespa", "MERCADO": "OCEAN\u00cdA", "PA\u00cdS": 3}, {"GRUPO": "aespa", "MERCADO": "SUDESTE ASI\u00c1TICO", "PA\u00cdS": 5}, {"GRUPO": "aespa", "MERCADO": "TAIW\u00c1N", "PA\u00cdS": 3}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('vis3');
      vegaEmbed("#vis3", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);









const secciones = document.querySelectorAll('.INICIO, .GENERACIONES');
const cuadro1 = document.getElementById('cuadro1');
const cuadro2 = document.getElementById('cuadro2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            if (entry.target.id === 'inicio') {
                cuadro1.style.opacity = '1';
                cuadro1.style.transform = 'translateY(0)';
                cuadro2.style.opacity = '0';
            } else if (entry.target.id === 'generaciones') {
                cuadro2.style.opacity = '1';
                cuadro2.style.transform = 'translateY(0)';
                cuadro1.style.opacity = '0';
            }
        } else {
            
            if (entry.target.id === 'inicio') {
                cuadro1.style.opacity = '0';
                cuadro1.style.transform = 'translateY(20px)';
            } else if (entry.target.id === 'generaciones') {
                cuadro2.style.opacity = '0';
                cuadro2.style.transform = 'translateY(20px)';
            }
        }
    });
}, {
    threshold: 0.3
});


secciones.forEach(seccion => {
    observer.observe(seccion);
});
























const grupos = document.querySelectorAll('.grupo-btn');
const preguntaPrecio = document.getElementById('pregunta-precio');
const precio = document.getElementById('precio');
const enviarBtn = document.getElementById('enviar-encuesta');
const resultado = document.getElementById('resultado');
let grupoSeleccionado = '';

const guardado = localStorage.getItem('datosEncuesta');
const datosEncuesta = guardado ? JSON.parse(guardado) : {
  'BTS': [],
  'BLACKPINK': [],
  'Stray Kids': [],
  'Twice': [],
  'ATEEZ': [],
  'Mamamoo': [],
};

let grafico = null;

// Selección del grupo
grupos.forEach(btn => {
  btn.addEventListener('click', () => {
    grupoSeleccionado = btn.dataset.nombre;
    preguntaPrecio.style.display = 'block';
  });
});

// Enviar datos y mostrar resultados
enviarBtn.addEventListener('click', () => {
  const valor = Number(precio.value);
  if (!grupoSeleccionado) return alert('Selecciona un grupo primero.');
  if (isNaN(valor) || valor <= 0) return alert('Ingresa un valor válido.');

  datosEncuesta[grupoSeleccionado].push(valor);
  localStorage.setItem('datosEncuesta', JSON.stringify(datosEncuesta));
  mostrarResultados();
});

// Función para mostrar resultados con gráfico corregido
function mostrarResultados() {
  preguntaPrecio.style.display = 'none';
  resultado.style.display = 'block';

  const labels = Object.keys(datosEncuesta);
  const valoresPromedio = labels.map(grupo => {
    const arr = datosEncuesta[grupo];
    return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0;
  });

  const ctx = document.getElementById('grafico').getContext('2d');

  // Destruir gráfico previo si existe
  if (grafico) grafico.destroy();

  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Precio promedio (CLP)',
        data: valoresPromedio,
        backgroundColor: ['#d460ff', '#ef6a9f', '#008eb4', '#ffb1c1', '#413e3e', '#7ec4cf']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Reiniciar encuesta
document.getElementById('reiniciar-encuesta').addEventListener('click', () => {
  localStorage.removeItem('datosEncuesta');
  alert('Encuesta reiniciada.');
  location.reload();
});

