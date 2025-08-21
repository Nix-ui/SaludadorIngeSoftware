//import sumar from "./sumador";

import saludarConHola from "./saludador";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<h3>" + saludarConHola() + "</h3>";
});
