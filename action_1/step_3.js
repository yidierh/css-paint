var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const CenterX = 200;
const CenterY = 200;
const Radius = 150;
const N = 10;
var point = [];

for (var i = 0; i < N; i++) {
  // 让每个点偏移 0 - 50 个像素之间的随机值 这样就可以形成一个不规则的圆
  var r = 50*Math.random();
  var x = Math.cos((i / N) * (2 * Math.PI)) * (Radius - r) + CenterX;
  var y = Math.sin((i / N) * (2 * Math.PI)) * (Radius - r) + CenterY;
  point[i] = [x, y];
}
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