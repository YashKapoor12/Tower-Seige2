class Block{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=70;
        this.body=Bodies.rectangle(x,y,50,80,{isStatic:false,mass:20});
        this.image=loadImage('cup.jpg');
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<7.6){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility-=5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
    }
}