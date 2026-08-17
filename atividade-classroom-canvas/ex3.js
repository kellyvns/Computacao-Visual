let canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
let ctx = canvas.getContext("2d");

let tamanho = 40; 

for (let i = 0; i < 50; i++) {
  let linha = Math.floor(Math.random() * 10);
  let coluna = Math.floor(Math.random() * 10);

  ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  ctx.fillRect(coluna * tamanho, linha * tamanho, tamanho, tamanho);
}