class PB {
    constructor(x, y) {
      var options = {
         'isStatic':true,
        'restitution':0.3,
          'friction':1.5,
          'density':1.2
      }
      this.body =  Bodies.circle(100 , 200 , 30 );
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      circle(0, 0, 30);

      pop();
    }
  };