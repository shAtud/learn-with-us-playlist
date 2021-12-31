const Square = ({label,i,j,setGridTovalue})=>{
    
  
    return(
<div 
    className="bg-gray-700 w-[100px] h-[100px] border-2 border-black  text-[70px] relative text-white hover:cursor-pointer hover:scale-[105%] rounded-[5px]"
    onClick={()=>setGridTovalue(i,j)}
>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">{label}</div>
 </div>
    )
}
export default Square;
