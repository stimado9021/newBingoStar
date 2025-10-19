// ==================== CLASE BALL ====================
// Define la estructura y comportamiento de cada bola en el canvas

class Ball {
    constructor(x, y, dx, dy, radius, color, number) {
        this.x = x;           // Posición X
        this.y = y;           // Posición Y
        this.dx = dx;         // Velocidad en X
        this.dy = dy;         // Velocidad en Y
        this.radius = radius; // Radio de la bola
        this.color = color;   // Color de la bola
        this.number = number; // Número mostrado en la bola
    }

    // Dibuja la bola en el canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        
        // Dibujar el número
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.number, this.x, this.y);
    }

    // Actualiza la posición de la bola y detecta colisiones con bordes
    update(canvas) {
        // Rebote en los bordes horizontales
        if (this.x + this.dx > canvas.width - this.radius || 
            this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        
        // Rebote en los bordes verticales
        if (this.y + this.dy > canvas.height - this.radius || 
            this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        
        // Actualizar posición
        this.x += this.dx;
        this.y += this.dy;
    }
}