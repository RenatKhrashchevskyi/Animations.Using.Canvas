// //Movement on the page
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');

// let position = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 200, 200);
//     ctx.fillRect(position, 0, 20, 20);
//     position++;
//     if (position > 200) {
//         position = 0;
//     }
// }, 30);

// //Changing the size of a square
// let ctx = canvas.getContext('2d');

// let size = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 200, 200);
//     ctx.fillRect(0, 0, size, size);
//     size++;
//     if (size > 200) {
//         size = 0;
//     }
// }, 30);

// // random bee

// let circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill()
//     } else {
//         ctx.stroke();
//     }
// };

// //draw bee

// let drawBee = function (x, y) {
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = 'Black';
//     ctx.fillStyle = 'Gold';

//     circle(x, y, 8, true);
//     circle(x, y, 8, false);
//     circle(x - 5, y - 11, 5, false);
//     circle(x + 5, y - 11, 5, false);
//     circle(x - 2, y - 1, 2, false);
//     circle(x + 2, y - 1, 2, false);
// };

// let update = function (coordinate) {
//     let offset = Math.random() * 4 - 2;
//     coordinate += offset;
//     if (coordinate > 200) {
//         coordinate = 200;
//     } if (coordinate < 0) {
//         coordinate = 0;
//     }
//     return coordinate;
// };

// //Animating a bee
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');

// let y = 100;
// let x = 100;

// setInterval(function () {
//     ctx.clearRect(0, 0, 200, 200);

//     drawBee(x, y);
//     x = update(x);
//     y = update(y);

//     ctx.strokeRect(0, 0, 200, 200);
// }, 30);

// //Bouncing ball

let Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = Math.random() * 10 - 5;
  this.ySpeed = Math.random() * 10 - 5;
  let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
  this.color = pickRandomWord(colors);
};

let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// //Drawing the ball

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  ctx.fillStyle = this.color;
  circle(this.x, this.y, 3, true);
};

//Moving the ball
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

//Bounces of the ball
Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

//Ball animation
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let balls = [];

for (let i = 0; i < 10; i++) {
  balls[i] = new Ball();
}


setInterval(function () {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }
  ctx.strokeRect(0, 0, width, height);
}, 30);
