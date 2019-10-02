import React from 'react';
import Tile from '../Tile/Tile'
import './Board.css'
class Board extends React.Component { 
  
  render() {
    
    const board=this.props.board.split('');
    
    const Tiles=  board.map(
            (value,index) =>
                (<Tile 
                  
                  initialBoard={this.props.initialBoard}
                  board={this.props.board}              
                  key={index} 
                  index={index} 
                  value={value} 
                  changeBoard={this.props.changeBoard}
                 />
                )
            
          )
      
    return (
        <div className="board"> 
            {Tiles}        
        </div>
    );
  }
}

export default Board;