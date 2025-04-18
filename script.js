function abrirSobre() {
    const sobre = document.querySelector('.sobre');
    const card = document.querySelector('.card');

    // Añadir clase para animar el sobre
    sobre.classList.add('abierto');

    // Mostrar la tarjeta mientras el sobre cae
    setTimeout(() => {
        card.classList.add('mostrar');
    }, 500); // La carta aparece mientras el sobre está cayendo

    // Generar confeti
    generarConfeti();
}

function generarConfeti() {
    const body = document.body;

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Generar posiciones aleatorias para la explosión
        const x = (Math.random() - 0.5) * 200; // Rango entre -100 y 100
        const y = (Math.random() - 0.5) * 200; // Rango entre -100 y 100

        // Asignar las variables CSS para la animación
        confetti.style.setProperty('--x', `${x}px`);
        confetti.style.setProperty('--y', `${y}px`);

        // Color aleatorio
        confetti.style.backgroundColor = getColorAleatorio();

        // Posición inicial en el centro de la pantalla
        confetti.style.left = `${window.innerWidth / 2}px`;
        confetti.style.top = `${window.innerHeight / 2}px`;

        // Añadir confeti al body
        body.appendChild(confetti);

        // Eliminar confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

function getColorAleatorio() {
    const colores = ['#ff6f61', '#ff8566', '#ffd700', '#4caf50', '#2196f3', '#9c27b0'];
    return colores[Math.floor(Math.random() * colores.length)];
}