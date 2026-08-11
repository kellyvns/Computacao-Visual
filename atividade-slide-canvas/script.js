const c1 = document.getElementById("c1").getContext("2d");

c1.beginPath();
c1.moveTo(80, 30);
c1.lineTo(20, 150);
c1.lineTo(140, 150);
c1.closePath();
c1.fillStyle = "purple";
c1.fill();

c1.beginPath();
c1.moveTo(220, 30);
c1.lineTo(340, 30);
c1.lineTo(340, 150);
c1.lineTo(220, 150);
c1.closePath();
c1.fillStyle = "royalblue";
c1.fill();


function desenharPoligono(ctx, cx, cy, raio, lados, cor) {
  ctx.beginPath();
  for (let i = 0; i < lados; i++) {
    const angulo = (i / lados) * Math.PI * 2 - Math.PI / 2;
    const x = cx + raio * Math.cos(angulo);
    const y = cy + raio * Math.sin(angulo);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = cor;
  ctx.fill();
}
desenharPoligono(c1, 460, 100, 70, 5, "black");

const c2 = document.getElementById("c2").getContext("2d");
c2.strokeStyle = "black";

c2.beginPath();
c2.moveTo(100, 180);
c2.lineTo(300, 180);
c2.lineTo(300, 320);
c2.lineTo(100, 320);
c2.closePath();
c2.stroke();

c2.beginPath();
c2.moveTo(80, 180);
c2.lineTo(200, 80);
c2.lineTo(320, 180);
c2.stroke();

c2.beginPath();
c2.moveTo(170, 320);
c2.lineTo(170, 240);
c2.lineTo(230, 240);
c2.lineTo(230, 320);
c2.stroke();

c2.beginPath();
c2.moveTo(120, 200);
c2.lineTo(160, 200);
c2.lineTo(160, 240);
c2.lineTo(120, 240);
c2.closePath();
c2.stroke();


const c3 = document.getElementById("c3").getContext("2d");

c3.beginPath();
c3.moveTo(200, 40);
c3.lineTo(340, 140);
c3.lineTo(290, 310);
c3.lineTo(110, 310);
c3.lineTo(60, 140);
c3.closePath();

c3.fillStyle = "pink";      
c3.fill();

c3.strokeStyle = "darkred"; 
c3.lineWidth = 4;
c3.stroke();