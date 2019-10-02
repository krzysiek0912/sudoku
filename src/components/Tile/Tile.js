import React from "react";

class Tile extends React.Component {
 

  handleChange = ({target}) => {
    
    const value=parseInt((target.value + '').charAt(0));      
    this.props.changeBoard(this.props.index, value)        
  };

  render() {
   const initialBoard=this.props.initialBoard.split('');
    return (
      <input
        disabled={(initialBoard[this.props.index]!=='.') && 'disabled'}
        min='1'
        max='9' 
        type="number"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Tile;
