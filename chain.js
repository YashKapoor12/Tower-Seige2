class Link{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.07,
            lenght:0.05
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    release(bodyA){
        this.body.bodyA=null;
    }
    attach(bodyA){
        this.body.bodyA=bodyA;
    }
    display(){
        if(this.body.bodyA){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.pointB;
        stroke(255);
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}