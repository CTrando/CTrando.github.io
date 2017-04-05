/**
 * Created by Cameron on 4/4/2017.
 */

var canvas;
var tileBoard = [];
var rows = 20;
var cols = 20;
var sze = 20;

var h = rows*sze;
var w = cols*sze;

var t = 0;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    background(255,255,255);
    stroke(color(0,0,240));
    canvas.position(0,0);
    frameRate(24);
}

function draw(){
    translate(windowWidth/2, windowHeight/2);
    translate(-w/2, -h/2);

    background(color(255,255,255));
    for(var y = 0; y< rows; y++){
        beginShape(TRIANGLE_STRIP);
        for(var x = 0; x< cols; x++){

            vertex(x*sze, y*sze,0);
            vertex(x*sze, (y+1)*sze * noise(15+t +(x+y)/4) ,0);

            /*vertex(x * sze * noise(5+t), y * sze * noise(10+t), 10);
            vertex(x * sze * noise(20+t), (y+1) * sze * noise(25+t), 10);*/
        }
        endShape();
    }

    t+= .01;
}

/*
function initTileBoard() {
    for(var i = 0; i< rows; i++){
        for(var j = 0; j< cols; j++){
            tileBoard[i][j] = new
        }
    }
}*/
