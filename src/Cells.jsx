const Cell = ({ value }) => (
  <div style={{ border: "1px solid black", width: "100px", aspectRatio: 1 }}>
    {value}
  </div>
);

const Cells = ({ cells }) => {
  const cellElements = cells.map((value, index) => (
    <Cell value={value} key={index} />
  ));

  return (
    <div
      style={{
        display: "flex",
        width: "310px",
        flexWrap: "wrap",
        textAlign: "center",
        lineHeight: 3.4,
        fontSize: "34px",
        margin: "0 auto",
      }}
    >
      {cellElements}
    </div>
  );
};

export default Cells;
