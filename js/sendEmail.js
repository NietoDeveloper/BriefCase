const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  const fd = new FormData(this);
  const response = await fetch("https://formspree.io/f/mzbnpaje", {
    method: "POST",
    body: fd,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Mensaje enviado");
  } else {
    alert("Error al envar el mensaje");
  }
}
