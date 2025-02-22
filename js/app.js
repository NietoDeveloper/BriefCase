const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})

const btnTodos = document.querySelector(".all");
const btnDocker = document.querySelector(".docker");
const btnReact = document.querySelector(".react");
const btnNodejs = document.querySelector(".nodejs");
const btnPython = document.querySelector(".python");
const btnAstro = document.querySelector(".astro");
const btnMySQL = document.querySelector(".mysql");
const btnNEXTJS = document.querySelector(".nextjs");
const btnHTMLCSSJS = document.querySelector(".htmlcssjs");
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
  const htmlcssjs = proyectsArreglo.filter(
    (htmlcssjs) => htmlcssjs.getAttribute("data-proyect") === "htmlcssjs" 
 );
  const docker = proyectsArreglo.filter(
    (docker) => docker.getAttribute("data-proyect") === "docker"
  );
  const react = proyectsArreglo.filter(
    (react) => react.getAttribute("data-proyect") === "react"
  );
  const nodejs = proyectsArreglo.filter(
    (nodejs) => nodejs.getAttribute("data-proyect") === "nodejs"
  );
  const python = proyectsArreglo.filter(
    (python) => python.getAttribute("data-proyect") === "python"
  );
  const astro = proyectsArreglo.filter(
     (astro) => astro.getAttribute("data-proyect") === "astro" 
  );
  const mysql = proyectsArreglo.filter(
    (mysql) => mysql.getAttribute("data-proyect") === "mysql" 
 );
 const nextjs = proyectsArreglo.filter(
  (nextjs) => nextjs.getAttribute("data-proyect") === "nextjs" 
);
  mostrarProyects(htmlcssjs, docker, react, nodejs, nextjs, python, astro, mysql, proyectsArreglo);
};
const mostrarProyects = (htmlcssjs, docker, react, nodejs, nextjs, python, astro, mysql, todos) => {
  btnHTMLCSSJS.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    htmlcssjs.forEach((htmlcssjs) => contenedorProyects.appendChild(htmlcssjs));
  });
  btnDocker.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    docker.forEach((docker) => contenedorProyects.appendChild(docker));
  });
  btnReact.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    react.forEach((react) => contenedorProyects.appendChild(react));
  });
  btnNodejs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    nodejs.forEach((nodejs) => contenedorProyects.appendChild(nodejs));
  });
  btnNEXTJS.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    nextjs.forEach((nextjs) => contenedorProyects.appendChild(nextjs));
  });
  btnPython.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    python.forEach((python) => contenedorProyects.appendChild(python));
  });
  btnAstro.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    astro.forEach((astro) => contenedorProyects.appendChild(astro));
  });
  btnMySQL.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    mysql.forEach((mysql) => contenedorProyects.appendChild(mysql));
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
