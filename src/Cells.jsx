const Cell = ({ value, onClick, cellIndex }) => (
  <div
    style={{ border: "1px solid black", width: "100px", aspectRatio: 1 }}
    onClick={onClick ? () => onClick(cellIndex) : null}
  >
    {value}
  </div>
);

const Cells = ({ cells, onClick, isGameOver }) => {
  const cellElements = cells.map((value, index) => (
    <Cell
      value={value}
      key={index}
      cellIndex={index}
      onClick={value != "" || isGameOver ? null : onClick}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        width: "310px",
        flexWrap: "wrap",
        textAlign: "center",
        lineHeight: 3.4,
        fontSize: "28px",
        margin: "0 auto",
      }}
    >
      {cellElements}
    </div>
  );
};

export default Cells;
