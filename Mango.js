class Mango {
    constructor(x, y, radius, angle) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = 2;
      World.add(world, this.body);
      this.image = loadImage("mango.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 30, 30);
      pop();
    }
  };