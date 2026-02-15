import React from "react";
import Players from "./Players";
import Cells from "./Cells";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: "Alice", symbol: "X" },
        { name: "Bob", symbol: "O" },
      ],
      currentPlayerIndex: 0,
      cells: ["X", "", "", "X", "", "O", "", "", "O"],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getCurrentPlayerSymbol() {
    return this.state.players[this.state.currentPlayerIndex].symbol;
  }

  handleClick(cellIndex) {
    this.setState((state) => {
      const cells = [...state.cells];

      cells[cellIndex] = this.getCurrentPlayerSymbol();
      const currentPlayerIndex = 1 - state.currentPlayerIndex;

      return { cells, currentPlayerIndex };
    });
  }

  render() {
    return (
      <div>
        <Players players={this.state.players} />
        <Cells cells={this.state.cells} onClick={this.handleClick} />
      </div>
    );
  }
}

export default TicTacToe;
