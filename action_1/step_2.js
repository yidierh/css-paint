var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const CenterX = 200;
const CenterY = 200;
const Radius = 150;
const N = 10;
var point = [];

for (var i = 0; i < N; i++) {
  var x = Math.cos(i * (360 / N) * (Math.PI / 180)) * Radius + CenterX;
  var y = Math.sin(i * (360 / N) * (Math.PI / 180)) * Radius + CenterY;
  point[i] = [x, y];
}

// 通过控制其中一个点的半径 让他呈现不规则轨迹
// 让第三个点 靠近圆的中心 大约 50 像素
point[3][0]= Math.cos(3 * (360 / N)  * (Math.PI / 180)) * (Radius - 50) + CenterX;
point[3][1]= Math.sin(3 * (360 / N)  * (Math.PI / 180)) * (Radius - 50) + CenterY;
ctx.beginPath();
var xc1 = (point[0][0] + point[N - 1][0]) / 2;
var yc1 = (point[0][1] + point[N - 1][1]) / 2;

ctx.moveTo(xc1, yc1);
for (var i = 0; i < N - 1; i++) {
  var xc = (point[i][0] + point[i + 1][0]) / 2;
  var yc = (point[i][1] + point[i + 1][1]) / 2;
  ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc);
}
ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
ctx.closePath();
ctx.fillStyle = "rgba(0,0,0,.2)"; 
ctx.fill();
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 4;
ctx.stroke();

/**/

ctx.moveTo(xc1, yc1);
for (i = 0; i < N - 1; i++) {
  var xc = (point[i][0] + point[i + 1][0]) / 2;
  var yc = (point[i][1] + point[i + 1][1]) / 2;
  /**/
  ctx.beginPath();
  ctx.arc(xc, yc, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "red"; 
  ctx.fill();
  ctx.beginPath();
  ctx.arc(point[i][0], point[i][1], 8, 0,  2*Math.PI);
  ctx.closePath();
  ctx.fillStyle = "green"; 
  ctx.fill();
  /**/
}
/**/
ctx.beginPath();
ctx.arc(xc1, yc1, 5, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "red"; 
ctx.fill();
ctx.beginPath();
ctx.arc(point[i][0], point[i][1], 8, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "green"; 
ctx.fill();
/**/