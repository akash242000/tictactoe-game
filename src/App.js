import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import { useState } from 'react';

let drawCount;

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying]= useState(true);

  //WINNER CHECK
  function checkWinner(squares){
    const winnerCode= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i=0; i<winnerCode.length; i++){
      const[a, b, c]=winnerCode[i];
      

      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a];
      }else{    
      }
    }
    return null;
  }

  const winner= checkWinner(squares);
  let status;
  if(winner){
    status=true;
  }else{
    status=false;
  }

  
//ONCLIK CHECK
  function handleClick(i){

    if(squares[i]|| checkWinner(squares) ){  
      return;
    }
    drawCheck(squares);
    const nextSquares= squares.slice();
    if(xPlaying){
      nextSquares[i]="✖";
      setxPlaying(false);
    }
    else{
      nextSquares[i]="◎";
      setxPlaying(true);
    }

    setSquares(nextSquares);
  }


  //DRAW CHECK
  function drawCheck(squares){
    let count=0;
    for(let i=0; i<squares.length; i++){
      if(squares[i]==null){
        count++;
      }
    }
    drawCount=count;
  }


  //RESTART
  function restartGame(){
    setSquares(Array(9).fill(null));
    status=false;
    drawCount=9;
  }



  return (
    <div className="App">
      <div className="header">
      {status==false && drawCount!=1 &&
      
          <h1>Now Playing:{xPlaying? <span> X</span> : <span> Y</span> }</h1>
      }
      </div>
    

      <div className="main">
       {status==true?
            <div className='win-screen'>
              <h1>{winner} Won</h1>
            </div>
          :status==false && drawCount==1?
            <div className='win-screen'>
              <h1>Match Draw</h1>
            </div>
          :
          <div className="box">
            <Square handleClick={()=>{handleClick(0)}} value={squares[0]} />
            <Square handleClick={()=>{handleClick(1)}} value={squares[1]} />
            <Square handleClick={()=>{handleClick(2)}} value={squares[2]} />
            <Square handleClick={()=>{handleClick(3)}} value={squares[3]} />
            <Square handleClick={()=>{handleClick(4)}} value={squares[4]} />
            <Square handleClick={()=>{handleClick(5)}} value={squares[5]} />
            <Square handleClick={()=>{handleClick(6)}} value={squares[6]} />
            <Square handleClick={()=>{handleClick(7)}} value={squares[7]} />
            <Square handleClick={()=>{handleClick(8)}} value={squares[8]} />
          </div>
       }  
      </div>

      <div className="restart">
        <button onClick={restartGame}>Restart Game</button>
      </div>

    </div>
  );
}

export default App;
