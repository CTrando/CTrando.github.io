/**
 * Created by Cameron on 4/3/2017.
 */

function Bubble() {
    this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
    this.vel = createVector(random(0, 10), random(0, 10));

    this.diameter = random(50, 100);

    this.randomizePos = function() {
        this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
    };

    this.reverse = function (vec) {
        this.reverseX(vec);
        this.reverseY(vec);
    };

    this.reverseX = function (vec) {
        vec.set(vec.x * -.8, vec.y);
    };

    this.reverseY = function (vec) {
        vec.set(vec.x, vec.y * -.8);
    };

    this.draw = function () {
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    };

    this.update = function () {
        mousePos = createVector(mouseX, mouseY);

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if (this.pos.x > windowWidth -this.diameter/2 || this.pos.x < this.diameter/2) {
            if(this.pos.x > windowWidth -this.diameter/2){
                this.pos.x = windowWidth - this.diameter/2;
            }

            if(this.pos.x < this.diameter/2){
                this.pos.x = this.diameter/2;
            }
            this.reverseX(this.vel);
        }

        if (this.pos.y > windowHeight -this.diameter/2 || this.pos.y < this.diameter/2) {
            if(this.pos.y > windowHeight -this.diameter/2){
                this.pos.y = windowHeight -this.diameter/2;
            }

            if(this.pos.y < this.diameter/2) {
                this.pos.y = this.diameter/2;
            }
            this.reverseY(this.vel);
        }

        /** Needs work **/
        if(mousePos.dist(this.pos) < this.diameter/2){
            /** direction mouse is in compared to the bubble **/
            let dX = mousePos.x - this.pos.x;
            let dY = mousePos.y - this.pos.y;

            this.vel.x*= -1*(dX/Math.abs(dX));
            this.vel.y*= -1*(dY/Math.abs(dY));
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

    if(mouseIsPressed){
        var force = createVector(mouseX-pmouseX, mouseY-pmouseY);
        force.normalize();
        force.setMag(random(1,3));

        for(var j =0; j< bubbles.length; j++){
            bubbles[j].vel.add(force);
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvas.background(255,255,255);

    for(var i = 0; i< bubbles.length; i++){
        bubbles[i].randomizePos();
    }
}
