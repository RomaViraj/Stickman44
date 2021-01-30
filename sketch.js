const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand,stick=[],stickman;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    for(var i =1;i<=7;i++){
        stick[i]=loadImage("Stick"+i+".jpg")
    }
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1000,1000);

    stickman=Bodies.circle(0,random(20,800),10,{velocity:{x:10,y:0}, isStatic:true})
    World.add(world,stickman)
   // stickman.addImage()
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1000), random(0,1000)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    var x=0;
    x=x+2
    var y=200;
    var pos=stickman.position.x
    for(var i =1;i<stick.length;i++){
        image(stick[i],pos,stickman.position.y,30,30)
       //        image(stick[i],stickman.position.x,stickman.position.y,30,30)

    }
   // //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

