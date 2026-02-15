const Player = ({ name, symbol }) => (
  <p>
    {name}: {symbol}
  </p>
);

const Players = ({ players: [player1, player2] }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Player name={player1.name} symbol={player1.symbol} key={player1.name} />
    <Player name={player2.name} symbol={player2.symbol} key={player2.name} />
  </div>
);
export default Players;
