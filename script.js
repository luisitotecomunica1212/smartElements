// --- DATOS DE LOS 118 ELEMENTOS ---
const elementos = [
  { numero: 1, simbolo: "H", nombre: "Hidrógeno", grupo: 1, periodo: 1 },
  { numero: 2, simbolo: "He", nombre: "Helio", grupo: 18, periodo: 1 },
  { numero: 3, simbolo: "Li", nombre: "Litio", grupo: 1, periodo: 2 },
  { numero: 4, simbolo: "Be", nombre: "Berilio", grupo: 2, periodo: 2 },
  { numero: 5, simbolo: "B", nombre: "Boro", grupo: 13, periodo: 2 },
  { numero: 6, simbolo: "C", nombre: "Carbono", grupo: 14, periodo: 2 },
  { numero: 7, simbolo: "N", nombre: "Nitrógeno", grupo: 15, periodo: 2 },
  { numero: 8, simbolo: "O", nombre: "Oxígeno", grupo: 16, periodo: 2 },
  { numero: 9, simbolo: "F", nombre: "Flúor", grupo: 17, periodo: 2 },
  { numero: 10, simbolo: "Ne", nombre: "Neón", grupo: 18, periodo: 2 },
  { numero: 11, simbolo: "Na", nombre: "Sodio", grupo: 1, periodo: 3 },
  { numero: 12, simbolo: "Mg", nombre: "Magnesio", grupo: 2, periodo: 3 },
  { numero: 13, simbolo: "Al", nombre: "Aluminio", grupo: 13, periodo: 3 },
  { numero: 14, simbolo: "Si", nombre: "Silicio", grupo: 14, periodo: 3 },
  { numero: 15, simbolo: "P", nombre: "Fósforo", grupo: 15, periodo: 3 },
  { numero: 16, simbolo: "S", nombre: "Azufre", grupo: 16, periodo: 3 },
  { numero: 17, simbolo: "Cl", nombre: "Cloro", grupo: 17, periodo: 3 },
  { numero: 18, simbolo: "Ar", nombre: "Argón", grupo: 18, periodo: 3 },
  { numero: 19, simbolo: "K", nombre: "Potasio", grupo: 1, periodo: 4 },
  { numero: 20, simbolo: "Ca", nombre: "Calcio", grupo: 2, periodo: 4 },
  { numero: 21, simbolo: "Sc", nombre: "Escandio", grupo: 3, periodo: 4 },
  { numero: 22, simbolo: "Ti", nombre: "Titanio", grupo: 4, periodo: 4 },
  { numero: 23, simbolo: "V", nombre: "Vanadio", grupo: 5, periodo: 4 },
  { numero: 24, simbolo: "Cr", nombre: "Cromo", grupo: 6, periodo: 4 },
  { numero: 25, simbolo: "Mn", nombre: "Manganeso", grupo: 7, periodo: 4 },
  { numero: 26, simbolo: "Fe", nombre: "Hierro", grupo: 8, periodo: 4 },
  { numero: 27, simbolo: "Co", nombre: "Cobalto", grupo: 9, periodo: 4 },
  { numero: 28, simbolo: "Ni", nombre: "Níquel", grupo: 10, periodo: 4 },
  { numero: 29, simbolo: "Cu", nombre: "Cobre", grupo: 11, periodo: 4 },
  { numero: 30, simbolo: "Zn", nombre: "Zinc", grupo: 12, periodo: 4 },
  { numero: 31, simbolo: "Ga", nombre: "Galio", grupo: 13, periodo: 4 },
  { numero: 32, simbolo: "Ge", nombre: "Germanio", grupo: 14, periodo: 4 },
  { numero: 33, simbolo: "As", nombre: "Arsénico", grupo: 15, periodo: 4 },
  { numero: 34, simbolo: "Se", nombre: "Selenio", grupo: 16, periodo: 4 },
  { numero: 35, simbolo: "Br", nombre: "Bromo", grupo: 17, periodo: 4 },
  { numero: 36, simbolo: "Kr", nombre: "Kriptón", grupo: 18, periodo: 4 },
  { numero: 37, simbolo: "Rb", nombre: "Rubidio", grupo: 1, periodo: 5 },
  { numero: 38, simbolo: "Sr", nombre: "Estroncio", grupo: 2, periodo: 5 },
  { numero: 39, simbolo: "Y", nombre: "Itrio", grupo: 3, periodo: 5 },
  { numero: 40, simbolo: "Zr", nombre: "Circonio", grupo: 4, periodo: 5 },
  { numero: 41, simbolo: "Nb", nombre: "Niobio", grupo: 5, periodo: 5 },
  { numero: 42, simbolo: "Mo", nombre: "Molibdeno", grupo: 6, periodo: 5 },
  { numero: 43, simbolo: "Tc", nombre: "Tecnecio", grupo: 7, periodo: 5 },
  { numero: 44, simbolo: "Ru", nombre: "Rutenio", grupo: 8, periodo: 5 },
  { numero: 45, simbolo: "Rh", nombre: "Rodio", grupo: 9, periodo: 5 },
  { numero: 46, simbolo: "Pd", nombre: "Paladio", grupo: 10, periodo: 5 },
  { numero: 47, simbolo: "Ag", nombre: "Plata", grupo: 11, periodo: 5 },
  { numero: 48, simbolo: "Cd", nombre: "Cadmio", grupo: 12, periodo: 5 },
  { numero: 49, simbolo: "In", nombre: "Indio", grupo: 13, periodo: 5 },
  { numero: 50, simbolo: "Sn", nombre: "Estaño", grupo: 14, periodo: 5 },
  { numero: 51, simbolo: "Sb", nombre: "Antimonio", grupo: 15, periodo: 5 },
  { numero: 52, simbolo: "Te", nombre: "Telurio", grupo: 16, periodo: 5 },
  { numero: 53, simbolo: "I", nombre: "Yodo", grupo: 17, periodo: 5 },
  { numero: 54, simbolo: "Xe", nombre: "Xenón", grupo: 18, periodo: 5 },
  { numero: 55, simbolo: "Cs", nombre: "Cesio", grupo: 1, periodo: 6 },
  { numero: 56, simbolo: "Ba", nombre: "Bario", grupo: 2, periodo: 6 },
  { numero: 57, simbolo: "La", nombre: "Lantano", grupo: 3, periodo: 6 },
  { numero: 58, simbolo: "Ce", nombre: "Cerio", grupo: 3, periodo: 6 },
  { numero: 59, simbolo: "Pr", nombre: "Praseodimio", grupo: 3, periodo: 6 },
  { numero: 60, simbolo: "Nd", nombre: "Neodimio", grupo: 3, periodo: 6 },
  { numero: 61, simbolo: "Pm", nombre: "Prometio", grupo: 3, periodo: 6 },
  { numero: 62, simbolo: "Sm", nombre: "Samario", grupo: 3, periodo: 6 },
  { numero: 63, simbolo: "Eu", nombre: "Europio", grupo: 3, periodo: 6 },
  { numero: 64, simbolo: "Gd", nombre: "Gadolinio", grupo: 3, periodo: 6 },
  { numero: 65, simbolo: "Tb", nombre: "Terbio", grupo: 3, periodo: 6 },
  { numero: 66, simbolo: "Dy", nombre: "Disprosio", grupo: 3, periodo: 6 },
  { numero: 67, simbolo: "Ho", nombre: "Holmio", grupo: 3, periodo: 6 },
  { numero: 68, simbolo: "Er", nombre: "Erbio", grupo: 3, periodo: 6 },
  { numero: 69, simbolo: "Tm", nombre: "Tulio", grupo: 3, periodo: 6 },
  { numero: 70, simbolo: "Yb", nombre: "Iterbio", grupo: 3, periodo: 6 },
  { numero: 71, simbolo: "Lu", nombre: "Lutecio", grupo: 3, periodo: 6 },
  { numero: 72, simbolo: "Hf", nombre: "Hafnio", grupo: 4, periodo: 6 },
  { numero: 73, simbolo: "Ta", nombre: "Tantalio", grupo: 5, periodo: 6 },
  { numero: 74, simbolo: "W", nombre: "Wolframio", grupo: 6, periodo: 6 },
  { numero: 75, simbolo: "Re", nombre: "Renio", grupo: 7, periodo: 6 },
  { numero: 76, simbolo: "Os", nombre: "Osmio", grupo: 8, periodo: 6 },
  { numero: 77, simbolo: "Ir", nombre: "Iridio", grupo: 9, periodo: 6 },
  { numero: 78, simbolo: "Pt", nombre: "Platino", grupo: 10, periodo: 6 },
  { numero: 79, simbolo: "Au", nombre: "Oro", grupo: 11, periodo: 6 },
  { numero: 80, simbolo: "Hg", nombre: "Mercurio", grupo: 12, periodo: 6 },
  { numero: 81, simbolo: "Tl", nombre: "Talio", grupo: 13, periodo: 6 },
  { numero: 82, simbolo: "Pb", nombre: "Plomo", grupo: 14, periodo: 6 },
  { numero: 83, simbolo: "Bi", nombre: "Bismuto", grupo: 15, periodo: 6 },
  { numero: 84, simbolo: "Po", nombre: "Polonio", grupo: 16, periodo: 6 },
  { numero: 85, simbolo: "At", nombre: "Astato", grupo: 17, periodo: 6 },
  { numero: 86, simbolo: "Rn", nombre: "Radón", grupo: 18, periodo: 6 },
  { numero: 87, simbolo: "Fr", nombre: "Francio", grupo: 1, periodo: 7 },
  { numero: 88, simbolo: "Ra", nombre: "Radio", grupo: 2, periodo: 7 },
  { numero: 89, simbolo: "Ac", nombre: "Actinio", grupo: 3, periodo: 7 },
  { numero: 90, simbolo: "Th", nombre: "Torio", grupo: 3, periodo: 7 },
  { numero: 91, simbolo: "Pa", nombre: "Protactinio", grupo: 3, periodo: 7 },
  { numero: 92, simbolo: "U", nombre: "Uranio", grupo: 3, periodo: 7 },
  { numero: 93, simbolo: "Np", nombre: "Neptunio", grupo: 3, periodo: 7 },
  { numero: 94, simbolo: "Pu", nombre: "Plutonio", grupo: 3, periodo: 7 },
  { numero: 95, simbolo: "Am", nombre: "Americio", grupo: 3, periodo: 7 },
  { numero: 96, simbolo: "Cm", nombre: "Curio", grupo: 3, periodo: 7 },
  { numero: 97, simbolo: "Bk", nombre: "Berkelio", grupo: 3, periodo: 7 },
  { numero: 98, simbolo: "Cf", nombre: "Californio", grupo: 3, periodo: 7 },
  { numero: 99, simbolo: "Es", nombre: "Einsteinio", grupo: 3, periodo: 7 },
  { numero: 100, simbolo: "Fm", nombre: "Fermio", grupo: 3, periodo: 7 },
  { numero: 101, simbolo: "Md", nombre: "Mendelevio", grupo: 3, periodo: 7 },
  { numero: 102, simbolo: "No", nombre: "Nobelio", grupo: 3, periodo: 7 },
  { numero: 103, simbolo: "Lr", nombre: "Lawrencio", grupo: 3, periodo: 7 },
  { numero: 104, simbolo: "Rf", nombre: "Rutherfordio", grupo: 4, periodo: 7 },
  { numero: 105, simbolo: "Db", nombre: "Dubnio", grupo: 5, periodo: 7 },
  { numero: 106, simbolo: "Sg", nombre: "Seaborgio", grupo: 6, periodo: 7 },
  { numero: 107, simbolo: "Bh", nombre: "Bohrio", grupo: 7, periodo: 7 },
  { numero: 108, simbolo: "Hs", nombre: "Hassio", grupo: 8, periodo: 7 },
  { numero: 109, simbolo: "Mt", nombre: "Meitnerio", grupo: 9, periodo: 7 },
  { numero: 110, simbolo: "Ds", nombre: "Darmstadtio", grupo: 10, periodo: 7 },
  { numero: 111, simbolo: "Rg", nombre: "Roentgenio", grupo: 11, periodo: 7 },
  { numero: 112, simbolo: "Cn", nombre: "Copernicio", grupo: 12, periodo: 7 },
  { numero: 113, simbolo: "Nh", nombre: "Nihonio", grupo: 13, periodo: 7 },
  { numero: 114, simbolo: "Fl", nombre: "Flerovio", grupo: 14, periodo: 7 },
  { numero: 115, simbolo: "Mc", nombre: "Moscovio", grupo: 15, periodo: 7 },
  { numero: 116, simbolo: "Lv", nombre: "Livermorio", grupo: 16, periodo: 7 },
  { numero: 117, simbolo: "Ts", nombre: "Tenesino", grupo: 17, periodo: 7 },
  { numero: 118, simbolo: "Og", nombre: "Oganesón", grupo: 18, periodo: 7 }
];

