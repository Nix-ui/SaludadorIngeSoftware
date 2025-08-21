//import sumar from "./sumador";

import { SaludarPorNombre, SaludarConHola, saludarConHola,SaludarPorHora } from "./saludador.js";

const horaInput = document.querySelector("#hora-input");
const nameInput = document.querySelector("#name-input");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saludador = nameInput.value==""? new SaludarConHola() : new SaludarPorNombre(nameInput.value);
  let message = saludador.saludar();
  message = horaInput.checked ? message + "<br>" + new SaludarPorHora().saludar()   : message;
  div.innerHTML = "<h3>" + message + "</h3>";
});
