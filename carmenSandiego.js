const ciutats = ["tokyo", "berlin", "barcelona", "moscow", "paris"];

const pistes = [
  // falta poner pistas
];

let segundos = 60;
let temporizador;
let fallos = 0;
let ciutatCorrecta;

function comencarJoc() {
  ciutatCorrecta = ciutatAleatoria();
  comencarContador();
}

function comencarContador() {
  const numero = document.getElementById("contador");

  temporizador = setInterval(() => {
    numero.innerHTML = segundos;
    segundos--;

    if (segundos === -1) {
      clearInterval(temporizador);
      alert("Temps acabat, has perdut!");
      alert("La ciutat correcta era: " + ciutatCorrecta);
    }
  }, 1000);
}

function ciutatAleatoria() {
    const cAleatoria = ciutats[Math.floor(Math.random() * ciutats.length)];
    return cAleatoria;
}

function comprobarResultat() {
  const ciutatSeleccionada = document.getElementById("ciutats").value;

  if (ciutatSeleccionada === ciutatCorrecta) {
    alert("Has trobat a na Carmen Sandiego, enhorabona!");
    clearInterval(temporizador);
    reiniciarJoc();
  } else {
    alert("Nono, segueix probant");
    fallos++;
  }
}

function reiniciarJoc() {
  document.getElementById("game").style.display = "none";
  clearInterval(temporizador);
  fallos = 0;
  segundos = 60;
}
