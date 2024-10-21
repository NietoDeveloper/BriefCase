// Toggle the links button

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

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
const contenedorProyects = document.querySelector(".proyects");
document.addEventListener("DOMContentLoaded", () => {
  proyects();
});

const proyects = () => {
  let proyectsArreglo = [];
  const proyects = document.querySelectorAll(".proyect");
  // biome-ignore lint/complexity/noForEach: <explanation>
  proyects.forEach(
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
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
  mostrarProyects(js, react, nodejs, java, proyectsArreglo);
};
const mostrarProyects = (js, react, nodejs, java, todos) => {
  btnJs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    // biome-ignore lint/complexity/noForEach: <explanation>
    js.forEach((js) => contenedorProyects.appendChild(js));
  });
  btnReact.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    // biome-ignore lint/complexity/noForEach: <explanation>
    react.forEach((react) => contenedorProyects.appendChild(react));
  });
  btnNodejs.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    // biome-ignore lint/complexity/noForEach: <explanation>
    nodejs.forEach((nodejs) => contenedorProyects.appendChild(nodejs));
  });
  btnJava.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    // biome-ignore lint/complexity/noForEach: <explanation>
    phyton.forEach((java) => contenedorProyects.appendChild(java));
  });
  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorProyects);
    // biome-ignore lint/complexity/noForEach: <explanation>
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
