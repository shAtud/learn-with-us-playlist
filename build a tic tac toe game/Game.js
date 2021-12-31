import { useState } from "react"
import Square from "./Square"
const INITIAL_GRID = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-'],
]

const Game = props=>{
    const [grid,setGrid] = useState(INITIAL_GRID);
    const [turn,setTurn] = useState(Math.random()>0.5?false:true);
    const [gameEnd,setGameEnd] = useState(false);
    const [gameWinner,setGameWinner] = useState(null);

    /*
            turn = false => player1 (O)
            turn = true  => player2 (X)
    */
    const checkLignes = (newGrid)=>{
                
                for(let i=0;i<3;i++){
                    let o = 0;
                    let x = 0;
                    for(let j=0;j<3;j++){
                        if(newGrid[i][j] === 'X') x++
                        if(newGrid[i][j] === 'O') o++;
                    }
                   
                    if(x === 3){
                       return 'X';
                    }
                    else if( o === 3){
                        return 'O';
                    }
                   
                }
               
                return null;
         }
    const checkCulumns = (newGrid)=>{
                
                for(let i=0;i<3;i++){
                    let x = 0;
                    let o = 0;
                    for(let j=0;j<3;j++){
                        if(newGrid[j][i] === 'X') x++
                        if(newGrid[j][i] === 'O') o++;
                    }
                    if(x === 3){
                       return 'X';
                    }
                    else if( o === 3){
                        return 'O';
                    }
                }
                return null;
            }
    const checkDiagonals = (newGrid)=>{
                //first diagonal
                let x = 0;
                let o = 0;
                for(let i=0;i<3;i++){
                    if(newGrid[i][i] === 'X') x++
                    if( newGrid[i][i] === 'O') o++;
                }
                if( x === 3 ) return 'X'
                else if( o === 3 ) return 'O';
                //second diagonal
                x = 0;
                o = 0;
                for(let i=0;i<3;i++){
                    if(newGrid[i][2-i] === 'X') x++
                    if( newGrid[i][2-i] === 'O') o++;
                }
                if( x === 3 ) return 'X'
                else if( o === 3 ) return 'O';
        
                return null;
            }
    const setValue = (i,j) =>{
        
        const newGrid = [...grid];
        if(newGrid[i][j]!='-' ) return;
        newGrid[i][j] = !turn?'O':'X';
        setGrid(newGrid)
        setTurn(!turn)
        /*
         *****************who is the winner ?*****************
        */
        let winner = null;
        winner = checkLignes(newGrid);
        console.log(checkLignes(newGrid),checkCulumns(newGrid),checkDiagonals(newGrid))
        if(winner === null) winner = checkCulumns(newGrid);
        if(winner === null) winner = checkDiagonals(newGrid);
        
        if(winner){
            setGameEnd(true);
            setGameWinner(winner)

          
         
         
       
          
         
           
           
            
           

        }


    }
   
    return(
        <>
        {
            gameEnd?(
                <div>
                    the {gameWinner==='O'?'player2 (O)':'player1 (x)'} won the game
                </div>
            ):(
                <div>{!turn?"player1 (O) :":"player2 (X)"}</div>
            )
        }
       
        <div className="w-[300px] h-[300px] bg-gray-500 flex flex-wrap">
            
            {
                grid.map((gLine,i)=>{
                    return(
                        gLine.map((el,j)=>{
                           return(
                            <Square
                                label = {el}
                                i={i}
                                j={j}
                                setValue={setValue}
                            />
                           )
                        })
                    )
                })
            }
        </div>
    </>
    )
}

export default Game;
