function validarRegistro() {
    let nombre = document.getElementById('nombre').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let ciudad = document.getElementById('ciudad').value;

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar campos vacíos
    if (nombre === '' || nacimiento === '' || username === '' || password === '' || confirmPassword === '' || celular === '' || email === '' || confirmEmail === '' || ciudad === '') {
        alert('Por favor, completa todos los campos.');
        return;
      }else if (password !== confirmPassword){
        alert('Las contraseñas no coinciden.');
      return;
      }else if(!/^\d+$/.test(celular)){
        alert('El campo de celular solo puede contener números.');
      return;
      }else if(email !== confirmEmail || !regex.test(email)){
        alert("Los correos electrónicos no coinciden o no son válidos.");
        return;
      } else {
        // Obtener todos los usuarios existentes del Local Storage
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

        // Verificar si el nombre de usuario ya existe
        if (usuarios.hasOwnProperty(username)) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            return;
        }


        // Crear un objeto JSON con los campos del usuario
        usuarios[username] = {
        nombre: nombre,
        nacimiento: nacimiento,
        username: username,
        password: password,
        celular: celular,
        email: email,
        ciudad: ciudad
      };

      // Almacenar el objeto JSON en el Local Storage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirigir o realizar otras acciones después del registro exitoso
          window.location.href=('iniciarSesion.html');    
          alert('Registro exitoso! Por favor inicia sesión.');        
      }
    }