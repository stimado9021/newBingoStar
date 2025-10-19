// ==================== APLICACIÓN PRINCIPAL ====================
// Inicializa y controla el flujo del juego

// Variables globales
const balls = [];
let canvas, ctx;

// ==================== FUNCIONES DE CANVAS ====================

// Crea múltiples bolas con propiedades aleatorias
function createBalls() {
    if (!canvas) return; // No crear bolas si no hay canvas
    
    balls.length = 0;
    const colors = ['blue', 'silver', 'green', 'violet', 'cyan', 'purple'];
    const ballCount = 10;
    const radius = 20;

    for (let i = 0; i < ballCount; i++) {
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        const dx = (Math.random() - 0.5) * 3;
        const dy = (Math.random() - 0.5) * 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const number = Math.floor(Math.random() * 75) + 1;
        
        balls.push(new Ball(x, y, dx, dy, radius, color, number));
    }
}

// Dibuja y actualiza todas las bolas en el canvas
function drawBalls() {
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.draw(ctx);
        ball.update(canvas);
    });
}

// ==================== FUNCIÓN PRINCIPAL DE JUEGO ====================

function jugar() {
    // Deshabilitar botones durante la animación
    deshabilitarBotones(true);

    // Limpiar bola anterior
    $('.ballSale').remove();

    // Obtener número aleatorio
    const nro = numeroRandom();

    // Iniciar animación de bolas (solo si existe canvas)
    let freno = null;
    if (canvas && ctx) {
        freno = setInterval(drawBalls, 1);
    }
    
    // Reproducir sonido de bingo
    const audio = new Audio("mp3s/bolas-de-bingo.mp3");
    audio.play().catch(err => console.log('Error al reproducir audio:', err));

    // Temporizador para detener animación
    let contador = 0;
    const intervalo = setInterval(() => {
        contador++;

        if (contador === 48) {
            if (freno) clearInterval(freno);
            clearInterval(intervalo);

            // Crear y mostrar la bola ganadora
            crearBolaSaliente(nro);
            cantarNumero(nro);
            marcarNumero(nro);

            // Rehabilitar botones
            deshabilitarBotones(false);
        }
    }, 100);
}

// Reinicia el juego completamente
function reiniciarJuego() {
    if (confirmarReinicio()) {
        location.reload();
    }
}

// ==================== INICIALIZACIÓN ====================

window.addEventListener('DOMContentLoaded', () => {
    // Inicializar canvas si existe
    canvas = document.getElementById('myCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        createBalls();
        balls.forEach(ball => ball.draw(ctx));
    }

    // Generar tabla de números
    generarTabla();

    // Asignar event listeners a botones desktop
    const botonJugar = document.getElementById('botonJugar');
    const botonReiniciar = document.getElementById('botonReiniciar');
    
    if (botonJugar) botonJugar.addEventListener('click', jugar);
    if (botonReiniciar) botonReiniciar.addEventListener('click', reiniciarJuego);

    // Asignar event listeners a botones móviles
    const botonJugarMobile = document.getElementById('botonJugarMobile');
    const botonReiniciarMobile = document.getElementById('botonReiniciarMobile');
    
    if (botonJugarMobile) botonJugarMobile.addEventListener('click', jugar);
    if (botonReiniciarMobile) botonReiniciarMobile.addEventListener('click', reiniciarJuego);
});

// Redimensionar canvas al cambiar tamaño de ventana (solo si existe)
window.addEventListener('resize', () => {
    if (canvas && ctx) {
        createBalls();
        balls.forEach(ball => ball.draw(ctx));
    }
});