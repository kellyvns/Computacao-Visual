let canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 400;
let ctx = canvas.getContext("2d");

for (let i = 0; i < 50; i++) {
  let x = Math.random() * 500;
  let y = Math.random() * 400;
  let w = Math.random() * 100;
  let h = Math.random() * 100;

  ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  ctx.fillRect(x, y, w, h);
}