// --- REFERENCIAS AL DOM ---
const tabla = document.getElementById("periodic-table");
const info = document.getElementById("info");
const busqueda = document.getElementById("search");
const preguntaTexto = document.getElementById("question");
const respuestas = document.getElementById("answers");

let vistos = [];

// --- MOSTRAR ELEMENTOS ---
function mostrarElementos(filtro = "") {
  tabla.innerHTML = "";
  elementos
    .filter(e => e.nombre.toLowerCase().includes(filtro) || e.simbolo.toLowerCase().includes(filtro))
    .forEach(el => {
      const div = document.createElement("div");
      div.classList.add("element");
      div.innerHTML = <strong>${el.simbolo}</strong><br>${el.numero}<br>${el.nombre};
      div.addEventListener("click", () => mostrarInfo(el));
      tabla.appendChild(div);
    });
}

// --- MOSTRAR INFORMACIÓN ---
function mostrarInfo(el) {
  info.innerHTML = `
    <h2>${el.nombre} (${el.simbolo})</h2>
    <p><b>Número atómico:</b> ${el.numero}</p>
    <p><b>Grupo:</b> ${el.grupo}, <b>Período:</b> ${el.periodo}</p>
    <img src="https://source.unsplash.com/200x200/?${el.nombre}" alt="${el.nombre}">
  `;
  if (!vistos.includes(el)) {
    vistos.push(el);
    crearPregunta();
  }
}

// --- BÚSQUEDA EN VIVO ---
busqueda.addEventListener("input", e => {
  mostrarElementos(e.target.value.toLowerCase());
});

// --- CREAR PREGUNTAS ---
function crearPregunta() {
  if (vistos.length < 3) return;
  const correcto = vistos[Math.floor(Math.random() * vistos.length)];
  const opciones = [
    correcto,
    elementos[Math.floor(Math.random() * elementos.length)],
    elementos[Math.floor(Math.random() *
