class Stone{
    constructor(x,y,width,height){
    var options = {
       
    'density' :0.8,
    'friction' :0.3,
    'resitution' :1.0
        
    }
    this.body = Bodies.rectangle(x,y,50,50,options)
   this.width = 60    
   this.height = 70


}
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
   translate(pos.x,pos.y)
   rotate(angle)
   rectMode(CENTER)
     fill("blue")
   rect(0,0,this.width,this.height)
   pop()
}
}