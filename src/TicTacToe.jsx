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
      cells: ["", "", "", "", "", "", "", "", ""],
      isGameOver: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.isPlayerWon = this.isPlayerWon.bind(this);
  }

  getCurrentPlayerSymbol() {
    return this.state.players[this.state.currentPlayerIndex].symbol;
  }

  handleClick(cellIndex) {
    this.setState((state) => {
      const cells = [...state.cells];

      const symbol = this.getCurrentPlayerSymbol();
      cells[cellIndex] = symbol;
      const currentPlayerIndex = 1 - state.currentPlayerIndex;
      const isGameOver = this.isPlayerWon(cells, symbol);

      return { cells, currentPlayerIndex, isGameOver };
    });
  }

  checkPossibility(possibilities, cells, symbol) {
    return possibilities.some((possibility) =>
      possibility.every((index) => cells[index] === symbol),
    );
  }

  isPlayerWon(cells, playerSymbol) {
    const horizontal = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    const vertical = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    const cross = [
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winningPossibilities = [horizontal, vertical, cross];

    return winningPossibilities.some((possibilities) =>
      this.checkPossibility(possibilities, cells, playerSymbol),
    );
  }

  render() {
    return this.state.isGameOver ? (
      alert("Game is over")
    ) : (
      <div>
        <Players players={this.state.players} />
        <Cells cells={this.state.cells} onClick={this.handleClick} />
      </div>
    );
  }
}

export default TicTacToe;
