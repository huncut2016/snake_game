var snake;

function setup() {
    snake = new Snake(0, 0);
}

function draw() {
    snake.update();
    snake.show();
}

function keyPressed() {
    snake.dir(keyCode);
}
