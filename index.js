// 创建一个 canvas 图层
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 绘制 10 个绿点
const CenterX = 200;
const CenterY = 200;
const Radius = 150;
const N = 10;
var point = [];
// x = CenterX + Radius * cos(　角度)
// y = CenterY + Radius * sin(角度)

// (i / N) * (2 * Math.PI) 将 360度 分为 10 等份
for (var i = 0; i < N; i++) {
  var x = Math.cos((i / N) * (2 * Math.PI)) * Radius + CenterX;
  var y = Math.sin((i / N) * (2 * Math.PI)) * Radius + CenterY;
  point[i] = [x, y];
}

// 开始绘画
ctx.beginPath();
var xc1 = (point[0][0] + point[N - 1][0]) / 2;
var yc1 = (point[0][1] + point[N - 1][1]) / 2;

// quadraticCurveTo 绘制一条二次贝塞尔曲线
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