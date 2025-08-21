//import sumar from "./sumador";

import { SaludarPorNombre, SaludarConHola, saludarConHola } from "./saludador.js";

const nameInput = document.querySelector("#name-input");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saludador = nameInput.value==""? new SaludarConHola() : new SaludarPorNombre(nameInput.value);
  div.innerHTML = "<h3>" + saludador.saludar() + "</h3>";
});
