class Rubber{
    constructor(x,y,r)
    {
        var options={
            restitution:0.3,
            density:1,
            frictions:5
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y(this.r-20)/2,options)
        World.add(world,this.body);

    }
    display()
    {
        var rubberpos=this.body.posititon;
        push();
        translate(rubberpos.x,rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        ellipse(o,o,this.r,this.r);
        pop()
    }
}