   // Obtener el formulario
   const form = document.getElementById("loginForm");

   // Verificar el envío del formulario
   form.addEventListener("submit", function(event) {
     // Prevenir envío por defecto
     event.preventDefault();

     // Obtener valores de los inputs
     const username = document.getElementById("username").value;
     const password = document.getElementById("password").value;

     // validar los datos con API
  

     alert("Usuario: " + username + ", Contraseña: " + password);
   });