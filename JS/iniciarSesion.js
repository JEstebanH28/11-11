function validarLogin(event) {
    event.preventDefault(); // Evitar la recarga automática de la página
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Obtener el usuario almacenado en el Local Storage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) ||{};

    // Verificar si el usuario existe en el Local Storage
    if (usuarios.hasOwnProperty(username) && usuarios[username].password === password) {
        // Si el usuario y la contraseña coinciden, redirigir a la página de perfil
        iniciarSesion(username);
        alertaBienvenida(); 
    } else {
        // Si el usuario y la contraseña no coinciden o el usuario no existe, mostrar un mensaje de error
        alertaFalla();
    }
}

const alertaBienvenida = () => {
    Swal.fire({
      title: '!LogIn Exitoso!',
      text: `Es momento de seleccionar tus preferencias!`,
      icon: 'success',
      timer: 2500, // Mostrar la alerta durante 4 segundos
      timerProgressBar: true, // Mostrar una barra de progreso del temporizador
      showConfirmButton: false // Ocultar el botón de confirmación
    }).then(() => {
      // Redirigir a la página de inicio de sesión después de que se cierre la alerta
      window.location.href = '../html/preferencias.html'
    });
  }

  const alertaFalla =() => {
    Swal.fire({
        title: 'Error',
        text: 'Nombre de usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
  }

  // Función para almacenar los datos del usuario cuando inicia sesión
function iniciarSesion(username) {
  localStorage.setItem('usuarioActual', username);
}