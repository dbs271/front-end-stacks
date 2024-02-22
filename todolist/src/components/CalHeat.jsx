import React from "react";
import CalHeatmap from "cal-heatmap";

// Optionally import the CSS
import "cal-heatmap/cal-heatmap.css";

const CalHeat = () => {
  const cal = new CalHeatmap();
  cal.paint({});
  return <div id="cal-heatmap"></div>;
};

export default CalHeat;
