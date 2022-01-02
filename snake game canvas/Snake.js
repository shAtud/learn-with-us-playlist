
class Snake{
    constructor(x,y,size = 50){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = 1;
        this.vy = 0;
        this.length = 1;
        this.counter = 0;
        this.body = [];
        this.input()
    }
    collisionDetection(){
        const {x,y,size,body} = this;
        //x
        if(x  >= width) this.x = 0;  
        if(x +size<=0) this.x = width-size;
        //y
        if(y +size > height) this.y = 0;
        if(y+size<=0) this.y = height-size;
        //body
        const head = body[body.length-1];
        for(let i=0;i<body.length-1;i++){
            const b = body[i];
            if(b.x === head.x && b.y === head.y){
                alert('you lose')
                this.body = [{x:0,y:0}]
                this.length = 1;
                this.x = 0;
                this.y = 0;
            }
        }
    }
    update(){
        const {x,y,vx,vy,size,counter,length} = this;
        this.x += vx*size;
        this.y += vy*size;
        this.collisionDetection()

        this.body.push({x,y});
       if(counter>=length) this.body.shift()
       else this.counter++;
      

    }
    eat(food){
        const {x,y} = this;
       
        if(food.x === x && food.y === y){
            food.updatePos();
            this.length++;

        }
        
    }

    draw(ctx){
        const {size} = this;
        this.body.forEach(({x,y},index)=>{

            ctx.beginPath();
           if(index !==this.body.length-1)ctx.fillStyle = 'green';
           else ctx.fillStyle = 'white';
            ctx.fillRect(x,y,size,size)

        })
      
     

    }
    input(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'd'){
                this.vx = 1;
                this.vy = 0;
            }
            if(e.key === 'a'){
                this.vx = -1;
                this.vy = 0;
            }
            if(e.key === 's'){
                this.vy = 1;
                this.vx = 0;
            }
            if(e.key === 'w'){
                this.vy = -1;
                this.vx = 0;
            }

        })
    }

    
}
