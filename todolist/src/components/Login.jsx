import React from "react";
import kakao_login_large_narrow from "../assets/img/ko/kakao_login_large_narrow.png";

const Login = () => {
  const API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  return (
    <>
      <button
        onClick={handleLogin}
        style={{ border: 0, backgroundColor: "transparent" }}
      >
        <img src={kakao_login_large_narrow} alt="kakao login" />
      </button>
    </>
  );
};

export default Login;
