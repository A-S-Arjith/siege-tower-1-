class Box extends BaseClass {
constructor(x,y,width,height) {
  isStatic: false,
  super(x,y,width,height);
}
display(){
  
  var pos =this.body.position;
  rectMode(CENTER);
  fill("purple");
  rect(pos.x, pos.y, this.width, this.height);
}
};