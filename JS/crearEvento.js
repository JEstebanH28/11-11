    // Obtener el usuario actual del Local Storage
    const usuarioActual = localStorage.getItem('usuarioActual');

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
                "descripcion": descripcion,
                "creador": usuarioActual, // Agregar el usuario actual como el creador del evento
                

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
    // Function to show the saved events as cards
    function mostrarEventosGuardados() {
        let listaEventos = document.getElementById("listaEventos");
        listaEventos.innerHTML = '';

        let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];

        eventosGuardados.forEach(evento => {
            // Create card container
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("card", "mb-3", "row", "g-0");
            cardContainer.style.maxWidth = "540px";

            // Create image column
            let imageCol = document.createElement("div");
            imageCol.classList.add("col-md-4");
            let image = document.createElement("img");            
            image.src = "/src/bolos.jpg";
            image.classList.add("img-fluid", "rounded-start");
            image.alt = "Event Image";
            imageCol.appendChild(image);

            // Create details column
            let detailsCol = document.createElement("div");
            detailsCol.classList.add("col-md-8");
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let title = document.createElement("h5");
            title.classList.add("card-title");
            title.innerText = evento.nombre;

            let ciudad = document.createElement("p");
            let lugar = document.createElement("p");
            ciudad.classList.add("card-text");
            ciudad.innerText = `Ciudad: ${evento.ciudad} | Lugar: ${evento.lugar}`;
                
            let fechaHora = document.createElement("p");
            fechaHora.classList.add("card-text");
            fechaHora.innerText = `Fecha y Hora: ${new Date(evento.tiempo).toLocaleString()}`;

            let costo = document.createElement("p");
            let participantes = document.createElement("p");
            costo.classList.add("card-text");
            costo.innerText = `Costo: $${evento.costo} | Participantes: ${evento.participantes}`;  

            let descripcion = document.createElement("p");
            descripcion.classList.add("card-text");
            descripcion.innerText = `Descripción: ${evento.descripcion}`;

            let creador = document.createElement("p");
            creador.classList.add("card-text");
            creador.innerHTML = `<small class="text-body-secondary">Creado por: ${evento.creador}</small>`;    


            // Append details to card body
            cardBody.appendChild(title);
            cardBody.appendChild(ciudad);
            cardBody.appendChild(lugar);
            cardBody.appendChild(costo);
            cardBody.appendChild(fechaHora);
            cardBody.appendChild(participantes);
            cardBody.appendChild(descripcion);
            cardBody.appendChild(creador);

            // Append card body to details column
            detailsCol.appendChild(cardBody);

            // Append image column and details column to card container
            cardContainer.appendChild(imageCol);
            cardContainer.appendChild(detailsCol);

            // Append card container to event list
            listaEventos.appendChild(cardContainer);

            // Create button to join event
            let button = document.createElement("button");
            button.classList.add("btn-unir");
            button.innerText = "Unirme al parche";
            // Append button to card container
            cardContainer.appendChild(button);
        });
    }

    // Show saved events when the page loads
    mostrarEventosGuardados();

        
    