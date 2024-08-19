
const name = document.querySelector("#user-name")
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#Saludo-hola-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "Hola "
  let user_Name = name.value
  div.innerHTML = "<p>" + saludo + user_Name + "</p>";
});
