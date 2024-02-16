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
        if (nombre === '' || ciudad === '' || lugar === '' || costo === '' || tiempo === '' || participantes === '' || descripcion === '') {
        alert('Por favor, completa todos los campos.');
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
        
            // Agregar el nuevo evento a la lista
            agregarEventoALista(nuevoEvento);
            
            listaEventos.appendChild(listItem);
        } 
    }                
    
    function agregarEventoALista(evento) {
        // Obtener la referencia de la lista
        let listaEventos = document.getElementById("listaEventos");
    
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
    }
    
    
   