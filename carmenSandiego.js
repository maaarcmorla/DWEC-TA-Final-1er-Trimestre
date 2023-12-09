const ciutats = [
  { nom: "tokyo", pistes: ["Famós pels seus gratacels.", "Ciutat amb més neons del món.", "Ciutat més poblada del món."] },
  { nom: "berlin", pistes: ["La ciutat de les arts, els artistes i els museus.", "Pista 2 para Berlin", "Pista 3 para Berlin"] },
  { nom: "barcelona", pistes: ["És una ciutat cosmopolita.", "Pista 2 para Barcelona", "Pista 3 para Barcelona"] },
  { nom: "moscow", pistes: ["Se situa al riu Moscova.", "El seu centre simbòlic és: Plaça Roj", "Pista 3 para Moscow"] },
  { nom: "paris", pistes: ["La ciutat de l'amor.", "La ciutat de la moda.", "El Riu Sena passa per la ciutat."] }
];

let segundos = 60;
let temporizador;
let indexPistes = 0;
let ciutatCorrecta;
let fallos = 0;

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
      alert("La ciutat correcta era: " + ciutatCorrecta.nom);
    }
  }, 1000);
}

function ciutatAleatoria() {
  const cAleatoria = ciutats[Math.floor(Math.random() * ciutats.length)];
  return cAleatoria;
}

function mostrarPistes() {
  const mPistes = document.getElementById("pistes");
  
  // Miram si hi ha més pistes disponibles
  if (indexPistes < ciutatCorrecta.pistes.length) {
    mPistes.innerHTML = ciutatCorrecta.pistes[indexPistes];
    indexPistes++;
  } else {
    // Quan s'haguin vist totes les pistes torna a començar amb la primera pista
    indexPistes = 0;
    mPistes.innerHTML = ciutatCorrecta.pistes[indexPistes];
    indexPistes++;
  }
}

function comprobarResultat() {
  const ciutatSeleccionada = document.getElementById("ciutats").value;

  if (ciutatSeleccionada === ciutatCorrecta.nom ) {
    alert("Has trobat a na Carmen Sandiego, enhorabona!");
    clearInterval(temporizador);
    finalJoc();
  } else {
    alert("Nono, segueix probant");
    contadorErrades();
  }
}

function contadorErrades() {
  fallos++
  document.getElementById("fallos").innerHTML = fallos;

  // if (fallos === 3) {
  //   alert("T'has quedat sense intents. La ciutat correcta era: "+ ciutatCorrecta.nom);
  //   finalJoc();
  // }
}

function finalJoc() {
  document.getElementById("game").style.display = "none";
  clearInterval(temporizador);
}

function reiniciarJoc() {
  clearInterval(temporizador);
  fallos = 0;
  indexPistes = 0;
  segundos = 60;
  comencarJoc();
}
