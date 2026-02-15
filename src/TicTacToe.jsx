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
      cells: ["X", "", "", "X", "", "O", "", "", "O"],
    };
  }

  render() {
    return (
      <div>
        <Players players={this.state.players} />
        <Cells cells={this.state.cells} />
      </div>
    );
  }
}

export default TicTacToe;
