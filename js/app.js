// ==================== APLICACIÓN PRINCIPAL ====================
// Inicializa y controla el flujo del juego

// Variables globales
const balls = [];
let canvas, ctx;

// ==================== FUNCIONES DE CANVAS ====================

function createBalls() {
    if (!canvas) return;
    
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
    deshabilitarBotones(true);
    $('.ballSale').remove();

    const nro = numeroRandom();

    let freno = null;
    if (canvas && ctx) {
        freno = setInterval(drawBalls, 1);
    }
    
    const audio = new Audio("mp3s/bolas-de-bingo.mp3");
    audio.play().catch(err => console.log('Error al reproducir audio:', err));

    let contador = 0;
    const intervalo = setInterval(() => {
        contador++;

        if (contador === 48) {
            if (freno) clearInterval(freno);
            clearInterval(intervalo);

            crearBolaSaliente(nro);
            cantarNumero(nro);
            marcarNumero(nro);

            deshabilitarBotones(false);
        }
    }, 100);
}

function reiniciarJuego() {
    if (confirmarReinicio()) {
        location.reload();
    }
}

// ==================== INICIALIZACIÓN ====================

window.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('myCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        createBalls();
        balls.forEach(ball => ball.draw(ctx));
    }

    generarTabla();

    const botonJugar = document.getElementById('botonJugar');
    const botonReiniciar = document.getElementById('botonReiniciar');
    
    if (botonJugar) botonJugar.addEventListener('click', jugar);
    if (botonReiniciar) botonReiniciar.addEventListener('click', reiniciarJuego);
});

window.addEventListener('resize', () => {
    if (canvas && ctx) {
        createBalls();
        balls.forEach(ball => ball.draw(ctx));
    }
});