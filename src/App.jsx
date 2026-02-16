import TicTacToe from "./TicTacToe";

const App = () => {
  const players = [
    { name: "Alice", symbol: "X" },
    { name: "Bob", symbol: "O" },
  ];

  return <TicTacToe players={players} />;
};

export default App;
