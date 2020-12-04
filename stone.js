class Stone
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,	
            density:1
			}
		
		this.r=r
		//this.h=h
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);
         this.image = loadImage("stone.png")

        }
        display()
        {
                
                var pos=this.body.position;		
    push();
    translate(pos.x,pos.y)
     
                
                imageMode(RADIUS)
            
                image(this.image,0,0,this.r*2, this.r*2);
                pop();
    
            
                
        }
    }