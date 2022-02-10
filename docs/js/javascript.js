let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

let DiferentesDificultades = {
  facil: [8, 4, "frutas"],
  medio: [6, 18, "pokemon"],
  dificil: [8, 32, "coches"],
};
function grid() {
  // cargarImagenes();
  // getMaxPuntos();
  //NIVEL DIFICULTAD
  let modal = document.getElementById("dificultadBtn");
  let buttons = modal.childNodes;
  buttons.forEach((button) => {
    button.onclick = dificultad;
  });
  //document.getElementById("tablaPuntuaciones").onclick = historialPartidas;
}

function dificultad() {
  const ArrayDificultad = DiferentesDificultades[this.id];
  arrayOpciones(ArrayDificultad);
}

const arrayOpciones = (array) => {
  let [cantidadParejas, segunnum, tercer] = array;
  console.log(cantidadParejas);
  console.log(segunnum);
  console.log(tercer);
};
