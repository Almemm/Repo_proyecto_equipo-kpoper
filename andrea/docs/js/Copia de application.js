

(function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "data": {"name": "data-aa9ceec08a4a32998a21d995077204aa"}, "mark": {"type": "point", "filled": true, "size": 200}, "encoding": {"color": {"field": "Precio", "scale": {"domain": [0, 500], "range": ["#6a0dad", "#ff69b4", "#00ced1"]}, "title": "Precio", "type": "quantitative"}, "shape": {"field": "Tipo Entrada", "scale": {"domain": ["ENTRADA M\u00c1S BARATA", "ENTRADA M\u00c1S CARA"], "range": ["circle", "square"]}, "title": "Tipo de Entrada", "type": "nominal"}, "tooltip": [{"field": "GRUPO", "title": "Grupo", "type": "nominal"}, {"field": "A\u00d1O", "title": "A\u00f1o", "type": "ordinal"}, {"field": "Tipo Entrada", "title": "Tipo de Entrada", "type": "nominal"}, {"field": "Precio", "format": ".2f", "title": "Precio", "type": "quantitative"}], "x": {"field": "A\u00d1O", "title": "A\u00f1o", "type": "ordinal"}, "xOffset": {"field": "Tipo Entrada", "type": "nominal"}, "y": {"field": "GRUPO", "title": "Grupo", "type": "nominal"}}, "height": 400, "params": [{"name": "param_11", "select": {"type": "interval", "encodings": ["x", "y"]}, "bind": "scales"}], "title": "Entradas m\u00e1s caras y m\u00e1s baratas por grupo y a\u00f1o", "width": 700, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-aa9ceec08a4a32998a21d995077204aa": [{"GRUPO": "ARTMS", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 39.0}, {"GRUPO": "ARTMS", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 55.0}, {"GRUPO": "BTS", "A\u00d1O": 2014, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 50.0}, {"GRUPO": "BTS", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 24.66}, {"GRUPO": "BTS", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 51.81}, {"GRUPO": "BTS", "A\u00d1O": 2021, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 60.0}, {"GRUPO": "BTS", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 79.09}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2010, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 40.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2011, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 40.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2012, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 75.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2013, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 142.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2014, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 142.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2015, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 45.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2016, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 45.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 44.0}, {"GRUPO": "I-DLE", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 47.54}, {"GRUPO": "I-DLE", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 55.0}, {"GRUPO": "I-DLE", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 60.0}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2016, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 52.33}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 26.55}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 35.37}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 32.73}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 74.5}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 60.0}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 83.41}, {"GRUPO": "SHINee", "A\u00d1O": 2015, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 42.0}, {"GRUPO": "SHINee", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 65.0}, {"GRUPO": "SHINee", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 59.0}, {"GRUPO": "SHINee", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 113.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 42.5}, {"GRUPO": "Stray Kids", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 69.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 49.5}, {"GRUPO": "Stray Kids", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 45.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 45.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 29.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 50.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 30.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 51.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 69.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 82.0}, {"GRUPO": "TWICE", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 53.61}, {"GRUPO": "TWICE", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 59.57}, {"GRUPO": "TWICE", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 26.53}, {"GRUPO": "TWICE", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 59.5}, {"GRUPO": "TWICE", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 30.96}, {"GRUPO": "TWICE", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 25.49}, {"GRUPO": "aespa", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 60.0}, {"GRUPO": "aespa", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 85.0}, {"GRUPO": "aespa", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S BARATA", "Precio": 75.79}, {"GRUPO": "ARTMS", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 400.0}, {"GRUPO": "ARTMS", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 190.0}, {"GRUPO": "BTS", "A\u00d1O": 2014, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 250.0}, {"GRUPO": "BTS", "A\u00d1O": 2015, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 205.0}, {"GRUPO": "BTS", "A\u00d1O": 2016, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 235.28}, {"GRUPO": "BTS", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 297.74}, {"GRUPO": "BTS", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 335.98}, {"GRUPO": "BTS", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 320.65}, {"GRUPO": "BTS", "A\u00d1O": 2021, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 450.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2010, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 180.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2011, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 180.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2012, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 107.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2013, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 230.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2014, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 230.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2015, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 180.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2016, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 180.0}, {"GRUPO": "Girls' Generation (SNSD)", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 265.0}, {"GRUPO": "I-DLE", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 215.69}, {"GRUPO": "I-DLE", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 280.0}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2016, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 255.17}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 255.17}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 255.16}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 172.77}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 425.0}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 449.5}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 295.01}, {"GRUPO": "SEVENTEEN", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 294.9}, {"GRUPO": "SHINee", "A\u00d1O": 2014, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 117.0}, {"GRUPO": "SHINee", "A\u00d1O": 2015, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 140.0}, {"GRUPO": "SHINee", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 215.0}, {"GRUPO": "SHINee", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 179.0}, {"GRUPO": "SHINee", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 145.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 199.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 320.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 320.0}, {"GRUPO": "Stray Kids", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 300.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 390.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2020, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 30.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 192.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 258.0}, {"GRUPO": "Super Junior", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 196.0}, {"GRUPO": "TWICE", "A\u00d1O": 2017, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 218.84}, {"GRUPO": "TWICE", "A\u00d1O": 2018, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 218.84}, {"GRUPO": "TWICE", "A\u00d1O": 2019, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 278.92}, {"GRUPO": "TWICE", "A\u00d1O": 2022, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 199.5}, {"GRUPO": "TWICE", "A\u00d1O": 2023, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 479.5}, {"GRUPO": "TWICE", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 244.7}, {"GRUPO": "aespa", "A\u00d1O": 2024, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 255.0}, {"GRUPO": "aespa", "A\u00d1O": 2025, "Tipo Entrada": "ENTRADA M\u00c1S CARA", "Precio": 310.62}]}};
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



    document.addEventListener("DOMContentLoaded", function () {
        const spec = {
          config: {
            view: { continuousWidth: 700, continuousHeight: 400 }
          },
          layer: [
            {
              mark: { type: "line", point: true },
              encoding: {
                color: {
                  field: "Tipo de entrada",
                  scale: { range: ["green", "purple"] },
                  type: "nominal"
                },
                tooltip: [
                  { field: "año", type: "temporal" },
                  { field: "Tipo de entrada", type: "nominal" },
                  { field: "Precio", type: "quantitative" }
                ],
                x: { field: "año", title: "Año", type: "temporal" },
                y: { field: "Precio", title: "Precio (USD)", type: "quantitative" }
              },
              title: "Evolución de precios de entradas (mín y máx)"
            },
            {
              mark: { type: "text", align: "left", dx: 5, dy: -5 },
              encoding: {
                color: { field: "Tipo de entrada", type: "nominal" },
                text: { field: "Precio", format: "$.2f", type: "quantitative" },
                x: { field: "año", type: "temporal" },
                y: { field: "Precio", type: "quantitative" }
              }
            }
          ],
          data: {
            name: "data",
            values: [
              { "año": "2010", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 40 },
              { "año": "2011", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 40 },
              { "año": "2012", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 75 },
              { "año": "2013", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 142 },
              { "año": "2014", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 18 },
              { "año": "2015", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 17.84 },
              { "año": "2016", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 17.66 },
              { "año": "2017", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 10.33 },
              { "año": "2018", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 22.32 },
              { "año": "2019", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 26.53 },
              { "año": "2020", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 30 },
              { "año": "2021", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 60 },
              { "año": "2022", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 32.73 },
              { "año": "2023", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 30.96 },
              { "año": "2024", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 25.49 },
              { "año": "2025", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 29 },
      
              { "año": "2010", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 180 },
              { "año": "2011", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 180 },
              { "año": "2012", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 107 },
              { "año": "2013", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 230 },
              { "año": "2014", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 250 },
              { "año": "2015", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 205 },
              { "año": "2016", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 255.17 },
              { "año": "2017", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 297.74 },
              { "año": "2018", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 390 },
              { "año": "2019", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 505.18 },
              { "año": "2020", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 425 },
              { "año": "2021", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 450 },
              { "año": "2022", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 565.82 },
              { "año": "2023", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 1000 },
              { "año": "2024", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 592 },
              { "año": "2025", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 743.13 }
            ]
          },
          height: 250,
          width: 900,
          $schema: "https://vega.github.io/schema/vega-lite/v5.json"
        };
      
        vegaEmbed("#vega-visualization-dca581d3aedf4305a3efe216c14a27f5", spec).catch(console.error);
      });




      document.addEventListener("DOMContentLoaded", function () {
        const spec = {
          $schema: "https://vega.github.io/schema/vega-lite/v5.json",
          width: 900,
          height: 400,
          config: {
            view: { continuousWidth: 700, continuousHeight: 400 }
          },
          data: {
            name: "data",
            values: [
              { "año": "2010", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 40 },
              { "año": "2011", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 40 },
              { "año": "2012", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 75 },
              { "año": "2013", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 142 },
              { "año": "2014", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 18 },
              { "año": "2015", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 17.84 },
              { "año": "2016", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 17.66 },
              { "año": "2017", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 10.33 },
              { "año": "2018", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 22.32 },
              { "año": "2019", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 26.53 },
              { "año": "2020", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 30 },
              { "año": "2021", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 60 },
              { "año": "2022", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 32.73 },
              { "año": "2023", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 30.96 },
              { "año": "2024", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 25.49 },
              { "año": "2025", "Tipo de entrada": "Mín. de ENTRADA MÁS BARATA", "Precio": 29 },
              { "año": "2010", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 180 },
              { "año": "2011", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 180 },
              { "año": "2012", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 107 },
              { "año": "2013", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 230 },
              { "año": "2014", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 250 },
              { "año": "2015", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 205 },
              { "año": "2016", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 255.17 },
              { "año": "2017", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 297.74 },
              { "año": "2018", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 390 },
              { "año": "2019", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 505.18 },
              { "año": "2020", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 425 },
              { "año": "2021", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 450 },
              { "año": "2022", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 565.82 },
              { "año": "2023", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 1000 },
              { "año": "2024", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 592 },
              { "año": "2025", "Tipo de entrada": "Máx. de ENTRADA MÁS CARA", "Precio": 743.13 }
            ]
          },
          layer: [
            {
              mark: { type: "bar" },
              encoding: {
                x: {
                  field: "año",
                  type: "ordinal",
                  axis: { title: "Año" }
                },
                y: {
                  field: "Precio",
                  type: "quantitative",
                  axis: { title: "Precio (USD)" }
                },
                color: {
                  field: "Tipo de entrada",
                  type: "nominal",
                  scale: {
                    domain: [
                      "Mín. de ENTRADA MÁS BARATA",
                      "Máx. de ENTRADA MÁS CARA"
                    ],
                    range: ["#d6a4e9", "#a194f5"]
                  },
                  title: "Tipo de entrada"
                },
                tooltip: [
                  { field: "año", type: "ordinal" },
                  { field: "Tipo de entrada", type: "nominal" },
                  { field: "Precio", type: "quantitative", format: "$.2f" }
                ]
              }
            },
            {
              mark: {
                type: "text",
                dy: -5,
                fontSize: 11
              },
              encoding: {
                x: { field: "año", type: "ordinal" },
                y: { field: "Precio", type: "quantitative" },
                detail: { field: "Tipo de entrada" },
                text: {
                  field: "Precio",
                  type: "quantitative",
                  format: "$.2f"
                },
                color: {
                  field: "Tipo de entrada",
                  type: "nominal",
                  scale: {
                    domain: [
                      "Mín. de ENTRADA MÁS BARATA",
                      "Máx. de ENTRADA MÁS CARA"
                    ],
                    range: ["#d6a4e9", "#a194f5"]
                  },
                  legend: null
                }
              }
            }
          ]
        };
      
        vegaEmbed("#vega-visualization-dca581d3aedf4305a3efe216c14a27f5", spec).catch(console.error);
      });





      
  (function(vegaEmbed) {
    const spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
      "data": {
        "name": "data-mercados"
      },
      "width": 700,
      "height": 400,
      "title": {
        "text": "Precios de entradas por mercado",
        "fontSize": 18,
        "subtitle": "Verde: Entrada más barata · Morado: Entrada más cara"
      },
      "layer": [
        {
          "mark": {"type": "line", "point": {"filled": true}},
          "encoding": {
            "x": {
              "field": "MERCADO",
              "type": "nominal",
              "sort": ["Sudeste Asiático", "Europa ", "Oceanía", "China", "América Latina", "Estados Unidos ", "América del Norte", "Corea del Sur", "Asia", "Sudeste asiático", "Japón", "Oceanía ", "Estados Unidos", "Japón ", "México", "Europa", "Brasil"],
              "title": ""
            },
            "y": {
              "field": "PRECIO",
              "type": "quantitative",
              "title": "Precio en USD"
            },
            "color": {
              "field": "TIPO_ENTRADA",
              "type": "nominal",
              "scale": {
                "domain": ["Entrada más barata (verde)", "Entrada más cara (morado)"],
                "range": ["green", "purple"]
              },
              "title": "Tipo de entrada"
            },
            "tooltip": [
              {"field": "MERCADO", "type": "ordinal"},
              {"field": "TIPO_ENTRADA", "type": "nominal"},
              {"field": "PRECIO", "type": "quantitative"}
            ]
          }
        },
        {
          "mark": {"type": "text", "align": "center", "baseline": "bottom", "dy": -10},
          "encoding": {
            "x": {"field": "MERCADO", "type": "nominal"},
            "y": {"field": "PRECIO", "type": "quantitative"},
            "text": {"field": "PRECIO", "type": "quantitative", "format": "$,.0f"},
            "color": {
              "field": "TIPO_ENTRADA",
              "type": "nominal",
              "legend": null,
              "scale": {
                "domain": ["Entrada más barata (verde)", "Entrada más cara (morado)"],
                "range": ["green", "purple"]
              }
            }
          }
        }
      ],
      "datasets": {
        "data-mercados": [
          {"MERCADO":"América Latina","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":17.84},
          {"MERCADO":"América del Norte","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":57.81},
          {"MERCADO":"Asia","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":142.0},
          {"MERCADO":"Brasil","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":10.33},
          {"MERCADO":"China","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":24.66},
          {"MERCADO":"Corea del Sur","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":40.0},
          {"MERCADO":"Estados Unidos","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":40.0},
          {"MERCADO":"Estados Unidos ","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":50.0},
          {"MERCADO":"Europa","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":55.0},
          {"MERCADO":"Europa ","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":72.0},
          {"MERCADO":"Japón","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":40.0},
          {"MERCADO":"Japón ","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":50.0},
          {"MERCADO":"México","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":76.11},
          {"MERCADO":"Oceanía","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":87.12},
          {"MERCADO":"Oceanía ","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":52.33},
          {"MERCADO":"Sudeste Asiático","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":17.66},
          {"MERCADO":"Sudeste asiático","TIPO_ENTRADA":"Entrada más barata (verde)","PRECIO":42.0},
          {"MERCADO":"América Latina","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":250.0},
          {"MERCADO":"América del Norte","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":234.83},
          {"MERCADO":"Asia","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":230.0},
          {"MERCADO":"Brasil","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":111.93},
          {"MERCADO":"China","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":297.74},
          {"MERCADO":"Corea del Sur","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":230.0},
          {"MERCADO":"Estados Unidos","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":215.0},
          {"MERCADO":"Estados Unidos ","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":250.0},
          {"MERCADO":"Europa","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":120.0},
          {"MERCADO":"Europa ","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":335.98},
          {"MERCADO":"Japón","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":230.0},
          {"MERCADO":"Japón ","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":160.52},
          {"MERCADO":"México","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":142.07},
          {"MERCADO":"Oceanía","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":335.94},
          {"MERCADO":"Oceanía ","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":220.06},
          {"MERCADO":"Sudeste Asiático","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":390.0},
          {"MERCADO":"Sudeste asiático","TIPO_ENTRADA":"Entrada más cara (morado)","PRECIO":230.0}
        ]
      }
      
    
    };
  
    const embedOpt = {mode: "vega-lite"};
  const el = document.getElementById("vis-grafico-mercados");

  function showError(el, error) {
    el.innerHTML = `<div style="color:red;">
      <p>JavaScript Error: ${error.message}</p>
    </div>`;
    throw error;
  }

  vegaEmbed("#vis-grafico-mercados", spec, embedOpt).catch(error => showError(el, error));
})(vegaEmbed);