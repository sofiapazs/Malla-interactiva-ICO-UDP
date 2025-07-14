const cursos = [
  { id: "c0", nombre: "Matemáticas II", requisitos: ["c29"] },
  { id: "c1", nombre: "Estadística I", requisitos: ["c30", "c0"] },
  { id: "c2", nombre: "Tecnología y Empresa", requisitos: ["c30"] },
  { id: "c3", nombre: "Fund. Adm. y Neg. II", requisitos: ["c31"] },
  { id: "c4", nombre: "Taller Com. II", requisitos: ["c32"] },
  { id: "c5", nombre: "Inglés II", requisitos: ["c33"] },
  { id: "c6", nombre: "Matemáticas III", requisitos: ["c0"] },
  { id: "c7", nombre: "Microeconomía II", requisitos: ["c34", "c0"] },
  { id: "c8", nombre: "Macroeconomía I", requisitos: ["c34"] },
  { id: "c9", nombre: "Macroeconomía II", requisitos: ["c6", "c8"] },
  { id: "c10", nombre: "Estadística II", requisitos: ["c1"] },
  { id: "c11", nombre: "Contabilidad II", requisitos: ["c35"] },
  { id: "c12", nombre: "Personas y Equipos", requisitos: ["c3"] },
  { id: "c13", nombre: "Estrategia", requisitos: ["c12", "c4"] },
  { id: "c14", nombre: "Taller Liderazgo", requisitos: ["c3", "c4"] },
  { id: "c15", nombre: "Finanzas I", requisitos: ["c11", "c10"] },
  { id: "c16", nombre: "Ciencia de Datos", requisitos: ["c2", "c17"] },
  { id: "c17", nombre: "Econometría I", requisitos: [] },
  { id: "c18", nombre: "Finanzas II", requisitos: ["c15", "c16"] },
  { id: "c19", nombre: "Taller de Ética", requisitos: ["c14"] },
  { id: "c20", nombre: "Taller Emprendimiento", requisitos: ["c13", "c19"] },
  { id: "c21", nombre: "Marketing", requisitos: ["c10", "c13"] },
  { id: "c22", nombre: "Globalización", requisitos: ["c10", "c7", "c13"] },
  { id: "c23", nombre: "Gestión Operaciones", requisitos: ["c10", "c13"] },
  { id: "c24", nombre: "F. Eco. Org.", requisitos: ["c7", "c22"] },
  { id: "c25", nombre: "Implementación", requisitos: ["c13", "c18", "c22"] },
  { id: "c26", nombre: "Derecho Negocios", requisitos: ["c27"] },
  { id: "c27", nombre: "Recursos Humanos", requisitos: ["c12"] },
  { id: "c28", nombre: "Taller Juego", requisitos: ["c15", "c20"] },
  { id: "c29", nombre: "Matemáticas I", requisitos: [] },
  { id: "c30", nombre: "Programación", requisitos: [] },
  { id: "c31", nombre: "Fund. Adm. y Neg. I", requisitos: [] },
  { id: "c32", nombre: "Taller Com. I", requisitos: [] },
  { id: "c33", nombre: "Inglés I", requisitos: [] },
  { id: "c34", nombre: "Microeconomía I", requisitos: [] },
  { id: "c35", nombre: "Contabilidad I", requisitos: [] }
];

const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso locked";
  div.textContent = curso.nombre;
  div.id = curso.id;
  div.onclick = () => {
    if (div.classList.contains("locked")) return;
    div.classList.toggle("aprobado");
    actualizarEstado();
  };
  malla.appendChild(div);
});

function actualizarEstado() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (div.classList.contains("aprobado") || curso.requisitos.length === 0) {
      div.classList.remove("locked");
    } else {
      const requisitosCumplidos = curso.requisitos.every(id =>
        document.getElementById(id).classList.contains("aprobado")
      );
      if (requisitosCumplidos) {
        div.classList.remove("locked");
      }
    }
  });
}
