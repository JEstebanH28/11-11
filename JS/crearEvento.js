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
    
        // Crear un nuevo elemento de lista para el evento
        let listItem = document.createElement("li");
        listItem.innerHTML = `
        <strong>${evento.nombre}</strong><br>
        Ciudad: ${evento.ciudad}<br>
        Lugar: ${evento.lugar}<br>
        Costo: $${evento.costo}<br>
        Tiempo: ${new Date(evento.tiempo).toLocaleString()}<br>
        Participantes: ${evento.participantes}<br>
        Descripción: ${evento.descripcion}
        `;
    
        // Agregar el elemento a la lista
        listaEventos.appendChild(listItem);
    }
    
    
   