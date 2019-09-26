import React from "react";

class Tile extends React.Component {
  state = { value: this.props.value };

  handleChange = ({target}) => {
    const value=parseInt(target.value);
    
    if((value<10 && value>0))
      this.setState({ value })

    if(isNaN(value))
      this.setState({ value: " " })      
  };

  render() {
    return (
      <input
        min='1'
        max='9' 
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Tile;
