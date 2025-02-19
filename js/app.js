const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})

const btnTodos = document.querySelector(".all");
const btnHTMLCSSJS = document.querySelector(".htmlcssjs");
const btnJs = document.querySelector(".js");
const btnReact = document.querySelector(".react");
const btnNodejs = document.querySelector(".nodejs");
const btmNextjs = document.querySelector(".nextjs");
const btnAstro = document.querySelector(".astro");
const btnSQL = document.querySelector(".sql");
const btnMySQL = document.querySelector(".mysql");
const btnPostgree = document.querySelector(".postgree")
const btnDocker = document.querySelector(".docker");

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
  const nextjs = proyectsArreglo.filter(
    (nextjs) => nextjs.getAttribute("data-proyect") === "nextjs" 
  );
  const astro = proyectsArreglo.filter(
    (astro) => astro.getAttribute("data-proyect") === "astro" 
 );
  const sql = proyectsArreglo.filter(
    (sql) => sql.getAttribute("data-proyect") === "sql"
  );
  const mysql = proyectsArreglo.filter(
    (mysql) => mysql.getAttribute("data-proyect") === "mysql" 
 );
  const postgree = proyectsArreglo.filter(
    (postgree) => postgree.getAttribute("data-proyect") === "postgree" 
 );
 const docker = proyectsArreglo.filter(
  (docker) => docker.getAttribute("data-proyect") === "docker" 
);
  mostrarProyects(htmlcssjs, js, react, nodejs, nextjs, sql, astro, sql, mysql, postgree, docker, proyectsArreglo);
};
const mostrarProyects = (htmlcssjs, js, react, nodejs, nextjs, astro, sql, mysql, postgree, docker, todos) => {
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
  btnNextjs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    nextjs.forEach((nextjs) => contenedorProyects.appendChild(nextjs));
  });
  btnSql.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    sql.forEach((sql) => contenedorProyects.appendChild(sql));
  });
  btnMysql.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    mysql.forEach((mysql) => contenedorProyects.appendChild(mysql));
  });
  btnAstro.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    astro.forEach((astro) => contenedorProyects.appendChild(astro));
  });
  btnPostgree.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    postgree.forEach((postgree) => contenedorProyects.appendChild(postgree));
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
