function Drop(x, y){
    this.pos = createVector(x, y);

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
        stroke(color(0,0,255));
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y +30);
        stroke(0);
    };

    this.update = function(){
        this.pos.y+=3;

        if(this.pos.y > windowHeight + 20){
            this.pos.y = -10;
        }
    }
}


/**
 * Created by Cameron on 3/30/2017.
 */
