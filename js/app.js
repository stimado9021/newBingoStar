// Crear un array para almacenar las esferas
var balls = [];

// Definir la clase Ball
function Ball(x, y, dx, dy, radius, color, number) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.number = number;
}

// Crear el canvas y obtener su contexto
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Función para dibujar una esfera
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fillText(this.number, this.x, this.y);
};

// Función para actualizar la posición de la esfera
Ball.prototype.update = function() {
  if(this.x + this.dx > canvas.width-this.radius || this.x + this.dx < this.radius) {
    this.dx = -this.dx;
  }
  if(this.y + this.dy > canvas.height-this.radius || this.y + this.dy < this.radius) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;
};

// Función para crear esferas
function createBalls() {
  var colors = ['blue', 'silver', 'green', 'violet', 'cyan', 'purple', 'purpure'];
  for(var i = 0; i < 10; i++) {
    var radius = 20;
    var x = Math.random() * (canvas.width - 2*radius) + radius;
    var y = Math.random() * (canvas.height - 2*radius) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    var color = colors[0];
    var number = Math.floor(Math.random() * 76); // Genera un número aleatorio entre 0 y 75
    balls.push(new Ball(x, y, dx, dy, radius, color, number));
  }
}

// Función para dibujar y actualizar las esferas
function drawBalls() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }
}
function reinicarJuego(){
  const msg = confirm("¿Esta seguro q desea reiniciar el juego?");
    if(msg){
      alert('El juego se Reiniciara. Presione Aceptar')
      window.location.replace('index.html')
    }
  }

  function marcarNumero(n){
    var celdas = document.getElementsByTagName("td");
 
    // for (var i = 0; i < 15; i++) { 
      for (var j = 0; j < celdas.length; j++) {
        
        var nro = celdas[j].innerHTML;
        
         if(n===Number(nro)){
          celdas[j].style.background = "white";
          celdas[j].style.fontSize = "14px";
          celdas[j].style.color = "red";  
        }                      
      }
    // }
  }

  function  cantarNumero(n){
    if(n>= 1 && n<=15){
      const audio = new Audio("mp3s/b" + n + ".aac");
      audio.play();
    }
    if(n>= 16 && n<=30){
      const audio = new Audio("mp3s/i" + n + ".aac");
      audio.play();
    }
    if(n>= 31 && n<=45){
      const audio = new Audio("mp3s/n" + n + ".mp3");
      audio.play();
    }
    if(n>= 46 && n<=60){
      const audio = new Audio("mp3s/g" + n + ".mp3");
      audio.play();
    }
    if(n>= 61 && n<=75){
      const audio = new Audio("mp3s/o" + n + ".mp3");
      audio.play();
    }     
  }

  function jugar(){
document.getElementById('botonJugar').disabled = true;
document.getElementById('botonReiniciar').disabled=true;

document.getElementById('botonJugar').style.background = 'red';
document.getElementById('botonReiniciar').style.background = 'red';

    $(".ballSale").html('');
    $(".ballSale").removeClass('ballSale')
   
    var nro =  numeroRandom()
   
    // Dibujar y actualizar las esferas cada 10 milisegundos
   const freno = setInterval(drawBalls, 1); 
    const audio = new Audio("mp3s/bolas-de-bingo.mp3");
     audio.play();   
     var c =0;
     const id =  setInterval(() => {
     
     c++
     
          if(c==48){
            
              clearInterval(freno);
             
              draw()  
              console.log(document.documentElement.scrollWidth)
              //const pageWidth  = document.documentElement.scrollWidth;
              //const pageHeight = document.documentElement.scrollHeight;
              if(document.documentElement.scrollWidth>500 && document.documentElement.scrollWidth<1200){
                $(".ballSale").animate({marginLeft: '+=100'},1000)
                $(".ballSale").animate({marginTop: '+=440' },1000)  
              }
              if(document.documentElement.scrollWidth>1200){
                $(".ballSale").animate({marginLeft: '+=375'},1000)
                $(".ballSale").animate({marginTop: '+=440' },1000)  
              }
              if(document.documentElement.scrollWidth<500){
               // $(".ballSale").animate({marginLeft: '+=75'},1000)
                $(".ballSale").animate({marginTop: '+=440' },1000)  
              }                                    
              cantarNumero(nro)
              marcarNumero(nro)
               document.getElementById('botonJugar').disabled = false;
    document.getElementById('botonReiniciar').disabled=false;
    document.getElementById('botonJugar').style.background = 'blue';
    document.getElementById('botonReiniciar').style.background = 'green';
          }              
    }, 100);
   
  }


// Crear las esferas
createBalls();
for(var i = 0; i < balls.length; i++) {
  balls[i].draw();
  //balls[i].update();
}

