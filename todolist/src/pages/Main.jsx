import React from "react";
import ChartExample from "../components/Chart";
import Kakao from "../components/Kakao";
import Login from "../components/Login";

const Main = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Login />
        {/* <Kakao /> */}
      </div>
      <div>
        <ChartExample />
      </div>
    </div>
  );
};

export default Main;
