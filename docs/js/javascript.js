import { icons } from "./icon.js";

window.onload = () => {
  console.log(icons);
};

// let parejasAcertadas = [];
// let numImgVisibles = 0;

// let puntos = 1;
// let maxPuntos = 0;
// let partidaIniciada = false;
window.onload = grid;

let DiferentesDificultades = {
  facil: [4, 8, "facil"],
  medio: [6, 18, "medio"],
  dificil: [8, 32, "dificil"],
};

function grid() {
  PartidasJugadas();

  let modal = document.getElementById("dificultadBtn");

  let buttons = modal.childNodes;

  buttons.forEach((button) => {
    button.onclick = dificultad;
  });

  document.getElementById("tablaPuntuaciones").onclick = historialPartidas;
}
let ArrayPuntos = [];

const historialPartidas = () => {
  document.getElementById("puntosMaxValue").innerText = 0;
  document.getElementById("principal").innerHTML = " ";
  document.getElementById("tablaPoint").innerHTML = `
  <div id="tablePoints" class="modal-body">
  <button id="facil1" class="btn  btn-outline-primary">Fácil</button>
  <button id="medio2" class="btn btn-outline-secondary">Medio</button>
  <button id="dificil3" class="btn btn-outline-danger">Dificil</button>
</div>
 
  <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody id="tbodyId">
  </tbody>
</table>`;

  const easy = document.getElementById("facil1");

  easy.addEventListener("click", () => {
    document.getElementById("tbodyId").innerHTML = " ";
    let orden = [];
    orden = ordenamiento("facil");
    if (orden == null) {
      return;
    }

    orden.forEach((element, index) => {
      document.getElementById("tbodyId").innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element.name}</td>
        <td>${element.tiempo}</td>
       
      </tr>`;
    });
  });

  const normal = document.getElementById("medio2");
  normal.addEventListener("click", () => {
    document.getElementById("tbodyId").innerHTML = " ";
    let orden = [];
    orden = ordenamiento("medio");
    if (orden == null) {
      return;
    }
    orden.forEach((element, index) => {
      document.getElementById("tbodyId").innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element.name}</td>
        <td>${element.tiempo}</td>
       
      </tr>`;
    });
  });
  const hard = document.getElementById("dificil3");

  hard.addEventListener("click", () => {
    document.getElementById("tbodyId").innerHTML = " ";
    let orden = [];
    orden = ordenamiento("dificil");
    if (orden == null) {
      return;
    }
    orden.forEach((element, index) => {
      document.getElementById("tbodyId").innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element.name}</td>
        <td>${element.tiempo}</td>
       
      </tr>`;
    });
  });

  resetTime();
};

const getPuntuacion = (lavel, tercer) => {
  let score = document.getElementById("puntosValue");
  if (lavel[0] != undefined) {
    ArrayPuntos.push(lavel);
  } else {
    //("borrando array puntos");
    resetTime();
    ArrayPuntos = [];
  }

  let resultado = ArrayPuntos.reduce((actual, siguiente) => {
    return actual.concat(siguiente);
  }, []);

  let dataArr = new Set(resultado);
  let result = [...dataArr];

  score.innerText = result.length / 2;

  if (score.innerText == DiferentesDificultades[tercer][1]) {
    let modalbody = document.getElementById("modalbody");

    clearTimeout(t);

    $("#staticBackdrop").modal("show");
    $("#modal-body").val("valor cambiado");
    modalbody.innerHTML = `Tiempo: ${cronometro.innerText} <br> Nombre: <input  id="modalName" type="text" />`;
    pointsavefun(tercer);
  }
};

function pointsavefun(tercer) {
  let puntajes = JSON.parse(window.localStorage.getItem(tercer));
  if (puntajes == null) {
    const savepoint = document.getElementById("saveChange");
    const cancelar = document.getElementById("cancelar");

    cancelar.addEventListener("click", () => {
      window.location.reload();
    });

    savepoint.addEventListener("click", (e) => {
      let player = document.getElementById("modalName").value;
      let players = {
        name: player,
        tiempo: cronometro.innerText,
      };

      window.localStorage.setItem(tercer, JSON.stringify([players]));
      $("#staticBackdrop").modal("hide");

      resetTime();
      puntosValue.innerText = 0;
      document.getElementById("principal").innerHTML = " ";
      window.location.reload();
    });
  } else {
    const savepoint = document.getElementById("saveChange");
    const cancelar = document.getElementById("cancelar");

    cancelar.addEventListener("click", () => {
      window.location.reload();
    });
    savepoint.addEventListener("click", (e) => {
      let player = document.getElementById("modalName").value;
      let players = {
        name: player,
        tiempo: cronometro.innerText,
      };

      puntajes.push(players);
      window.localStorage.setItem(tercer, JSON.stringify(puntajes));
      $("#staticBackdrop").modal("hide");
      resetTime();
      puntosValue.innerText = 0;
      document.getElementById("principal").innerHTML = " ";
      window.location.reload();
    });
  }
}

function dificultad() {
  const ArrayDificultad = DiferentesDificultades[this.id];

  arrayOpciones(ArrayDificultad);
}

const arrayOpciones = (array) => {
  let [cantidadParejas, segunnum, tercer] = array;

  maxPointLevel(tercer);

  crearCarta(cantidadParejas, segunnum, tercer);
};

const crearCarta = (cantidad, segundoParametro, tercer) => {
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

  resetTime();
  timer();
  VoltearCarta(tercer);
};
const VoltearCarta = (tercer) => {
  let dov = document.querySelectorAll(".contcard");
  let clickCarta = [];
  let identificarCarta = [];
  for (const cartas of dov) {
    cartas.addEventListener("click", function (event) {
      event.preventDefault();
      clickCarta.push(cartas.childNodes[1].childNodes[0].classList[1]);
      identificarCarta.push(cartas.childNodes[1].childNodes[0].classList[2]);
      cartas.classList.toggle("flipCard");
      ArrayCarta1Y2(clickCarta, identificarCarta, tercer);
    });
  }
};

const ArrayCarta1Y2 = (cartauno, identificador, tercer) => {
  let arruno = [];
  let arrid = [];

  for (let x = 0; x < 2; x++) {
    arruno.push(cartauno[x]);
    arrid.push(identificador[x]);
  }

  if (cartauno[1] !== undefined) {
    Arrayde2(arruno, arrid, tercer);
    cartauno.splice(0, arruno.length);
    identificador.splice(0, arruno.length);
  }
};

const Arrayde2 = (ar, id, tercer) => {
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

    getPuntuacion(lave, tercer);
  } else if (valores[0] != valores[1]) {
    setTimeout(function () {
      dov[lave[0]].classList.add("flipCard");
      dov[lave[1]].classList.add("flipCard");
    }, 1000);
  } else {
    dov[lave[0]].classList.add("flipCard");
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

//cronometro
const cronometro = document.getElementById("cronometro");

let sec = 0;
let min = 0;
let hrs = 0;
let t;

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

function resetTime() {
  sec = 0;
  min = 0;
  hrs = 0;
  clearTimeout(t);
  cronometro.textContent = "00:00:00";
}

function ordenamiento(dificultadKey) {
  let points = JSON.parse(window.localStorage.getItem(dificultadKey));

  let copiaPoint = JSON.parse(JSON.stringify(points));
  if (copiaPoint == null) {
    return;
  }

  copiaPoint.map((elem) => {
    return (elem.auxTime = parseInt(elem.tiempo.split(":").join("")));
  });

  const sorted = copiaPoint.sort((a, b) => {
    return a.auxTime - b.auxTime;
  });
  return sorted;
}

function maxPointLevel(level) {
  const maxpoint = document.getElementById("puntosMaxValue");

  let aux = ordenamiento(level);

  if (aux == null) {
    return (maxpoint.innerText = 0);
  }
  maxpoint.innerText = `${aux[0].name} --- ${aux[0].tiempo}`;
}

function PartidasJugadas() {
  const numPartida = document.getElementById("numPartidasValue");

  let easy =
    ordenamiento("facil") == undefined ? 0 : ordenamiento("facil").length;

  let medium =
    ordenamiento("medio") == undefined ? 0 : ordenamiento("medio").length;

  let hard =
    ordenamiento("dificil") == undefined ? 0 : ordenamiento("dificil").length;

  return (numPartida.innerText = easy + medium + hard);
}
