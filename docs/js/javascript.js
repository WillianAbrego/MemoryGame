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
  for (let i = 1; i <= cartas; i++) {
    //console.log(i);
    document.getElementById(
      "principal"
    ).innerHTML += `<div class="row text-center">
    <div class="d-flex align-content-end flex-wrap contenido contenidoo" id="div1">
      <div class="d-flex align-content-end flex-wrap contenido">
        <div class="bg-white rounded shadow-sm py-5 px-4 contcard">
          <h5 class="mb-0" title="f"><i class="fa fa-pencil extraClass"></i></h5>
          </button>
        </div>
      </div>
    </div>
</div>`;
  }
};

// const obtenerNumeroAleatorioEnRango = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// // Probar con 10 números aleatorios entre 1 y 100
// for (let i = 0; i < 9; i++) {
//   const numeroAleatorio = obtenerNumeroAleatorioEnRango(1, 10);
//   console.log("Aleatorio: ", numeroAleatorio);
// }
//Define la cantidad de numeros aleatorios.
var cantidadNumeros = 10;
var myArray = [];
while (myArray.length < cantidadNumeros) {
  var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
  var existe = false;
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == numeroAleatorio) {
      existe = true;
      break;
    }
  }
  if (!existe) {
    myArray[myArray.length] = numeroAleatorio;
  }
}
document.write("números aleatorios : " + myArray);
