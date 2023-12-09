// Definim el nom de les ciutats amb les seves corresponents pistes
const ciutats = [
  { nom: "tokyo", pistes: ["Famós pels seus gratacels.", "Ciutat amb més neons del món.", "Ciutat més poblada del món."] },
  { nom: "berlin", pistes: ["La ciutat de les arts, els artistes i els museus.", "El arte urbano está presente en toda la ciudad", "El riu Spree passa per la seva ciutat"] },
  { nom: "barcelona", pistes: ["És una ciutat cosmopolita.", "Té diversos punts, declarats Patrimoni de la Humanitat", "És al mar mediterrani"] },
  { nom: "moscow", pistes: ["Se situa al riu Moscova.", "El seu centre simbòlic és: La Plaza Roja", "Coneguda per les seves colorides cúpules"] },
  { nom: "paris", pistes: ["La ciutat de l'amor.", "La ciutat de la moda.", "El Riu Sena passa per la ciutat."] }
];

// Definim les variables que necesitarem posteriorment
let segundos = 60;
let temporizador;
let indexPistes = 0;
let ciutatCorrecta;
let fallos = 0;


// Cream una funció per poder executar el joc a partir d'un botó i que comencí el temporitzador de temps
function comencarJoc() {
  ciutatCorrecta = ciutatAleatoria();
  noBlur();
  comencarContador();
}

// Funció només estetica per desactivar el desenfoc
function noBlur() {
  const bReiniciar = document.getElementById("botoReiniciar");
  const bContador = document.getElementById("bContador");
  const bOpciones = document.getElementsByClassName("opciones");
  const bResultat = document.getElementsByClassName("btnResultat");
  const bFallos = document.getElementsByClassName("fallos");
  const bImg = document.getElementsByClassName("img");

  bReiniciar.style.filter = 'blur(0px)';
  bContador.style.filter = 'blur(0px)';
  for (let i = 0; i < bOpciones.length; i++) {
    bOpciones[i].style.filter = "blur(0px)";
  }
  for (let i = 0; i < bResultat.length; i++) {
    bResultat[i].style.filter = "blur(0px)";
  }
  for (let i = 0; i < bFallos.length; i++) {
    bFallos[i].style.filter = "blur(0px)";
  }
  for (let i = 0; i < bImg.length; i++) {
    bImg[i].style.filter = "blur(0px)";
  }
}

// Funció per inicialitzar un temporitzador regresiu
function comencarContador() {
  const numero = document.getElementById("contador");

  temporizador = setInterval(() => {
    numero.innerHTML = segundos;
    segundos--;

    if (segundos === -1) {
      // Quan el temps arriba a 0 el temporitzador s'atura i mostra dos alerts, al segon alert mostra el nom de la ciutat correcta. Tambe desabilita la posibilitat d'elegir una ciutat
      clearInterval(temporizador);
      const sDisabled = document.getElementById("ciutats");
      sDisabled.disabled = true;
      alert("Temps acabat, has perdut!");
      alert("La ciutat correcta era: " + ciutatCorrecta.nom);
      finalJoc();
    }
  }, 1000);
}

// Funció per poder elegir una ciutat aleatoriament 
function ciutatAleatoria() {
  const cAleatoria = ciutats[Math.floor(Math.random() * ciutats.length)];
  return cAleatoria;
}

// Funció per poder mostrar les pistes a l'index.html
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

// Funció per comprobar que la ciutat que hem seleccionat sigui la correcta
function comprobarResultat() {
  const ciutatSeleccionada = document.getElementById("ciutats").value;

  // Si la ciutat seleccionada es la correcta s'acaba el joc i has guanyat
  if (ciutatSeleccionada === ciutatCorrecta.nom ) {
    alert("Has trobat a na Carmen Sandiego, enhorabona!");
    clearInterval(temporizador);
    const sDisabled = document.getElementById("ciutats");
      sDisabled.disabled = true;
    finalJoc();
  // Si la ciutat seleccionada no es la correcta es mostra un alert i es suma un error al contador
  } else {
    alert("Nono, segueix probant");
    contadorErrades();
  }
}

// Funció per sumar errors al contador i mostrarlos a l'index.html
function contadorErrades() {
  fallos++
  document.getElementById("fallos").innerHTML = fallos;
}

// Funció per finalitzar el joc
function finalJoc() {
  document.getElementById("joc").style.display = "none";
  clearInterval(temporizador);
}

// Funció per reiniciar el joc
function reiniciarJoc() {
  clearInterval(temporizador);
  const sDisabled = document.getElementById("ciutats");
  sDisabled.disabled = false;
  fallos = 0;
  indexPistes = 0;
  segundos = 60;
  comencarJoc();
}
