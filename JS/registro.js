let btnRegistrar = document.getElementById("buttonRegistrar");
const formulario = document.getElementById("formulario-evento");
const inputs = document.querySelectorAll("#formulario-evento input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
  nombre: false,
  nacimiento: false,
  username: false,
  password: false,
  celular: false,
  email: false
}

btnRegistrar.addEventListener("click", (e) => {
  e.preventDefault();

  if (campos.nombre && campos.nacimiento && campos.username && campos.password && campos.celular && campos.email) {
    document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll("form-grupo-correcto").forEach((icono) => {
      icono.classList.remove("form-grupo-correcto");
    });

    guardarForm();
    formulario.reset();
  } else {
    const mensajeError = document.querySelector(".formulario-mensaje-error");
    mensajeError.classList.add('formulario-mensaje-error-activo');

    // Después de 3 segundos, remover la clase 'formulario-mensaje-error-activo'
    setTimeout(() => {
      mensajeError.classList.remove('formulario-mensaje-error-activo');
    }, 3000);
  }
});

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, e.target.name);
      break;
    case "nacimiento":
      validarEdad(e.target, e.target.name);
      break;
    case "username":
      // validarCampo(expresiones.usuario, e.target, e.target.name);
      validarUsuario();
      break;
    case "password":
      validarCampo(expresiones.password, e.target, e.target.name);
      validarConfirmPassword();
      break;
    case "confirmPassword":
      validarConfirmPassword();
      break;
    case "celular":
      validarCampo(expresiones.telefono, e.target, e.target.name);
      break;
    case "email":
      validarCampo(expresiones.correo, e.target, e.target.name);
      break;
    case "confirmEmail":
      validarConfirmEmail();
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo-${campo}`).classList.remove("form-grupo-incorrecto");
    document.getElementById(`grupo-${campo}`).classList.add("form-grupo-correcto");
    document.querySelector(`#grupo-${campo} i`).classList.add("fa-circle-check");
    document.querySelector(`#grupo-${campo} i`).classList.remove("fa-circle-xmark");
    document.querySelector(`#grupo-${campo} .form-input-error`).classList.remove("form-input-error-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`grupo-${campo}`).classList.add("form-grupo-incorrecto");
    document.getElementById(`grupo-${campo}`).classList.remove("form-grupo-correcto");
    document.querySelector(`#grupo-${campo} i`).classList.add("fa-circle-xmark");
    document.querySelector(`#grupo-${campo} i`).classList.remove("fa-circle-check");
    document.querySelector(`#grupo-${campo} .form-input-error`).classList.add("form-input-error-activo");
    campos[campo] = false;
  }
}

const validarConfirmPassword = () => {
  const inputPassword = document.getElementById("password");
  const inputPassword2 = document.getElementById("confirmPassword");

  if (inputPassword.value !== inputPassword2.value) {
    document.getElementById(`grupo-confirmPassword`).classList.add("form-grupo-incorrecto");
    document.getElementById(`grupo-confirmPassword`).classList.remove("form-grupo-correcto");
    document.querySelector(`#grupo-confirmPassword i`).classList.add("fa-circle-xmark");
    document.querySelector(`#grupo-confirmPassword i`).classList.remove("fa-circle-check");
    document.querySelector(`#grupo-confirmPassword .form-input-error`).classList.add("form-input-error-activo");
    campos["password"] = false;
  } else {
    document.getElementById(`grupo-confirmPassword`).classList.remove("form-grupo-incorrecto");
    document.getElementById(`grupo-confirmPassword`).classList.add("form-grupo-correcto");
    document.querySelector(`#grupo-confirmPassword i`).classList.add("fa-circle-check");
    document.querySelector(`#grupo-confirmPassword i`).classList.remove("fa-circle-xmark");
    document.querySelector(`#grupo-confirmPassword .form-input-error`).classList.remove("form-input-error-activo");
    campos["password"] = true;
  }
}

