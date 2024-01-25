import React from "react";
import KakaoLogin from "react-kakao-login";

const Kakao = () => {
  const kakaoKey = process.env.REACT_APP_JAVASCRIPT_KEY;
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const token = data.response.access_token; //
  };
  const kakaoOnFailed = (err) => {
    console.log(err);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoKey}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailed}
      />
    </>
  );
};

export default Kakao;
