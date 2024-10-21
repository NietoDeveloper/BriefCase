const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    // console.log(links.classList);
    links.classList.toggle('show-links');
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
})

const btnTodos = document.querySelector(".all");
const btnJs = document.querySelector(".js");
const btnReact = document.querySelector(".react");
const btnNodejs = document.querySelector(".nodejs");
const btnJava = document.querySelector(".java");
const btnAstro = document.querySelector(".astro");
const contenedorProyects = document.querySelector(".proyects");
document.addEventListener("DOMContentLoaded", () => {
  proyects();
});

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
  const java = proyectsArreglo.filter(
    (java) => java.getAttribute("data-proyect") === "java"
  );
  const astro = proyectsArreglo.filter(
     (astro) => astro.getAttribute("data-proyect") === "astro" 
  );
  mostrarProyects(js, react, nodejs, java, astro, proyectsArreglo);
};
const mostrarProyects = (js, react, nodejs, java, astro, todos) => {
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
  btnJava.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    java.forEach((java) => contenedorProyects.appendChild(java));
  });
  btnAstro.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    astro.forEach((astro) => contenedorProyects.appendChild(astro));
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
