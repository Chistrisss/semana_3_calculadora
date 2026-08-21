
let pantalla = "0";
let numeroGuardado = null;
let operacion = null;
let nuevoNumero = false;


function actualizarPantalla() {
  const elPantalla = document.getElementById("pantalla");
  if (elPantalla) {
    elPantalla.innerText = pantalla;
  }
}


function numero(num) {
  if (pantalla === "0" || nuevoNumero) {
    pantalla = num;
    nuevoNumero = false;
  } else {
    pantalla += num;
  }
  actualizarPantalla();
}


function decimal() {
  if (nuevoNumero) {
    pantalla = "0.";
    nuevoNumero = false;
  } else if (!pantalla.includes(".")) {
    pantalla += ".";
  }
  actualizarPantalla();
}

function operar(op) {
  numeroGuardado = parseFloat(pantalla);
  operacion = op;
  nuevoNumero = true;
}

function calcular() {
  if (operacion === null || nuevoNumero) return;

  const numeroActual = parseFloat(pantalla);
  let resultado = 0;

  if (operacion === "+") resultado = numeroGuardado + numeroActual;
  else if (operacion === "-") resultado = numeroGuardado - numeroActual;
  else if (operacion === "×") resultado = numeroGuardado * numeroActual;
  else if (operacion === "÷") {
    resultado = numeroActual === 0 ? "Error" : numeroGuardado / numeroActual;
  }

  pantalla = String(resultado);
  operacion = null;
  nuevoNumero = true;
  actualizarPantalla();
}

function borrarUno() {
  if (pantalla.length === 1 || (pantalla.length === 2 && pantalla.startsWith("-"))) {
    pantalla = "0";
  } else {
    pantalla = pantalla.slice(0, -1);
  }
  actualizarPantalla();
}


function limpiar() {
  pantalla = "0";
  numeroGuardado = null;
  operacion = null;
  nuevoNumero = false;
  actualizarPantalla();
}


function porcentaje() {
  const num = parseFloat(pantalla);
  if (!isNaN(num)) {
    pantalla = String(num / 100);
    actualizarPantalla();
  }
}