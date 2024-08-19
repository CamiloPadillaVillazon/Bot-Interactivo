
const name = document.querySelector("#user-name")
const gender = document.querySelector("#gender")
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#Saludo-hola-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "Hola "
  let user_Name = name.value
  
  if (gender.value === "masculino")
  {
    saludo = "Hola joven "
  }else
  {
    saludo = "Hola señorita"
  }
    
  div.innerHTML = "<p>" + saludo + user_Name + "</p>";
});
