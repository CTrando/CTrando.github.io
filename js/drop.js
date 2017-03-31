function Drop(x, y){
    this.pos = createVector(x, y);

    this.randomizeY = function(){
        this.pos.y = Math.round(random(0, introYBound));
    };

    this.randomizeX = function(){
        this.pos.x= Math.round(random(0, introXBound));
    };

    if(!x){
        this.randomizeX();
    }

    if(!y){
        this.randomizeY();
    }

    this.draw = function(){
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y +30);
    };

    this.update = function(){
        this.pos.y+=3;

        if(this.pos.y > introYBound + 20){
            this.pos.y = -10;
        }
    }
}


/**
 * Created by Cameron on 3/30/2017.
 */
