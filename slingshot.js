class slingshot {
    constructor(body1,point2){
    var options = {
        bodyA:body1,
        pointB:point2,
        length:10,
        stiffness:0.06,
        
    }
    this.pointB = point2
 this.sling=Constraint.create(options)
 World.add (world,this.sling); 
    }
    fly(){
        this.sling.bodyA=null;
    }
 
    //this condition will check if bodyA is present only,it will only check if it is null or it has body in constraint
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
 }