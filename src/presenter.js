
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#Saludo-hola-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "Hola"
  div.innerHTML = "<p>" + saludo + "</p>";
});
