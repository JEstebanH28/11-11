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
      } else {
        // Crear un objeto JSON con los campos del usuario
        let usuario = {
        nombre: nombre,
        nacimiento: nacimiento,
        username: username,
        password: password,
        celular: celular,
        email: email,
        ciudad: ciudad
      };
      // Almacenar el objeto JSON en el Local Storage
        localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirigir o realizar otras acciones después del registro exitoso
        alert('Registro exitoso. Redirigiendo a la página de perfil.');
        window.location.href = '../html/Perfil.html';
      }
    }