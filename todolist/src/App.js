import { Cells, Celly, TimeLine } from "./styles/styled";

function Cell() {
  return <Celly className="timeline-cell"></Celly>;
}

function Months() {}

function Timeline({ days }) {
  let cells = Array.from(new Array(days));

  return (
    <div className="timeline">
      <div className="timeline-months"></div>
      <Celly className="timeline-cell-wrapper">
        {cells.map((_, index) => (
          <Cell key={index} />
        ))}
      </Celly>
    </div>
  );
}

function App() {
  let days = 365;
  return <Timeline days={days} />;
}

export default App;
