
const name = document.querySelector("#user-name")
const gender = document.querySelector("#gender")
const age = document.querySelector("#age")
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#Saludo-hola-div");
const espButton = document.querySelector("#esp-button");
const engButton = document.querySelector("#eng-button");

let isEspañol = false;

espButton.addEventListener("click", () => {
  isEspañol = true;
  updateGreeting();
});

engButton.addEventListener("click", () => {
  isEspañol = false;
  updateGreeting();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateGreeting();
});

function updateGreeting()
{
  let saludo = "Hola "
  let user_Name = name.value.trim()
  let user_age = parseInt(age.value)
  
  if (isNaN(user_age)) {
    div.innerHTML = "<p>Por favor ingrese una edad válida.</p>";
    return;
  }

  if (gender.value === "masculino") {
    if (isEspañol) {
      if (user_age <= 15) {
        saludo = "Hola pequeño ";
      } else if (user_age > 15 && user_age <= 35) {
        saludo = "Hola joven ";
      } else {
        saludo = "Hola señor ";
      }
    } else {
      if (user_age <= 15) {
        saludo = "Hello little boy ";
      } else if (user_age > 15 && user_age <= 35) {
        saludo = "Hello man ";
      } else {
        saludo = "Hello Sir. ";
      }
    }
  } else if (gender.value === "femenino") {
    if (isEspañol) {
      if (user_age <= 15) {
        saludo = "Hola pequeña ";
      } else if (user_age > 15 && user_age <= 35) {
        saludo = "Hola señorita ";
      } else {
        saludo = "Hola señora ";
      }
    } else {
      if (user_age <= 15) {
        saludo = "Hello little girl ";
      } else if (user_age > 15 && user_age <= 35) {
        saludo = "Hello baby girl ";
      } else {
        saludo = "Hello Lady  ";
      }
    }
  } else {
    div.innerHTML = "<p>Por favor ingrese un género válido.</p>";
    return;
  }
  
  div.innerHTML = "<p>" + saludo + user_Name + "</p>";
}
