var Rectangle = function(x1,y1,canvas,attente) {
    this.canvas = canvas;
    console.log(canvas);
    this.canvas2dContext = this.canvas.getContext("2d");
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1 + 50;
    this.y2 = y1 + 50;
    this.attente = attente;
    
    this.initialization = function(){
        this.canvas2dContext.strokeRect(this.x1,this.y1,50,50);
        const myVar = setInterval(this.deplace.bind(this),100); 
    }
    
    this.deplace = function(){
        if (this.attente<=0) {
            if (this.x2+10<=this.canvas.width) {
                this.canvas2dContext.clearRect(this.x1-1,this.y1-1,52,52);
                this.x1 = this.x1 + 10;
                this.x2 = this.x2 + 10;
                this.canvas2dContext.strokeRect(this.x1,this.y1,50,50);
    
            }
            else{
                clearInterval(myVar);
            }
            
        }
        else{
            this.attente -= 0.1;
        }
        
    }

}