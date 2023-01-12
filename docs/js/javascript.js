let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 1;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

let DiferentesDificultades = {
  //facil: [4, 8],
  facil: [2, 2],
  //medio: [6, 18],
  medio: [2, 2],
  //dificil: [8, 32],
  dificil: [2, 2],
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
  9: "fab fa-angellist",
  10: "fa fa-apple-alt",
  11: "fa fa-archive",
  12: "fa fa-asterisk",
  13: "fa fa-atlas",
  14: "fa fa-atom",
  15: "fas fa-award",
  16: "far fa-bookmark",
  17: "fas fa-tree",
  18: "fa fa-bacteria",
  19: "fas fa-users",
  20: "fas fa-draw-polygon",
  21: "fas fa-comment-alt",
  22: "fa fa-balance-scale",
  23: "fas fa-wave-square",
  24: "fas fa-battery-three-quarters",
  25: "fas fa-handshake",
  26: "fab fa-pagelines",
  27: "fas fa-shoe-prints",
  28: "fas fa-street-view",
  29: "fas fa-socks",
  30: "fas fa-allergies",
  31: "fab fa-free-code-camp",
  32: "fab fa-sistrix",
};
function grid() {
  // getMaxPuntos();
  //NIVEL DIFICULTAD
  let modal = document.getElementById("dificultadBtn");

  let buttons = modal.childNodes;

  buttons.forEach((button) => {
    button.onclick = dificultad;
  });

  document.getElementById("tablaPuntuaciones").onclick = historialPartidas;
}
let ArrayPuntos = [];

const historialPartidas = () => {
  document.getElementById("principal").innerHTML = " ";
  document.getElementById("tablaPoint").innerHTML = `
  <div >
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
     
    </tr>
  </tbody>
</table>`;
  resetTime();
};

const getPuntuacion = (lavel) => {
  let score = document.getElementById("puntosValue");
  if (lavel[0] != undefined) {
    ArrayPuntos.push(lavel);
  } else {
    //("borrando array puntos");
    ArrayPuntos = [];
  }

  let resultado = ArrayPuntos.reduce((actual, siguiente) => {
    return actual.concat(siguiente);
  }, []);

  let dataArr = new Set(resultado);
  let result = [...dataArr];

  score.innerText = result.length / 2;
};

function dificultad() {
  const ArrayDificultad = DiferentesDificultades[this.id];

  getPuntuacion((puntos = 0));
  arrayOpciones(ArrayDificultad);
}

const arrayOpciones = (array) => {
  let [cantidadParejas, segunnum, tercer] = array;
  //  let CantidadCartas = cantidadParejas * cantidadParejas;
  crearCarta(cantidadParejas, segunnum);
};

const crearCarta = (cantidad, segundoParametro) => {
  document.getElementById("tablaPoint").innerHTML = " ";
  let cartas = cantidad * cantidad;
  let carta1 = ArrayNumAleatorio(segundoParametro);
  let carta2 = ArrayNumAleatorio(segundoParametro);
  carta1 = [...carta1, ...carta2];
  let shuffleArray = carta1.sort(() => Math.random() - 0.5);
  document.getElementById("principal").innerHTML = "";

  for (let i = 0; i < cartas; i++) {
    document.getElementById(
      "principal"
    ).innerHTML += `<div class="row text-center">
    <div class="d-flex align-content-end flex-wrap contenido " id="div1">
      <div class="d-flex align-content-end flex-wrap contenido ">
        <div class="bg-white rounded shadow-sm py-5 px-4 contcard flipCard">
          <h5 class="mb-0" ><i class=" ${
            icons[shuffleArray[i]]
          } ${i} extraClass"></i></h5>
          </button>
        </div>
    </div>
</div>`;
  }
  //inicia cronometro
  timer();
  VoltearCarta();
};
const VoltearCarta = () => {
  let dov = document.querySelectorAll(".contcard");
  let clickCarta = [];
  let identificarCarta = [];
  for (const cartas of dov) {
    cartas.addEventListener("click", function (event) {
      event.preventDefault();
      clickCarta.push(cartas.childNodes[1].childNodes[0].classList[1]);
      identificarCarta.push(cartas.childNodes[1].childNodes[0].classList[2]);
      cartas.classList.toggle("flipCard");
      ArrayCarta1Y2(clickCarta, identificarCarta);
    });
  }
};

const ArrayCarta1Y2 = (cartauno, identificador) => {
  let arruno = [];
  let arrid = [];

  for (let x = 0; x < 2; x++) {
    arruno.push(cartauno[x]);
    arrid.push(identificador[x]);
  }

  if (cartauno[1] !== undefined) {
    Arrayde2(arruno, arrid);
    cartauno.splice(0, arruno.length);
    identificador.splice(0, arruno.length);
  }
};

const Arrayde2 = (ar, id) => {
  let obj = {};
  id.forEach((k, i) => {
    obj[k] = ar[i];
  });
  let dov = document.querySelectorAll(".contcard");
  let tamanio = Object.keys(obj).length; //tamaño de objeto, sirve para verificar que no seleccione la misma tarjeta
  let lave = Object.keys(obj);
  let valores = Object.values(obj);
  if (valores[0] === valores[1]) {
    dov[lave[0]].classList.add("fli"),
      dov[lave[1]].classList.add("fli"),
      dov[lave[0]].classList.remove("flipCard"),
      dov[lave[1]].classList.remove("flipCard");

    //  console.log(lave, valores);
    getPuntuacion(lave);
    //    Puntuacion();
  } else if (valores[0] !== valores[1]) {
    setTimeout(function () {
      dov[lave[0]].classList.add("flipCard");
      dov[lave[1]].classList.add("flipCard");
    }, 1000);
  } else {
    dov[lave[0]].classList.add("flipCard");
  }
};
//const Puntuacion = () => {};
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
  //console.log(ArregloAleatorio);
  return ArregloAleatorio;
};

//cronometro
var cronometro = document.getElementById("cronometro");

var start = document.getElementById("strt");
var stop = document.getElementById("stp");
var reset = document.getElementById("rst");
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}
function addTime() {
  tick();
  cronometro.textContent =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  t = setTimeout(addTime, 1000);
}

//timer();
//start.onclick = timer;
// stop.onclick = function () {
//   clearTimeout(t);
// };
// reset.onclick = function () {
//   cronometro.textContent = "00:00:00";
//   // seconds = 0;
//   // minutes = 0;
//   // hours = 0;
// };
function resetTime() {
  sec = 0;
  min = 0;
  hrs = 0;
  clearTimeout(t);
  cronometro.textContent = "00:00:00";
}
