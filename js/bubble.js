/**
 * Created by Cameron on 4/3/2017.
 */

function Bubble() {
    this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
    this.vel = createVector(random(0, 10), random(0, 10));

    this.radius = random(50, 100);

    this.reverseX = function (vec) {
        vec.set(vec.x * -1, vec.y);
    };

    this.reverseY = function (vec) {
        vec.set(vec.x, vec.y * -1);
    };

    this.draw = function () {
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    };

    this.update = function () {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if (this.pos.x > windowWidth || this.pos.x < 0) {
            this.reverseX(this.vel);
        }

        if (this.pos.y > windowHeight || this.pos.y < 0) {
            this.reverseY(this.vel);
        }
    }
}

function initBubbles() {
    var numBubbles = random(minBubbles, maxBubbles);
    for (var i = 0; i < numBubbles; i++) {
        bubbles.push(new Bubble());
    }
}

var minBubbles = 20;
var maxBubbles = 100;
var canvas;
var bubbles = [];
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.background(255, 0, 255);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.background(255, 255, 255);
    frameRate(30);

    stroke(color(0, 0, 255));

    initBubbles();
}

function draw() {
    canvas.background(255, 255, 255);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].draw();
    }
}
