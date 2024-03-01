import { Body, Cells, Celly, TimeLine, Weeks, Weeky } from "./styles/styled";

const DayNames = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

function Cell() {
  return <Celly className="timeline-cells-cell"></Celly>;
}

function Week({ index }) {
  return <Weeky className="timeline-weeks-week">{DayNames[index]}</Weeky>;
}

function Timeline({ days }) {
  let cells = Array.from(new Array(days));
  let weeks = Array.from(new Array(7));

  return (
    <TimeLine className="timeline">
      <div className="timeline-months"></div>
      <Body className="timeline-body">
        <Weeks className="timeline-weeks">
          {weeks.map((_, index) => (
            <Week key={index} index={index} />
          ))}
        </Weeks>
        <Cells className="timeline-cells">
          {cells.map((_, index) => (
            <Cell key={index} />
          ))}
        </Cells>
      </Body>
    </TimeLine>
  );
}
function App() {
  let days = 365;
  return <Timeline days={days} />;
}

export default App;
