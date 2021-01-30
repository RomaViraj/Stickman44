class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image =   loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");// loadImage("Walking Frame/walking_1.png");
        this.image.frameDelay=20


        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        animation(this.image,pos.x,pos.y+70,300,300);

    }
}