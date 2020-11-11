var snake;

function setup() {
    snake = new Snake(0, 0 , 400 , 400);
}

function draw() {
    snake.update();
    snake.show();
}

function keyPressed() {
    snake.dir(keyCode);
}
