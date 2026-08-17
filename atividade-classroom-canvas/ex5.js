let canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;
let ctx = canvas.getContext("2d");

let total = 300 * 300;
let contador = 0;

function desenhar() {
  let x = Math.random() * 300;
  let y = Math.random() * 300;

  ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  ctx.fillRect(x, y, 1, 1);

  contador++;

  if (contador >= total) {
    ctx.clearRect(0, 0, 300, 300);
    contador = 0;
  }
}

setInterval(desenhar, 1);