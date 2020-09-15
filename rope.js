class Rope{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){

        
            var pointA = this.pointA;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
            strokeWeight(3);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop();
        }
           
        
    }
    
