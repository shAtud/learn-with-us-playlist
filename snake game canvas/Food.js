class Food {
    constructor(x,y,size = 50){
        this.x = x;
        this.y = y;
        this.size = size;
     
    }
    updatePos(){
        const {size} = this;
        const i = Math.floor(Math.random()*Math.floor(width/size));
        const j = Math.floor(Math.random()*Math.floor(height/size));
        this.x = i*size;
        this.y = j*size;

    }
    draw(ctx){
        const {size,x,y} = this;
      

            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.fillRect(x,y,size,size)
   
}

}
