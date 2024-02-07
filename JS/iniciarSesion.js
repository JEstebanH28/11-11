   function validarLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Obtener el usuario almacenado en el Local Storage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) ||{};

    // Verificar si el usuario existe en el Local Storage
    if (usuarios.hasOwnProperty(username) && usuarios[username].password === password) {
        // Si el usuario y la contraseña coinciden, redirigir a la página de perfil
        window.location.assign('Perfil.html');
        alert('Inicio de sesión exitoso.'); 
    } else {
        // Si el usuario y la contraseña no coinciden o el usuario no existe, mostrar un mensaje de error
        alert('Nombre de usuario o contraseña incorrectos.');
    }
}