let canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
let ctx = canvas.getContext("2d");

let tamanho = 20;

for (let y = 0; y < 500; y += tamanho) {
  for (let x = 0; x < 500; x += tamanho) {

    ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    ctx.fillRect(x, y, tamanho, tamanho);
  }
}