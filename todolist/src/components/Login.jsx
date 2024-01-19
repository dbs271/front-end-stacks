import React from "react";

const Login = () => {
  const API_KEY = "c561738484f11476f0419c707c1a6fca";
  const REDIRECT_URI = "http://localhost:3000/auth";

  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default Login;
