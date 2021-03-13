class Rubber{
    constructor(x,y){
    var options = {
       
    density :0.3,
    friction :5,
    resitution :1
        
    }
   this.body = Bodies.circle(750, 580,3,options)
 

   
}
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    ellipse(56,46,55,55)
   rotate(angle)
   rectMode(CENTER)
   fill("green")
   rect(0,0,this.width,this.height)
   pop()
}
}