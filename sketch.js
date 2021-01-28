const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
`   `

var ground, gameState, engine, world, dustbin, paper,dustbinimg,paperImg;
function preload() {
  dustbinimg = loadImage("dustbingreen.png");
  paperImg = loadImage("paper.png");
}
function setup() {
  createCanvas(800, 400);
 rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 380, 100, 10);
  paper = new Paper(100, 200, 40,22);
  ground = Bodies.rectangle(width / 2, 400, width, 20,{
    isStatic:true
  })
  World.add(world, ground);
}

function draw() {
  background(100,100,100);
  if (gameState === "start") {
    
    textSize(20);
    fill("red");
    text(
      "Press UP ARROW to continue.",50,200);
    if (keyCode === UP_ARROW) {
      gameState = "play";
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    dustbin.display();
    paper.display();
  
  }  
     rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,width,20);
    imageMode(CENTER);
    image(dustbinimg,720,335,120,120);
}
 
function keyPressed() {
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
        x:55,
        y: -55
    });
  }
}