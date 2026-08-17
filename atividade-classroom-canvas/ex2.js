let canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;
let ctx = canvas.getContext("2d");

function desenharCirculo(segmentos) {
  let cx = 150;
  let cy = 150;
  let r = 100;

  ctx.beginPath();

  for (let i = 0; i <= segmentos; i++) {
    let ang = (i * 2 * Math.PI) / segmentos;
    let x = cx + r * Math.cos(ang);
    let y = cy + r * Math.sin(ang);

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.stroke();
}

desenharCirculo(8);
// depois troca pra 16, 32, 64