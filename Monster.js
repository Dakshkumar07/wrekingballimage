class Monster{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("monster.jpg");
        World.add(world, this.body);
    }
      display(){
        push();
        image(this.image, this.body.position.x, this.body.position.y, 150, 150);
        pop();
        
 
      
      }


}