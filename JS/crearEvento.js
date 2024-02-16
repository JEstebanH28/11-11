// Función para crear un evento
function crearEvento() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let ciudad = document.getElementById("ciudad").value;
    let lugar = document.getElementById("lugar").value;
    let costo = parseFloat(document.getElementById("costo").value);
    let tiempo = document.getElementById("tiempo").value;
    let participantes = parseInt(document.getElementById("participantes").value);
    let descripcion = document.getElementById("descripcion").value;

    // Obtener la fecha y hora actuales
    let fechaActual = new Date();
    let fechaEvento = new Date(tiempo);

    // Verificar que los campos no estén vacíos
    if (nombre === '' || ciudad === '' || lugar === '' || isNaN(costo) || tiempo === '' || isNaN(participantes) || descripcion === '') {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    } else if (fechaEvento < fechaActual) {
        alert('La fecha y hora del evento deben ser futuras.');
        return;
    } else {
        // Crear objeto JSON
        let nuevoEvento = {
            "nombre": nombre,
            "ciudad": ciudad,
            "lugar": lugar,
            "costo": costo,
            "tiempo": tiempo,
            "participantes": participantes,
            "descripcion": descripcion
        };

        // Guardar el nuevo evento en el localStorage
        guardarEvento(nuevoEvento);

        // Limpiar el formulario
        limpiarFormulario();

        // Mostrar los eventos guardados
        mostrarEventosGuardados();
    }
}

// Función para guardar un evento en el localStorage
function guardarEvento(evento) {
    let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosGuardados.push(evento);
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));
}

// Función para limpiar el formulario después de crear un evento
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("lugar").value = "";
    document.getElementById("costo").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("participantes").value = "";
    document.getElementById("descripcion").value = "";
}

// Función para mostrar los eventos guardados en tarjetas
function mostrarEventosGuardados() {
    let listaEventos = document.getElementById("listaEventos");
    listaEventos.innerHTML = '';

    let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];

    eventosGuardados.forEach(evento => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <strong>${evento.nombre}</strong><br>
            <p>Ciudad: ${evento.ciudad}</p>
            <p>Lugar: ${evento.lugar}</p>
            <p>Costo: $${evento.costo}</p>
            <p>Tiempo: ${new Date(evento.tiempo).toLocaleString()}</p>
            <p>Participantes: ${evento.participantes}</p>
            <p>Descripción: ${evento.descripcion}</p>
        `;
        listaEventos.appendChild(card);
    });
}

// Mostrar los eventos guardados al cargar la página
mostrarEventosGuardados();

    
   