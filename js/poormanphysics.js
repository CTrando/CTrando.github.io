/**
 * Created by Cameron on 4/5/2017.
 */

var canvas;
var grid = {};
var lines = [];
var player;



function lineWrap(mouseX, mouseY, pmouseX, pmouseY) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.pmouseX = pmouseX;
    this.pmouseY = pmouseY;

    this.points = [];

    this.points.push(createVector(this.mouseX, this.mouseY));

    for(var x = mouseX; x < pmouseX; x++){
        this.points.push(createVector(x, this.mouseY));
    }

    for(var y = mouseY; y< pmouseY; y++) {
        this.points.push(createVector(this.mouseX, y));
    }

    this.draw = function() {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function Player(){
    this.pos = createVector(windowWidth/2,windowHeight/2);
    this.vel = createVector(0,0);

    this.radius = 15;

    this.reverse = function (vec) {
        this.reverseX(vec);
        this.reverseY(vec);
    };

    this.reverseX = function (vec) {
        vec.set(vec.x * -1, vec.y);
    };

    this.reverseY = function (vec) {
        vec.set(vec.x, vec.y * -1);
    };

    this.update = function() {

        for(var j =0; j< nodes.length; j++){
            let dist = Math.abs(this.pos.dist(nodes[j]));
            if(dist < this.radius) {
                this.reverse(this.vel);
                break;
            }
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    };

    this.draw = function() {
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}

function keyPressed() {
    switch(keyCode){
        case RIGHT_ARROW:
            player.vel.x +=2;
            break;
        case LEFT_ARROW:
            player.vel.x -=2;
            break;
        case UP_ARROW:
            player.vel.y -=2;
            break;
        case DOWN_ARROW:
            player.vel.y +=2;
            break;
    }
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    player = new Player();

    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    frameRate(24);

    currentPos = createVector(0,0);
}

var next = .1;
var time = 0;

var nodes = [];
var currentPos;

function draw() {
    canvas.background(255, 255, 255);

    if(mouseIsPressed){
        lines.push(new lineWrap(mouseX, mouseY, pmouseX, pmouseY));

        let mousePos = createVector(mouseX, mouseY);
        let mousePressPos = createVector(pmouseX, pmouseY);

        if(mousePos.dist(mousePressPos) > 5) {
            currentPos.x = mouseX;
            currentPos.y = mouseY;

            nodes.push(currentPos.copy());
        }

        if(time > next) {
            currentPos.x = mouseX;
            currentPos.y = mouseY;

            nodes.push(currentPos.copy());
            time = 0;
        }
    } else {

    }

    for(var i = 0; i< lines.length; i++){
        lines[i].draw();
    }

    for(var j = 0; j< nodes.length; j++){
        ellipse(nodes[j].x, nodes[j].y, 10, 10);
    }

    player.update();
    player.draw();

    time +=.1;
}