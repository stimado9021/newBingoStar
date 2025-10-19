
const esferasLista = [];
function repetidos(n){
    var nroRepe = esferasLista.includes(n);
    console.log(n)
    console.log(nroRepe)
    if (nroRepe==false){
      esferasLista .push(n);
      return nroRepe;
    }else{
      return nroRepe;
    } 
  }
  function numeroRandom(){
    do{
        var hallado=false;
          var n = Math.floor(Math.random()*75) 
            hallado=repetidos(n);
            if(n==0){hallado=true}
      }while(hallado==true)
      console.log(esferasLista)
      return n
  }

function draw() {
  var bolaSale  = document.createElement("div");
  bolaSale.className = "ballSale";
  bolaSale.textContent=esferasLista[esferasLista.length-1]; 
  bolaSale.setAttribute("id", "ballSale"); 
  document.getElementById("bolaSalientes").appendChild(bolaSale);
        
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



var body=document.getElementById("body");
for (var i = 0; i < 15; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 var cont=0;
 var nro=i+1;
    for (var j = 0; j < 5; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      if(cont!=0){nro=nro+15}
      var textoCelda = document.createTextNode(nro);
      celda.appendChild(textoCelda);
      celda.style.textAlign = "center";
      celda.style.color = "black";
      hilera.appendChild(celda);
      cont++;
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    body.appendChild(hilera);
  }