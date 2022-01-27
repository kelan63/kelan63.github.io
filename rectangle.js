var Rectangle = function(x1,y1,canvas,color) {
    this.canvas = canvas;
    console.log(canvas);
    this.canvas2dContext = this.canvas.getContext("2d");
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1 + 50;
    this.y2 = y1 + 50;
    this.color = color;
    this.randx = Math.floor(Math.random()*11);
    this.randy = Math.floor(Math.random()*11);
    
    this.initialization = function(){
        this.canvas2dContext.fillStyle= color;
        console.log("x1 = "+x1);
        console.log("y1 = "+y1);
        this.canvas2dContext.fillRect(x1,y1,50,50);
        setInterval(this.deplace,10); 
    }
    
    this.deplace = function(){
        this.canvas2dContext.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.x1 = this.x1 + this.randx;
        this.x2 = this.x2 + this.randx;
        this.y1 = this.y1 + this.randy;
        this.y2 = this.y2 + this.randy;
        this.canvas2dContext.fillStyle = this.color;
        this.canvas2dContext.fillRect(this.x1,this.y1,50,50);

        if (this.x2>=this.canvas.width || this.x1<=0) {
            this.randx = -this.randx;
        }
        if (this.y2>=this.canvas.height || this.y1<=0) {
            this.randy = -this.randy;
        }
    }

}