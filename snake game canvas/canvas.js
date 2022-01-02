var canvas=document.querySelector('canvas');
canvas.width= 500;
canvas.height = 500;

ctx=canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const fps = 3;

const size = 50;
const drawGrid = ()=>{
    const r = Math.floor(width/size);
    const c = Math.floor(height/size);
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            ctx.beginPath();
            ctx.strokeStyle  = 'white';
            ctx.strokeRect(i*size,j*size,size,size);
            ctx.stroke();
        

            
        }
    }
}
const snake = new Snake(2*size,2*size,size);
const food = new Food(5*size,5*size,50);
console.log(snake)
function animate()
{
    ctx.clearRect(0,0,width,height)
    drawGrid();
    food.draw(ctx);
    snake.update();
    snake.eat(food)
    snake.draw(ctx);

   
    setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / fps);
    
}
animate();
