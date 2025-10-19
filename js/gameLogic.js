// ==================== LÓGICA DEL JUEGO ====================
// Maneja la generación de números aleatorios sin repetición

const esferasLista = [];

// Verifica si un número ya fue cantado
function repetidos(n) {
    const existe = esferasLista.includes(n);
    if (!existe) {
        esferasLista.push(n);
    }
    return existe;
}

// Genera un número aleatorio único del 1 al 75
function numeroRandom() {
    let n, encontrado;
    do {
        n = Math.floor(Math.random() * 75) + 1;
        encontrado = repetidos(n);
    } while (encontrado);
    
    console.log('Números cantados:', esferasLista);
    return n;
}

// Reproduce el audio correspondiente según el número
function cantarNumero(n) {
    let letra = '';
    
    if (n >= 1 && n <= 15) letra = 'b';
    else if (n >= 16 && n <= 30) letra = 'i';
    else if (n >= 31 && n <= 45) letra = 'n';
    else if (n >= 46 && n <= 60) letra = 'g';
    else if (n >= 61 && n <= 75) letra = 'o';

    if (letra) {
        const extension = (letra === 'b' || letra === 'i') ? '.aac' : '.mp3';
        const audio = new Audio(`mp3s/${letra}${n}${extension}`);
        audio.play().catch(err => console.log('Error al reproducir audio:', err));
    }
}

// Marca el número en la tabla visual
function marcarNumero(n) {
    const celdas = document.querySelectorAll('.table-bingo tbody td');
    celdas.forEach(celda => {
        const nro = parseInt(celda.textContent);
        if (n === nro) {
            celda.classList.add('marked');
        }
    });
}

// Obtiene los números cantados (para posible uso futuro)
function getNumerosCantados() {
    return [...esferasLista];
}

// Reinicia la lista de números cantados
function resetearNumeros() {
    esferasLista.length = 0;
}