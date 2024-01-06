import React from "react";

import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
  datasets: [
    {
      label: "chart name",
      data: [
        { x: 1, y: 61 },
        { x: 2, y: 55 },
        { x: 3, y: 24 },
        { x: 4, y: 77 },
        { x: 5, y: 15 },
        { x: 6, y: 78 },
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)", // 빨강
        "rgba(54, 162, 235, 0.6)", // 파랑
        "rgba(255, 206, 86, 0.6)", // 노랑
        "rgba(75, 192, 192, 0.6)", // 초록
        "rgba(153, 102, 255, 0.6)", // 보라
        "rgba(255, 159, 64, 0.6)", // 주황
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const ChartExample = () => {
  return (
    <div>
      <h2>React Chart</h2>
      <Bubble data={data} />
    </div>
  );
};

export default ChartExample;
