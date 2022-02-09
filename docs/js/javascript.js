let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

function grid() {
  cargarImagenes();
  getMaxPuntos();

  //NIVEL DIFICULTAD
  let modal = document.getElementById("dificultadBtn");
  let buttons = modal.childNodes;
  buttons.forEach((button) => {
    button.onclick = dificultad;
  });
  document.getElementById("tablaPuntuaciones").onclick = historialPartidas;
  document.getElementById("ayuda").onclick = startIntro;
}

function dificultad() {
  switch (this.id) {
    case "facil":
      generarCartas(4, 8, frutas);
      break;
    case "medio":
      generarCartas(6, 18, pokemon);
      break;
    case "dificil":
      generarCartas(8, 32, coches);
      break;
  }
  document.getElementById("modal").setAttribute("class", "hide");
}
