import React from 'react';
import './App.css';
import sudoku from 'sudoku-umd';

import Board from '../Board/Board'

class App extends React.Component {
  state = {
    level:"easy",
    initialBoard: "",
    board: '',
    solved:null
  }

  componentDidMount() {
    const initialBoard= sudoku.generate(this.state.level);
    this.setState({
      initialBoard,
      board: initialBoard
    });
  }
  handleChangeBoard=(key,value)=>{
    const boardArray=this.state.board.split('');
    let newBoard;
    if(value!==""){
      newBoard=boardArray.map(
        (curentValue,index)=>{
          if(parseInt(index)===parseInt(key)){
            if(isNaN(value))
              return "."              
            return value;            
          }else{
            return curentValue;
          }
        })
    }
    const board=newBoard.join("")
    this.setState({ board }) 
  }

  handleCheck=()=>{
    let solved=(sudoku.solve(this.state.board) ? true : sudoku.solve(this.state.board) );    
    this.setState({
      solved
    });
  }

  handleSolve=()=>{
    this.setState({
      board: sudoku.solve(this.state.initialBoard)
    });
  }

  handleNewGame=()=>{
    const initialBoard= sudoku.generate(this.state.level);
    this.setState({
      initialBoard,
      board: initialBoard
    });
  }

  handleRestart=()=>{
    
    this.setState({
      board: this.state.initialBoard,
      solved:null
    });
  }
  

  render() {
    const {state, 
      handleCheck, 
      handleNewGame,
      handleSolve,
      handleRestart,
      handleChangeBoard } = this
    const {initialBoard,board,solved} = state; 
    
    return (
      <div className="App">
        <h1>Sudoku</h1>
        <Board 
        board={board} 
        initialBoard={initialBoard} 
        changeBoard={handleChangeBoard}
        />
        <div className="buttons">
            <button onClick={handleCheck}>Check</button>
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleSolve}>Solve</button>
            <button onClick={handleRestart}>Restart</button>
        </div>
        <div className="info">
          { (solved!==null)&&
              (
                (!solved && "Incorrectly") 
                ||
                (solved && "Correct")
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
