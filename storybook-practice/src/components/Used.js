import React from "react";

import Input from "./Input";
import Button from "./ui/Button";

const Used = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant={"primary"}
        size={"small"}
        fontSize={"18px"}
        label={"회원가입"}
      />
    </div>
  );
};

export default Used;
