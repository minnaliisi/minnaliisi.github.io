var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 60;


function animate() {
  requestAnimationFrame(animate);   //create a loop for 'stopmotion' animation
  c.globalCompositeOperation = 'xor'; //overlapping object effect

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  c.fillStyle = 'black';
  c.fillRect(0, 0, window.innerWidth, window.innerHeight);

  c.beginPath();  //circle element
  c.arc(x, y, 100, 0, Math.PI*2);
  c.fillStyle = 'white';
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) { //makes circle bounce back when it hits the sides
    dx = -dx;
  }

  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;  //adds the speed to element - how many pixels it moves per loop
  y += dy;
}

animate();
