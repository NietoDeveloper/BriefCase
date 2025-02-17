const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})

const btnTodos = document.querySelector(".all");
const btnJs = document.querySelector(".js");
const btnReact = document.querySelector(".react");
const btnNodejs = document.querySelector(".nodejs");
const btnSQL = document.querySelector(".sql");
const btnAstro = document.querySelector(".astro");
const btmPhyton = document.querySelector(".phyton");
const btnMySQL = document.querySelector(".mysql");
const btnDocker = document.querySelector(".docker");
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
  const js = proyectsArreglo.filter(
    (js) => js.getAttribute("data-proyect") === "js"
  );
  const react = proyectsArreglo.filter(
    (react) => react.getAttribute("data-proyect") === "react"
  );
  const nodejs = proyectsArreglo.filter(
    (nodejs) => nodejs.getAttribute("data-proyect") === "nodejs"
  );
  const sql = proyectsArreglo.filter(
    (sql) => sql.getAttribute("data-proyect") === "sql"
  );
  const astro = proyectsArreglo.filter(
     (astro) => astro.getAttribute("data-proyect") === "astro" 
  );
  const phyton = proyectsArreglo.filter(
    (phyton) => phyton.getAttribute("data-proyect") === "phyton" 
 );
  const mysql = proyectsArreglo.filter(
    (mysql) => mysql.getAttribute("data-proyect") === "mysql" 
 );
 const docker = proyectsArreglo.filter(
  (docker) => docker.getAttribute("data-proyect") === "docker" 
);
  mostrarProyects(htmlcssjs, js, react, nodejs, docker, sql, astro, phyton, mysql, proyectsArreglo);
};
const mostrarProyects = (htmlcssjs, js, react, nodejs, docker, sql, astro, phyton, mysql, todos) => {
  btnHTMLCSSJS.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    htmlcssjs.forEach((htmlcssjs) => contenedorProyects.appendChild(htmlcssjs));
  });
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
  btnDocker.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    docker.forEach((docker) => contenedorProyects.appendChild(docker));
  });
  btnPython.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    sql.forEach((sql) => contenedorProyects.appendChild(sql));
  });
  btnMySQL.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    mysql.forEach((mysql) => contenedorProyects.appendChild(mysql));
  });
  btnAstro.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    astro.forEach((astro) => contenedorProyects.appendChild(astro));
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
