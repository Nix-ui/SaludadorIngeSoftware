//import sumar from "./sumador";

import { SaludarPorNombre, SaludarConHola, saludarConHola,SaludarPorHora , SaludarPorGenero, SaludarPorEdad} from "./saludador/saludador.js";

const horaInput = document.querySelector("#hora-input");
const nameInput = document.querySelector("#name-input");
const genderInput = document.querySelector("#genero-input");
const ageInput = document.querySelector("#age-input");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Formulario enviado");
  console.log(ageInput.value);
  let saludador;
  if(ageInput.value && genderInput.value){
    saludador = new SaludarPorEdad(genderInput.value, parseInt(ageInput.value));
  }else{
    saludador = genderInput.value ? new SaludarPorGenero(genderInput.value) : new SaludarConHola();
  }
  let message = saludador.saludar();
  console.log(message);
  message = nameInput.value ? message + "<br>" + new SaludarPorNombre(nameInput.value).getNombre() : message;
  message = horaInput.checked ? message + "<br>" + new SaludarPorHora().saludar()   : message;
  console.log(genderInput.value);
  div.innerHTML = "<h3>" + message + "</h3>";
});
