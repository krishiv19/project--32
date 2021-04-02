const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird,slingshot;
var bird2;
var gameState = "onSling";
// var bg = "sprites/bg1.png";
var score = 0;
var act_bird = 'R';

function preload() {
    backgroundImg = loadImage("sprites/bg1.png")
}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2000,20);
    platform = new Ground(150,420,300,170);

    
     pig1 = new Pig(810,350);
     pig2 = new Pig(810,250);
     pig3 = new Pig(810,450);

     box1 = new Box(700,250,70,70);
     box2 = new Box(920,250,70,70);
     box3 = new Box(702,424,70,70);
     box4 = new Box(920,437,70,70);
     
     log6 = new Log(810,205,300, PI/2);
     log5 = new Log(935,356,70, PI/1);
     log4 = new Log(686,350,70, PI/1);
     log3 =  new Log(810,390,300, PI/2);
     lao2 = new Log(810,301,300, PI/2);
     log1 = new Log(810,450,300, PI/2);

     bird = new Bird(200,170);
     bird2 = new Bird2(30,320);
    
    slingshot = new SlingShot(bird.body,{x:200, y:170});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

        //text(mouseX + ", " + mouseY, 100,100);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    
    
     pig1.display();
     pig1.score();
     pig2.display();
     pig2.score();
     pig3.display();
     pig3.score();
    
     box3.display();
     box4.display();
     box1.display();
     box2.display();

     log6.display();
     log5.display();
     log4.display();
     log3.display();
     lao2.display();
     log1.display();

    bird.display();
    bird2.display();
    
    platform.display();
    slingshot.display();    
    ground.display(); 

    textFont("Ravie");
    strokeWeight(4);
    stroke("black");
    fill("yellow");
    text("Press 'c' to switch to yellow bird",300,40);

    textFont("Ravie");
    strokeWeight(4);
    stroke("black");
    fill("red");
    text("Press 'space' to switch to red bird",300,110);
}

function mouseDragged(){
    if(act_bird === 'R') {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    } else {

        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
    }  
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
       bird.trajrctory = []
       slingshot.attach(bird.body);
       act_bird = 'R';
    }

    if(keyCode === 67){
        Matter.Body.setPosition(bird2.body, {x: 200 , y: 50});
        bird2.trajrctory = []
        slingshot.attach(bird2.body);
        act_bird = 'Y';
     }
}

// async function getBackgroundImg(){
    // var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    // var responseJSON = await response.json();

    // var datetime = responseJSON.datetime;
    // var hour = datetime.slice(11,13);
    
    // if(hour>=0600 && hour<=1900){
        // bg = "sprites/bg1.png";
    // }
    // else{
        // bg = "sprites/bg2.jpg";
    // }

    // backgroundImg = loadImage(bg);
    // console.log(backgroundImg);
// }
