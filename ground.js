class Platform{
    constructor(x,y,width){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=10;
        this.body=Bodies.rectangle(x,y,width,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke('cyan')
        strokeWeight(10);
        rect( 0, 0, this.width, this.height);
        pop()
    }
}