class Hammer{
    constructor(x,y){
    var options = {
       
    'density' :2,
    'friction' :1.0,
    'resitution' :0.5
        
    }
    this.body = Bodies.rectangle(x,y,50,50,options)
   this.width = 110    
   this.height = 20

   
}
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
   rotate(angle)
   rectMode(CENTER)
   fill("yellow")
   rect(0,0,this.width,this.height)
   pop()
}
}