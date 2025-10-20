// ==================== INTERFAZ DE USUARIO ====================
// Maneja las interacciones visuales y animaciones

// Crea y anima la bola que sale
function crearBolaSaliente(numero) {
    const bolaSale = document.createElement("div");
    bolaSale.className = "ballSale animate";
    bolaSale.textContent = numero;
    document.getElementById("bolaSalientes").appendChild(bolaSale);

    setTimeout(() => {
        const windowWidth = window.innerWidth;
        const container = document.getElementById("bolaSalientes");
        const containerWidth = container.offsetWidth;
        
        if (windowWidth < 768) {
            const targetLeft = containerWidth - 70;
            $(bolaSale).animate({ left: targetLeft + 'px' }, 1200, 'swing');
        } 
        else if (windowWidth >= 768 && windowWidth < 992) {
            const targetLeft = containerWidth - 90;
            $(bolaSale).animate({ left: targetLeft + 'px' }, 1200, 'swing');
        }
        else {
            $(bolaSale).animate({ top: '420px' }, 1000);
        }
    }, 100);
}

// Habilita o deshabilita los botones del juego
function deshabilitarBotones(deshabilitar) {
    const botonJugar = document.getElementById('botonJugar');
    const botonReiniciar = document.getElementById('botonReiniciar');
    
    if (botonJugar) {
        botonJugar.disabled = deshabilitar;
        botonJugar.style.backgroundColor = deshabilitar ? '#dc3545' : '#007bff';
    }
    
    if (botonReiniciar) {
        botonReiniciar.disabled = deshabilitar;
        botonReiniciar.style.backgroundColor = deshabilitar ? '#dc3545' : '#28a745';
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