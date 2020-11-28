class Polygon{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r,{isStatic:false});
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage('polygon.png')
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}