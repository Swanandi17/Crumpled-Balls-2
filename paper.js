  
class Paper {  
  constructor(x, y, radius){
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.0,
          'isStatic' : false
      }
       this.radius = radius;
      this.body = Bodies.circle(x, y, radius/2, options);
    World.add(world, this.body);
     
      
 }
 display(){
   var angle=this.body.angle;
   var position=this.body.position;
  push();
  translate(position.x,position.y);
  rotate(angle);
  imageMode(CENTER);
  image(paperImg,0,0,30,30);
  fill("red");
 // ellipseMode(CENTER);
 // ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  pop();
 }
}