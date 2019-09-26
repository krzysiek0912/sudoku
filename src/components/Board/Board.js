import React from 'react';
import Tile from '../Tile/Tile'
import './Board.css'
class Board extends React.Component { 

  render() {

    const initialBoard=this.props.initialBoard.split('');
    const Tiles=  initialBoard.map(
            (value,index) => <Tile key={index} value={value}/>
          )
      
    return (
        <div className="board"> 
            {Tiles}        
        </div>
    );
  }
}

export default Board;