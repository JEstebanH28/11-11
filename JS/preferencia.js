function agregarPreferencia(boton) {
  // Cambiar el texto del botón a "Añadido"
  boton.innerText = 'Añadido';
  // Deshabilitar el botón después de hacer clic para evitar múltiples clics
  boton.disabled = true;
}
