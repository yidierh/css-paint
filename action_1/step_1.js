// 创建一个 canvas 图层
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 设置圆心坐标 & 半径
const CenterX = 200;
const CenterY = 200;
const Radius = 150;

// 定义 10 个 可移动的点
const N = 10;
var point = [];

// 将每个点 10 等分
for (var i = 0; i < N; i++) {
  // 基本的三角函数 
  // 圆心角 α (i / N) * (2 * Math.PI)
  // x = a + R * cosα
  // y = b + R * sinα
  var x = Math.cos((i / N) * (2 * Math.PI)) * Radius + CenterX;
  var y = Math.sin((i / N) * (2 * Math.PI)) * Radius + CenterY;
  point[i] = [x, y];
}

// 开始绘制路径
ctx.beginPath();

// 起始位置
var xc1 = (point[0][0] + point[N - 1][0]) / 2;
var yc1 = (point[0][1] + point[N - 1][1]) / 2;

ctx.moveTo(xc1, yc1);

// 将各点之间通过 贝塞尔曲线连接起来
// quadraticCurveTo() 方法为当前的子路径添加一条贝塞尔曲线。这条曲线从当前点开始，到 (x,y) 结束。控制点 (cpX,cpY) 说明了这两个点之间的曲线的形状
for (var i = 0; i < N - 1; i++) {
  var xc = (point[i][0] + point[i + 1][0]) / 2;
  var yc = (point[i][1] + point[i + 1][1]) / 2;
  // 当前点 -》 下一个点中点
  ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc);
}
ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
ctx.closePath();
// 结束画圆

ctx.fillStyle = "rgba(0,0,0,.2)";  // 设置填充颜色
ctx.fill();
ctx.strokeStyle = "blue";  // 设置线条颜色
ctx.lineWidth = 4; // 设置宽度
ctx.stroke(); // 结束画圆

/**/


// 绘制圆圈上的点 只是为了直观看到原理，可以不了解

ctx.moveTo(xc1, yc1);
for (i = 0; i < N - 1; i++) {
  var xc = (point[i][0] + point[i + 1][0]) / 2;
  var yc = (point[i][1] + point[i + 1][1]) / 2;

  // 红点是起点和终点，绿点可以是控制点。每个红点位于两个绿点之间的中点。

  /* 绘制红点 */
  ctx.beginPath();
  ctx.arc(xc, yc, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "red"; 
  ctx.fill();

  /* 绘制绿点 */
  ctx.beginPath();
  ctx.arc(point[i][0], point[i][1], 8, 0,  2*Math.PI);
  ctx.closePath();
  ctx.fillStyle = "green"; 
  ctx.fill();
  /**/
  
}
  /* 最后的点 */
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
// /**/

