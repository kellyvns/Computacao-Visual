let canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;
let ctx = canvas.getContext("2d");

function desenhar() {
  let x = Math.random() * 300;
  let y = Math.random() * 300;

  ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  ctx.fillRect(x, y, 2, 2);
}

setInterval(desenhar, 10);