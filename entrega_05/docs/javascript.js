let indice = 0;

function cambiarImagen(direccion) {
  const imagenes = document.querySelectorAll('.imagenescarrusel img');
  const total = imagenes.length;

  indice += direccion;

  if (indice < 0) {
    indice = total - 1;
  } else if (indice >= total) {
    indice = 0;
  }

  const carrusel = document.querySelector('.imagenescarrusel');
  const desplazamiento = -indice * 100;
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}
