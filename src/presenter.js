
const name = document.querySelector("#user-name")
const gender = document.querySelector("#gender")
const age = document.querySelector("#age")
const form = document.querySelector("#greeting-form");
const div = document.querySelector("#Saludo-hola-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let saludo = "Hola "
  let user_Name = name.value
  
  if (gender.value === "masculino")
  {
    if(age.value <= 15)
      {
        saludo = "Hola pequeño "
      }
      else if (age.value > 15 && age.value <=35)
      {
        saludo = "Hola joven "
      }
      else
      {
        saludo = "Hola señor "
      }
  }
  else
  {
    if(age.value <= 15)
      {
        saludo = "Hola pequeña "
      }
      else if (age.value > 15 && age.value <=35)
      {
        saludo = "Hola señorita "
      }
      else
      {
        saludo = "Hola señora "
      }
  }
  
  
  div.innerHTML = "<p>" + saludo + user_Name + "</p>";
});
