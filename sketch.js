const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var roof;
var ball,rope;
var ball2,rope2;
var ball3,rope3;
var ball4,rope4;
var ball5,rope5;
var ball6,rope6;


function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  
  world = engine.world;

 

 

  var ball_options = {
    restitution:0.5
  }

  var roof_options={
		isStatic:true			
	}

  roof = Bodies.rectangle(490,100,250,20,roof_options);
  World.add(world,roof);




  ball = Bodies.circle(200,400,20,ball_options)
  World.add(world,ball);
  
  ball2 = Bodies.circle(250,400,20,ball_options)
  World.add(world,ball2);
  
  ball3 = Bodies.circle(300,400,20,ball_options)
  World.add(world,ball3);
  
  ball4 = Bodies.circle(350,400,20,ball_options)
  World.add(world,ball4);
  
  ball5 = Bodies.circle(400,400,20,ball_options)
  World.add(world,ball5);
  
  ball6 = Bodies.circle(450,400,20,ball_options)
  World.add(world,ball6);
 
  
 

  rope = Matter.Constraint.create({
    pointA:{x:395,y:100},
    bodyB:ball,
    length:200,
    stiffness:0.5
  })

  World.add(world,rope)


  rope2 = Matter.Constraint.create({
    pointA:{x:430,y:100},
    bodyB:ball2,
    length:200,
    stiffness:0.5
  })

  World.add(world,rope2)
  
  rope3 = Matter.Constraint.create({
    pointA:{x:470,y:100},
    bodyB:ball3,
    length:200,
    stiffness:0.6
  })
  
  World.add(world,rope3)

  rope4 = Matter.Constraint.create({
    pointA:{x:500,y:100},
    bodyB:ball4,
    length:200,
    stiffness:0.7
  })
  
  World.add(world,rope4)

  rope5 = Matter.Constraint.create({
    pointA:{x:540,y:100},
    bodyB:ball5,
    length:200,
    stiffness:0.8
  })
  
  
  World.add(world,rope5)

  rope6 = Matter.Constraint.create({
    pointA:{x:580,y:100},
    bodyB:ball6,
    length:200,
    stiffness:0.9
  })

  World.add(world,rope6)

  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() 
{
  background("orange");
  textSize(20)
  text("Press UP_ARROW to see the result",330,20)
  Engine.update(engine);

  
  rect(roof.position.x,roof.position.y,250,20);


  ellipse(ball.position.x,ball.position.y,18)
  ellipse(ball2.position.x,ball2.position.y,18)
  ellipse(ball3.position.x,ball3.position.y,18)
  ellipse(ball4.position.x,ball4.position.y,18)
  ellipse(ball5.position.x,ball5.position.y,18)
  ellipse(ball6.position.x,ball6.position.y,18)

  strokeWeight(4)
  stroke("black")
 
  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y)
  line(rope2.pointA.x,rope2.pointA.y,ball2.position.x,ball2.position.y)
  line(rope3.pointA.x,rope3.pointA.y,ball3.position.x,ball3.position.y)
  line(rope4.pointA.x,rope4.pointA.y,ball4.position.x,ball4.position.y)
  line(rope5.pointA.x,rope5.pointA.y,ball5.position.x,ball5.position.y)
  line(rope6.pointA.x,rope6.pointA.y,ball6.position.x,ball6.position.y)
  fill("black")


}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    Matter.Body.applyForce(ball6,{x:0,y:0},{x:0.01,y:0})
    Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.01,y:0})
    Matter.Body.applyForce(ball4,{x:0,y:0},{x:0.01,y:0})
    Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.01,y:0})
    Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.01,y:0})




  }
}