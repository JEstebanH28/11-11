function agregarPreferencia() {
    // Cambiar el texto del botón a "Añadido"
    document.getElementById('texto-boton').innerText = 'Añadido';
    // Deshabilitar el botón después de hacer clic para evitar múltiples clics
    document.getElementById('boton-preferencia').disabled = true;
  }