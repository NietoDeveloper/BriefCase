const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const btnTodos = document.querySelector(".all");
const btnJs = document.querySelector(".js");
const btnReact = document.querySelector(".react");
const btnNodejs = document.querySelector(".nodejs");
const btnPhyton = document.querySelector(".phyton");
const contenedorProyects = document.querySelector(".proyects");
document.addEventListener("DOMContentLoaded", () => {
  eventos();
  proyects();
});
const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};
const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};
const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  const body = document.querySelector("body");
  if (document.querySelectorAll(".pantalla-completa").length > 0) return;
  body.appendChild(overlay);
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");
  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar, overlay);
};
const cerrarMenu = (boton, overlay) => {
  boton.addEventListener("click", () => {
    navegacion.classList.add("ocultar");
    overlay.remove();
    boton.remove();
  });

  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  };
};
const proyects = () => {
  let proyectsArreglo = [];
  const proyects = document.querySelectorAll(".proyect");
  proyects.forEach(
    (proyect) => (proyectsArreglo = [...proyectsArreglo, proyect])
  );
  const js = proyectsArreglo.filter(
    (js) => js.getAttribute("data-proyect") === "js"
  );
  const react = proyectsArreglo.filter(
    (react) => react.getAttribute("data-proyect") === "react"
  );
  const nodejs = proyectsArreglo.filter(
    (nodejs) => nodejs.getAttribute("data-proyect") === "nodejs"
  );
  const phyton = proyectsArreglo.filter(
    (phyton) => phyton.getAttribute("data-proyect") === "phyton"
  );
  mostrarProyects(js, react, nodejs, phyton, proyectsArreglo);
};
const mostrarProyects = (js, react, nodejs, phyton, todos) => {
  btnJs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    js.forEach((js) => contenedorProyects.appendChild(js));
  });
  btnReact.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    react.forEach((react) => contenedorProyects.appendChild(react));
  });
  btnNodejs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    nodejs.forEach((nodejs) => contenedorProyects.appendChild(nodejs));
  });
  btnPhyton.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    phyton.forEach((phyton) => contenedorProyects.appendChild(phyton));
  });
  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    todos.forEach((todo) => contenedorProyects.appendChild(todo));
  });
};
const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};
const d = new Date();
document.getElementById("date").innerHTML = d;
