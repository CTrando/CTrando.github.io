/**
 * Created by Cameron on 3/30/2017.
 */

var canvas;
var centerIntroX;
var centerIntroY;

var introYBound;
var introXBound;
var drop;
var drops =[];
var splashes = [];

function setup(){

    var $frontpage = $("#front-page");
    var width = $frontpage.width();
    var height = $frontpage.height();

    var offset = $frontpage.offset();

    centerIntroX = offset.left + width/2;
    centerIntroY = offset.top + height/2;

    introYBound = offset.top+height;
    introXBound = offset.left+width;

    canvas = createCanvas(introXBound, introYBound);
    canvas.background(255,0,255);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    canvas.background(255,255,255);
    frameRate(30);

    initDrops();
    initSplashes();
}

function initDrops(){
    for(var i = 0; i< 100; i++){
        drops.push(new Drop());
    }
}

function initSplashes(){
    for(var i = 0; i< 25; i++){
        splashes.push(new Splash());
    }
}

var isComplete = false;
var i = 0;

function draw(){
    canvas.background(255,255,255);
    for(var i = 0; i< 100; i++){
        drops[i].draw();
        drops[i].update();
    }

    for(var j = 0; j< 25; j++){
        splashes[j].draw();
        //splashes[j].update();
    }

    if(!isComplete){
        ellipse(i, i, i, i);
        if(i > centerIntroX){
            isComplete = true;
        }
        i+= 8;
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvas.background(255,255,255);
}