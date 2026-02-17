// Click
document.getElementById("cajaClick").addEventListener("click", () => {
  document.getElementById("cajaClick").style.background = "#d1ffd1"; // verde claro
  document.getElementById("cajaClick").innerText = "¡Click detectado!";
});

// Mouseenter
document.getElementById("cajaHover").addEventListener("mouseenter", () => {
  document.getElementById("cajaHover").style.background = "#d1e0ff"; // azul claro
  document.getElementById("cajaHover").innerText = "¡Mouse encima!";
});

// Doble clic
document.getElementById("cajaDobleClick").addEventListener("dblclick", () => {
  document.getElementById("cajaDobleClick").style.background = "#ffe0d1"; // naranja claro
  document.getElementById("cajaDobleClick").innerText = "¡Doble clic!";
});

// Keydown
document.getElementById("inputTecla").addEventListener("keydown", (e) => {
  document.getElementById("cajaTecla").style.background = "#e0ffd1"; // verde claro
  document.getElementById("cajaTecla").innerText = "Tecla presionada: " + e.key;
});

// Focus
document.getElementById("inputFocus").addEventListener("focus", () => {
  document.getElementById("cajaFocus").style.background = "#e0f7ff"; // celeste claro
  document.getElementById("cajaFocus").innerText = "Campo enfocado";
});

// Blur
document.getElementById("inputBlur").addEventListener("blur", () => {
  document.getElementById("cajaBlur").style.background = "#ffe0f7"; // rosa claro
  document.getElementById("cajaBlur").innerText = "Saliste del campo";
});

// Submit
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("cajaFormulario").style.background = "#e0ffe0"; // verde claro
  document.getElementById("cajaFormulario").innerText = "Formulario enviado";
});

// Change
document.getElementById("selectCambio").addEventListener("change", (e) => {
  document.getElementById("cajaCambio").style.background = "#fff0d1"; // amarillo claro
  document.getElementById("cajaCambio").innerText = "Seleccionaste: " + e.target.value;
});