const validarConfirmEmail = () => {
  const inputEmail = document.getElementById("email");
  const inputEmail2 = document.getElementById("confirmEmail");

  if (inputEmail.value !== inputEmail2.value) {
    document.getElementById(`grupo-confirmEmail`).classList.add("form-grupo-incorrecto");
    document.getElementById(`grupo-confirmEmail`).classList.remove("form-grupo-correcto");
    document.querySelector(`#grupo-confirmEmail i`).classList.add("fa-circle-xmark");
    document.querySelector(`#grupo-confirmEmail i`).classList.remove("fa-circle-check");
    document.querySelector(`#grupo-confirmEmail .form-input-error`).classList.add("form-input-error-activo");
    campos["email"] = false;
  } else {
    document.getElementById(`grupo-confirmEmail`).classList.remove("form-grupo-incorrecto");
    document.getElementById(`grupo-confirmEmail`).classList.add("form-grupo-correcto");
    document.querySelector(`#grupo-confirmEmail i`).classList.add("fa-circle-check");
    document.querySelector(`#grupo-confirmEmail i`).classList.remove("fa-circle-xmark");
    document.querySelector(`#grupo-confirmEmail .form-input-error`).classList.remove("form-input-error-activo");
    campos["email"] = true;
  }
}

const esMayorDeEdad = (input) => {
  const fechaNacimiento = input.value;

  const fechaActual = new Date();
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const edadMinima = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());

  return fechaNacimientoDate <= edadMinima;
}

const validarEdad = (input, campo) => {
  if (!esMayorDeEdad(input)) {
    document.getElementById(`grupo-nacimiento`).classList.add("form-grupo-incorrecto");
    document.querySelector(`#grupo-nacimiento .form-input-error`).classList.add("form-input-error-activo");
    campos[campo] = false;
  } else {
    document.getElementById(`grupo-nacimiento`).classList.remove("form-grupo-incorrecto");
    document.querySelector(`#grupo-nacimiento .form-input-error`).classList.remove("form-input-error-activo");
    campos[campo] = true;
  }
}

const validarUsuarioX = (usuarios, campo) => {
  if (usuarios.hasOwnProperty(username)) {
    document.getElementById(`grupo-username`).classList.add("form-grupo-incorrecto");
    document.getElementById(`grupo-username`).classList.remove("form-grupo-correcto");
    document.querySelector(`#grupo-username i`).classList.add("fa-circle-xmark");
    document.querySelector(`#grupo-username i`).classList.remove("fa-circle-check");
    document.querySelector(`#grupo-username .form-input-error`).innerHTML = "Usuario ya existente";
    document.querySelector(`#grupo-username .form-input-error`).classList.add("form-input-error-activo");
    campos[campo] = false;
  } else {
    document.getElementById(`grupo-username`).classList.remove("form-grupo-incorrecto");
    document.getElementById(`grupo-username`).classList.add("form-grupo-correcto");
    document.querySelector(`#grupo-username i`).classList.add("fa-circle-check");
    document.querySelector(`#grupo-username i`).classList.remove("fa-circle-xmark");
    document.querySelector(`#grupo-username .form-input-error`).classList.remove("form-input-error-activo");
    campos[campo] = true;
  }
}

const validarUsuario = () => {
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim(); // Obtener el valor del nombre de usuario y eliminar espacios en blanco al principio y al final
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

  validarCampo(expresiones.usuario, usernameInput, 'username');

  // Verificar si el nombre de usuario ya está en uso
  if (usuarios.hasOwnProperty(username)) {
    document.getElementById(`grupo-username`).classList.add("form-grupo-incorrecto");
    document.getElementById(`grupo-username`).classList.remove("form-grupo-correcto");
    document.querySelector(`#grupo-username i`).classList.add("fa-circle-xmark");
    document.querySelector(`#grupo-username i`).classList.remove("fa-circle-check");
    document.querySelector(`#grupo-username .form-input-error`).innerHTML = "Usuario ya existente";
    document.querySelector(`#grupo-username .form-input-error`).classList.add("form-input-error-activo");
    campos['username'] = false;
    return;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario); //Se suelta la tecla
  input.addEventListener("blur", validarFormulario); //Click fuera del input
});

const guardarForm = () => {
  let nombre = document.getElementById('nombre').value;
  let nacimiento = document.getElementById('nacimiento').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let celular = document.getElementById('celular').value;
  let email = document.getElementById('email').value;
  let ciudad = document.getElementById('ciudades').value;

  // Obtener todos los usuarios existentes del Local Storage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

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
  window.location.href = ('iniciarSesion.html');
  alert('Registro exitoso! Por favor inicia sesión.');
}






