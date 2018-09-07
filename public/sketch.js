var socket;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  fullscreen(true);

  socket = io.connect('http://localhost:3000');

  // anonymous callback for socket event 'mouse'
  socket.on('mouse', function(data) {
    fill(0,0,255);
    noStroke();
    ellipse(data.x, data.y, 20, 20);
  });
}

function draw() {
  // Nothing
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  // Send the mouse coordinates
  socket.emit('mouse', {x: mouseX, y: mouseY});
}
