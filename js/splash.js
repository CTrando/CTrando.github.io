/**
 * Created by Cameron on 3/30/2017.
 */

function Splash(x,y){

    this.count = 0;
    this.drawCountUntilRandom = random(50,90);
    this.pos = createVector(x,y);

    this.randomizeY = function(){
        this.pos.y = Math.round(random(0, windowHeight));
    };

    this.randomizeX = function(){
        this.pos.x= Math.round(random(0, windowWidth));
    };

    if(!x){
        this.randomizeX();
    }

    if(!y){
        this.randomizeY();
    }

    this.draw = function(){
        this.count++;
        ellipse(this.pos.x, this.pos.y, random(20,100), random(10,20));

        if(this.count > this.drawCountUntilRandom){
            this.randomizeX();
            this.randomizeY();
            this.count = 0;
            this.drawCountUntilRandom = random(20,30);
        }
    };

    this.update = function(){
        this.randomizeX();
        this.randomizeY();
    }
}