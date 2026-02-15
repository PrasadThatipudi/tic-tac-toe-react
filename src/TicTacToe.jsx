import React from "react";
import Players from "./Players";
import Cells from "./Cells";

const debug = (arg) => console.log(arg) || arg;

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

  horizontal(cells, symbol) {
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    return this.checkPossibility(possibilities, cells, symbol);
  }

  vertical(cells, symbol) {
    const possibilities = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    return this.checkPossibility(possibilities, cells, symbol);
  }

  cross(cells, symbol) {
    const possibilities = [
      [0, 4, 8],
      [2, 4, 6],
    ];

    return this.checkPossibility(possibilities, cells, symbol);
  }

  isPlayerWon(cells, playerSymbol) {
    return (
      this.horizontal(cells, playerSymbol) ||
      this.vertical(cells, playerSymbol) ||
      this.cross(cells, playerSymbol)
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
