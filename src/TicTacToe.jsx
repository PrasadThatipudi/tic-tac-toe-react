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

  groupOf(array, limit) {
    const arrayCopy = array.slice();
    const arrayGroups = [];

    while (arrayCopy[0] !== undefined) {
      arrayGroups.push(arrayCopy.splice(0, limit));
    }

    return arrayGroups;
  }

  horizontal(cells, symbol) {
    return this.groupOf(cells, 3).some((row) =>
      row.every((value) => value === symbol),
    );
  }

  vertical(cells, symbol) {
    const groups = [[], [], []];
    cells.forEach((cellValue, index) => {
      groups[index % 3].push(cellValue);
    });

    return groups.some((row) => row.every((value) => value === symbol));
  }

  cross(cells, symbol) {
    const possibilities = [
      [0, 4, 8],
      [2, 4, 6],
    ];

    return possibilities.some((possibility) =>
      possibility.every((index) => cells[index] === symbol),
    );
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
