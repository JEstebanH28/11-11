function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const profileImage = document.getElementById('profile-image');
      profileImage.src = reader.result;
    }
    reader.readAsDataURL(file);
}

// Obtener el usuario actual del Local Storage
const usuarioActual = localStorage.getItem('usuarioActual');

// Verificar si el usuario está logueado
if (usuarioActual) {
    // Obtener los datos del usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuarios'))[usuarioActual];

    // Actualizar el contenido HTML con los datos del usuario
    document.querySelector('.nombre h2').innerText = usuario.nombre;
    document.querySelector('.datos p:nth-child(1)').innerText = `Fecha de Nacimiento: ${usuario.nacimiento}`;
    document.querySelector('.datos p:nth-child(2)').innerText = `Celular: ${usuario.celular}`;
    document.querySelector('.datos p:nth-child(3)').innerText = `Email: ${usuario.email}`;
    document.querySelector('.datos p:nth-child(4)').innerText = `Ciudad: ${usuario.ciudad}`;
    // Añade más líneas similares para otros datos que quieras mostrar, como género
} else {
    // Si el usuario no está logueado, muestra un mensaje o realiza alguna otra acción
    console.log('No hay usuario logueado');
}

// Obtener las preferencias del usuario del localStorage
const preferenciasUsuario = JSON.parse(localStorage.getItem('usuario'))['preferencias'];

// Verificar si el usuario tiene preferencias
if (preferenciasUsuario) {
    // Actualizar el contenido HTML con las preferencias del usuario
    document.querySelector('.preferencias').innerText = 'Preferencias';
    preferenciasUsuario.forEach((preferencia, index) => {
        if (preferencia) {
            document.querySelector(`.p${index + 1}`).innerText = preferencia;
        }
    });
} else {
    // Si el usuario no tiene preferencias, muestra un mensaje o realiza alguna otra acción
    console.log('El usuario no tiene preferencias definidas');
}


