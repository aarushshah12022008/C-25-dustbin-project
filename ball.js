class ball{

    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body=Bodies.circle(x,y,radius,options)
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var ballPos=this.body.position
        push()
        translate(ballPos.x,ballPos.y)
        ellipse(CENTER)
        strokeWeight(4)
        fill(255,255,0)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
        
}
