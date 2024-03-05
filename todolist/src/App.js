import {
  Body,
  Cells,
  Celly,
  Months,
  Monthy,
  TimeLine,
  Weeks,
  Weeky,
} from "./styles/styled";
import moment from "https://cdn.skypack.dev/moment";

const DayNames = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

function Cell({ startDate, index }) {
  let date = moment(startDate).add(index, "days");

  return <Celly className="timeline-cells-cell"> {date.format("D")} </Celly>;
}

function Month() {
  return <Monthy className="timeline-months-month">M</Monthy>;
}

function Week({ index }) {
  return <Weeky className="timeline-weeks-week">{DayNames[index]}</Weeky>;
}

function Timeline({ range }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weeks = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));

  return (
    <TimeLine className="timeline">
      <Months className="timeline-months">
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={range[0]} />
        ))}
      </Months>
      <Body className="timeline-body">
        <Weeks className="timeline-weeks">
          {weeks.map((_, index) => (
            <Week key={index} index={index} startDate={range[0]} />
          ))}
        </Weeks>
        <Cells className="timeline-cells">
          {cells.map((_, index) => (
            <Cell key={index} index={index} startDate={range[0]} />
          ))}
        </Cells>
      </Body>
    </TimeLine>
  );
}
function App() {
  let dateRange = [moment().add(-365, "days"), moment()];

  console.log(dateRange.toString());
  return <Timeline range={dateRange} />;
}

export default App;
