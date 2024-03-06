// Función para almacenar los datos del usuario cuando inicia sesión
function iniciarSesion(username) {
  localStorage.setItem('usuarioActual', username);
}

// Función para agregar preferencias al perfil del usuario actual
function agregarPreferencia(boton, preferencia) {
  // Cambiar el texto del botón a "Añadido"
  boton.innerText = 'Añadido';
  // Deshabilitar el botón después de hacer clic para evitar múltiples clics
  boton.disabled = true;
  // Obtener el usuario actual del Local Storage
  const usuarioActual = localStorage.getItem('usuarioActual');

  // Obtener el perfil del usuario del Local Storage
  let perfilUsuario = JSON.parse(localStorage.getItem(usuarioActual)) || {};

  // Agregar la preferencia al perfil del usuario
  if (!perfilUsuario.preferencias) {
      perfilUsuario.preferencias = [];
  }
  perfilUsuario.preferencias.push(preferencia);

  // Actualizar el perfil del usuario en el Local Storage
  localStorage.setItem(usuarioActual, JSON.stringify(perfilUsuario));
}