let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

let DiferentesDificultades = {
  facil: [4, 4, "frutas"],
  medio: [6, 18, "pokemon"],
  dificil: [8, 32, "coches"],
};
let icons = {
  1: "fas fa-robot",
  2: "fas fa-gamepad",
  3: "fa fa-pencil",
  4: "fas fa-ice-cream",
  5: "fas fa-anchor",
  6: "fas fa-bell",
  7: "fas fa-key",
  8: "far fa-money-bill-alt",
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
  let CantidadCartas = cantidadParejas * cantidadParejas;
  //console.log(CantidadCartas);
  crearCarta(cantidadParejas);
};

const crearCarta = (cantidad) => {
  let cartas = cantidad * cantidad;
  for (let i = 0; i < cartas; i++) {
    console.log(i, icons[arr[i]]);
    //console.log(arr[i]);
    // console.log(icons[i]);
    document.getElementById(
      "principal"
    ).innerHTML += `<div class="row text-center">
    <div class="d-flex align-content-end flex-wrap contenido contenidoo" id="div1">
      <div class="d-flex align-content-end flex-wrap contenido ">
        <div class="bg-white rounded shadow-sm py-5 px-4 contcard">
          <h5 class="mb-0" title="f"><i class=" ${
            icons[arr[i]]
          } extraClass"></i></h5>
          </button>
        </div>
      </div>
    </div>
</div>`;
  }
};

const ArrayNumAleatorio = (numeros) => {
  let ArregloAleatorio = [];
  while (ArregloAleatorio.length < numeros) {
    let numeroAleatorio = Math.ceil(Math.random() * numeros);
    let existe = false;
    for (let i = 0; i < ArregloAleatorio.length; i++) {
      if (ArregloAleatorio[i] == numeroAleatorio) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      ArregloAleatorio[ArregloAleatorio.length] = numeroAleatorio;
    }
  }
  return ArregloAleatorio;
};
const PosicionCartas = () => {
  let carta1 = ArrayNumAleatorio(8);
  let carta2 = ArrayNumAleatorio(8);
  carta1 = [...carta1, ...carta2];
  return carta1;
};

function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}
let arr = PosicionCartas();
shuffleArray(arr);
console.log(arr);
document.write(arr);
