function toggleRotation() {
    const panel = document.querySelector('.panel');
    const contenido = panel.querySelector('.contenido');

    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
    } else {
        panel.classList.add('active');
    }

    // Muestra u oculta el contenido al hacer clic
    contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
}