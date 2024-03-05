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

function Cell({ date, value }) {
  let style = {
    backgroundColor: `rgba(3, 160, 3, ${value})`,
  };
  return (
    <Celly className="timeline-cells-cell" style={style}>
      {" "}
    </Celly>
  );
}

function Month({ startDate, index }) {
  let date = moment(startDate).add(index * 7, "days");
  let monthName = date.format("MMM");
  return (
    <Monthy className={`timeline-months-month ${monthName}`}>
      {monthName}
    </Monthy>
  );
}

function Week({ index }) {
  return <Weeky className="timeline-weeks-week">{DayNames[index]}</Weeky>;
}

function Timeline({ range, data }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weeks = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));

  let min = Math.min(0, ...data.map((d) => d.value));
  let max = Math.max(...data.map((d) => d.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  let DayFormat = "DDMMYYYY";

  return (
    <TimeLine className="timeline">
      <Months className="timeline-months">
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </Months>
      <Body className="timeline-body">
        <Weeks className="timeline-weeks">
          {weeks.map((_, index) => (
            <Week key={index} index={index} startDate={startDate} />
          ))}
        </Weeks>
        <Cells className="timeline-cells">
          {cells.map((_, index) => {
            let date = moment(startDate).add(index, "days");
            let dataPoint = data.find(
              (d) =>
                moment(date).format(DayFormat) ===
                moment(d.date).format(DayFormat)
            );
            let value = colorMultiplier * dataPoint.value;
            return (
              <Cell
                key={index}
                index={index}
                startDate={range[0]}
                value={value}
              />
            );
          })}
        </Cells>
      </Body>
    </TimeLine>
  );
}
function App() {
  let startDate = moment().add(-365, "days");
  let dateRange = [startDate, moment()];
  let data = Array.from(new Array(365)).map((_, index) => {
    return {
      date: moment(startDate).add(index, "day"),
      value: Math.floor(Math.random() * 100),
    };
  });

  return <Timeline range={dateRange} data={data} />;
}

export default App;
