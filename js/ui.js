// ==================== INTERFAZ DE USUARIO ====================
// Maneja las interacciones visuales y animaciones

// Crea y anima la bola que sale
function crearBolaSaliente(numero) {
    const bolaSale = document.createElement("div");
    bolaSale.className = "ballSale animate";
    bolaSale.textContent = numero;
    document.getElementById("bolaSalientes").appendChild(bolaSale);

    // Animar la bola según el tamaño de pantalla
    setTimeout(() => {
        const windowWidth = window.innerWidth;
        const container = document.getElementById("bolaSalientes");
        const containerWidth = container.offsetWidth;
        
        // En móvil: mover horizontalmente de izquierda a derecha
        if (windowWidth < 768) {
            const targetLeft = containerWidth - 80; // Dejar espacio del borde
            $(bolaSale).animate({ left: targetLeft + 'px' }, 1200, 'swing');
        } 
        // En tablet: mover horizontalmente también
        else if (windowWidth >= 768 && windowWidth < 992) {
            const targetLeft = containerWidth - 90;
            $(bolaSale).animate({ left: targetLeft + 'px' }, 1200, 'swing');
        }
        // En desktop: mover verticalmente (comportamiento original)
        else {
            $(bolaSale).animate({ top: '420px' }, 1000);
        }
    }, 100);
}

// Habilita o deshabilita los botones del juego (ambas versiones)
function deshabilitarBotones(deshabilitar) {
    // Botones desktop
    const botonJugar = document.getElementById('botonJugar');
    const botonReiniciar = document.getElementById('botonReiniciar');
    
    // Botones móvil
    const botonJugarMobile = document.getElementById('botonJugarMobile');
    const botonReiniciarMobile = document.getElementById('botonReiniciarMobile');
    
    // Deshabilitar todos
    if (botonJugar) {
        botonJugar.disabled = deshabilitar;
        botonJugar.style.backgroundColor = deshabilitar ? '#dc3545' : '#007bff';
    }
    
    if (botonReiniciar) {
        botonReiniciar.disabled = deshabilitar;
        botonReiniciar.style.backgroundColor = deshabilitar ? '#dc3545' : '#28a745';
    }
    
    if (botonJugarMobile) {
        botonJugarMobile.disabled = deshabilitar;
        botonJugarMobile.style.backgroundColor = deshabilitar ? '#dc3545' : '#007bff';
    }
    
    if (botonReiniciarMobile) {
        botonReiniciarMobile.disabled = deshabilitar;
        botonReiniciarMobile.style.backgroundColor = deshabilitar ? '#dc3545' : '#28a745';
    }
}

// Genera la tabla de números del bingo (1-75)
function generarTabla() {
    const body = document.getElementById("body");
    
    for (let i = 0; i < 15; i++) {
        const hilera = document.createElement("tr");
        let nro = i + 1;

        for (let j = 0; j < 5; j++) {
            const celda = document.createElement("td");
            celda.textContent = nro;
            hilera.appendChild(celda);
            nro += 15;
        }

        body.appendChild(hilera);
    }
}

// Muestra un mensaje de confirmación para reiniciar
function confirmarReinicio() {
    return confirm("¿Está seguro que desea reiniciar el juego?");
}