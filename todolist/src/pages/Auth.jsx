import React from "react";

const Auth = () => {
  const handleMain = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <p>login success</p>
      <button onClick={handleMain}>게임하러 가기</button>
    </div>
  );
};

export default Auth;
