class Chain {

    constructor(body1,body2){
    var chain_options={
        bodyA:body1,
        bodyB:body2,
        length:25,
        stiffness:0.3
 }
        this.chain=Matter.Constraint.create(chain_options);
        World.add(world,this.chain);

    }
     
     display(){
       
        strokeWeight(4)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)



     }

    
}