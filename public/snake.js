Array.prototype.vag = function () {
  var n = this;
  var nn = [];
  for (let i = 0; i < n.length - 1; i++) {
    nn.push(n[i]);
  }
  return nn;
}

class Snake {
  constructor(x, y , h, w) {
    createCanvas(h, w);
    frameRate(3);
    this.score = 0;
    this.body = [createVector(x, y)]
    this.vel = createVector(20, 0);
    this.new_food();
    this.con = true;
  }

  update() {
    this.bite();
    this.move();
    this.eat();
    if (this.body[0].x >= width || this.body[0].y >= height || this.body[0].x < 0 || this.body[0].y < 0) {
      this.game_over();
    }

  }
  write_score() {
    textSize(32);
    text(String(this.score), 10, 30);
    fill(255);
  }

  game_over() {
    alert("Game Over!");
    this.score = 0;
    this.body = [createVector(0, 0)]
    this.vel = createVector(20, 0);
    this.new_food();
  }

  show() {
    background(50);

    this.body.forEach((pos) => {
      fill("white");
      rect(pos.x, pos.y, 20, 20);
    });

    fill('red');
    rect(this.food.x, this.food.y, 20, 20);
    this.write_score();
  }

  bite() {
    for (let i = 1; i < this.body.length; i++) {
      var elem = this.body[i];
      if (elem.y == this.body[0].y && elem.x == this.body[0].x) {
        this.game_over();
      }
    }
  }

  dir(key) {
    if(this.con){
      switch (true) {
        case key === LEFT_ARROW && this.vel.x != 20:
          this.vel.x = -20;
          this.vel.y = 0;
          break;
        case key === RIGHT_ARROW && this.vel.x != -20:
          this.vel.x = 20;
          this.vel.y = 0;
          break;
        case key === UP_ARROW && this.vel.y != 20:
          this.vel.x = 0;
          this.vel.y = -20;
          break;
        case key === DOWN_ARROW && this.vel.y != -20:
          this.vel.x = 0;
          this.vel.y = 20;
          break;
        default:
          textSize(32);
          text("Rossz gomb!", 10, 30);
          fill(255);
          break;
      }
    }
    this.con = false;
  }

  move() {
    if (this.body)
    var array = this.body;
    var x = this.body[0].x + this.vel.x;
    var y = this.body[0].y + this.vel.y;
    var head = [createVector(x, y)];
    head.push(...array.vag());
    this.body = head;
    this.con = true;
  }

  addbody() {
    var array = this.body;
    var x = this.body[0].x + this.vel.x;
    var y = this.body[0].y + this.vel.y;
    var head = [createVector(x, y)];
    head.push(...array.vag(), this.body[this.body.length - 1]);
    this.body = head;

  }

  new_food() {
    var x = floor(random(0, width / 20)) * 20;
    var y = floor(random(0, height / 20)) * 20;
    this.food = createVector(x, y);
  }

  eat() {
    if (dist(this.body[0].x, this.body[0].y, this.food.x, this.food.y) == 0) {
      this.new_food();
      this.addbody();
      this.score++;
    }
  }
}

