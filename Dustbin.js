class Dustbin{
    constructor(x,y,width,heigth){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=heigth
      
        World.add(world,this.body)
        this.image=loadImage("dustbingreen.png")
    }
    display(){
        
        var groundPos=this.body.position
        push()
        translate(groundPos.x,groundPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255,255,0)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}