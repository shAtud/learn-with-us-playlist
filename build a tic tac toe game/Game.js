import { useState } from "react";
import Square from "./Square";
const INITIAL_GRID = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
];
const Game = props=>{
    const [grid,setGrid] = useState(INITIAL_GRID)
    const [gameEnd,setGameEnd] = useState(false);
    const [gameWinner,setGameWinner] = useState(null)
    const checkLignes = (newGrid)=>{
        let winner = null;
        for(let i=0;i<3;i++){
            let x,o = 0;
            for(let j=0;j<3;j++){
                if(newGrid[i][j] === 'X' ) x++;
                if(newGrid[i][j] === 'O' ) o++;
            }
            if(x ===3) {
                winner = 'X';
                break;

            }
            else if(o ===3) {
                winner = 'O';
                break;

            }
           
        }
        return winner;

    }
    const checkCulomns = (newGrid)=>{
        let winner = null;
        for(let i=0;i<3;i++){
            let x,o = 0;
            for(let j=0;j<3;j++){
                if(newGrid[j][i] === 'X' ) x++;
                if(newGrid[j][i] === 'O' ) o++;
            }
            if(x ===3) {
                winner = 'X';
                break;

            }
            else if(o ===3) {
                winner = 'O';
                break;

            }
           
        }
        return winner;

    }
    const checkDigonals = (newGrid)=>{
        let x,o = 0;
        let winner = null;
        for(let i=0;i<3;i++){
            if(newGrid[i][i]==='X') x++;
            if(newGrid[i][i]==='O') o++;
        }
        if( x===3) winner = 'X'
        else if (o === 3) winner = 'O';
        if(winner === null){
            for(let i=0;i<3;i++){
                if(newGrid[i][3-i]==='X') x++;
                if(newGrid[i][3-i]==='O') o++;
            }
            if( x===3) winner = 'X'
            else if (o === 3) winner = 'O';
        }

        return winner;
    }

    const setGridTovalue = (i,j)=>{
        if(gameEnd) return;
        const newGrid = [...grid];
        if(grid[i][j]!='-') return;
        newGrid[i][j] = !turn?'X':'O';
        setGrid(newGrid)
        
        setTurn(!turn)
      
        let winner = checkLignes(newGrid);
        if(winner===null) winner = checkCulomns(newGrid);
        if(winner===null) winner = checkDigonals(newGrid);

        if(winner){
            setGameEnd(true)
           
            setGrid(INITIAL_GRID)
            setGameWinner(winner)
            console.log(winner)
               
        }

        
    }
    const [turn,setTurn] = useState(Math.random()>0.5?false:true)
    // false : player1 (x)
    // true :  player2 (o)

    return(
        <>
        {
            gameEnd?(
                <div>{gameWinner==='X'?'player1(X) won the game':'player2(O) won the game'}</div>
            ):(
                <div>{!turn?'player1:(x)':'player2:(o)'}</div>
            )
        }
       
        <div className="bg-gray-500 w-[300px] h-[300px] flex flex-wrap ">
               
                {
                    grid.map(((gLine,i)=>{
                        return(
                            gLine.map((el,j)=>{
                                return(
                                    <Square 
                                        label={el}
                                        i={i}
                                        j={j}
                                        setGridTovalue={setGridTovalue}
                                        
                                    />
                               )
                            })
                        )
                       
                    }))
                }
        </div>
        </>
    )
}
export default Game;
