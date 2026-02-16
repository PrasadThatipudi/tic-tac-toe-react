import React from "react";
import Players from "./Players";
import Cells from "./Cells";
import GameOverPopUp from "./GameOverPopUp";
import RestartButton from "./RestartButton";

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
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.setState({ cells: Array(9).fill(""), isGameOver: false });
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
    return (
      <div>
        <Players players={this.state.players} />
        <Cells
          cells={this.state.cells}
          onClick={this.handleClick}
          isGameOver={this.state.isGameOver}
        />
        {this.state.isGameOver ? (
          <div>
            <GameOverPopUp />
            <RestartButton onClick={this.resetGame} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default TicTacToe;
