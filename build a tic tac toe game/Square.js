const Square = ({label,i,j,setValue})=>{
    return(
        <div 
            className="bg-gray-700 border-2 border-black w-[100px] h-[100px] relative hover:cursor-pointer hover:scale-[105%] rounded-[5px] " 
            onClick={()=>setValue(i,j)}
            >
            <div className="absolute text-white text-[70px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">{label}</div>
        </div>
    )
}

export default Square;
