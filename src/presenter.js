//import sumar from "./sumador";

import { SaludarPorNombre, SaludarConHola, saludarConHola,SaludarPorHora , SaludarPorGenero} from "./saludador/saludador.js";

const horaInput = document.querySelector("#hora-input");
const nameInput = document.querySelector("#name-input");
const genderInput = document.querySelector("#genero-input");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saludador = genderInput.value ? new SaludarPorGenero(genderInput.value) :  new saludarConHola() ;
  let message = saludador.saludar();
  message = nameInput.value ? message + "<br>" + new SaludarPorNombre(nameInput.value).getNombre() : message;
  message = horaInput.checked ? message + "<br>" + new SaludarPorHora().saludar()   : message;
  console.log(genderInput.value);
  div.innerHTML = "<h3>" + message + "</h3>";
});
