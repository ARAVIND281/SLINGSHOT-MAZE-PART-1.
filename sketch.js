const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    platform1 = new Ground(800,200,200,10);
    var arr = []

    
    for (var i = 710; i <= 890; i++) {
        
        box1 = new Box(i+40,150,20,20);
        
            }
    arr.push(box1);
    box2 = new Box(800,200,20,20,255);
    /*
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    ball = new Ball(100,100);
    chain = new Chain(ball.body,{x:200,y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    //box2.display();
    ground.display();
    /*
    log1.display();

    box3.display();
    box4.display();
   
    log3.display();

    box5.display();
    log4.display();
    log5.display();*/

    ball.display();
    platform.display();
    platform1.display();
    chain.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}