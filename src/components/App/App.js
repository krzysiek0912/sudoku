import React from 'react';
import './App.css';

import Board from '../Board/Board'

class App extends React.Component {
  state = {
    initialBoard: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591....43768192',
    board: ''
  }
  render() {
    return (
      <div className="App">
        <h1>Sudoku</h1>
        {/* {this.state.initialBoard} */}
        <Board initialBoard={this.state.initialBoard}/>
        <div className="buttons">
            <button>Check</button>
            <button>New Game</button>
            <button>Solve</button>
            <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
