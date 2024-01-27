// import React from "react";
// import KakaoLogin from "react-kakao-login";
// import kakao_login_large_narrow from "../assets/img/ko/kakao_login_large_narrow.png";

// const Kakao = () => {
//   const kakaoKey = process.env.REACT_APP_JAVASCRIPT_KEY;
//   const kakaoOnSuccess = async (data) => {
//     console.log(data);
//     const token = data.response.access_token; // 서버에 보낼 token
//     const profile = data.profile.properties.profile_image; // profile url
//     console.log(profile);
//     const nickName = data.profile.properties.nickname; // kakao talk 이름
//     console.log(nickName);
//   };
//   const kakaoOnFailed = (err) => {
//     console.log(err);
//   };
//   return (
//     <>
//       <KakaoLogin
//         token={kakaoKey}
//         onSuccess={kakaoOnSuccess}
//         onFail={kakaoOnFailed}
//       />
//     </>
//   );
// };

// export default Kakao;

import React, { useEffect } from "react";
import kakao_login_large_narrow from "../assets/img/ko/kakao_login_large_narrow.png";

const Kakao = () => {
  const kakaoKey = process.env.REACT_APP_JAVASCRIPT_KEY;
  useEffect(() => {
    const initializeKakaoSDK = async () => {
      try {
        await window.Kakao.init(kakaoKey);
        console.log(window.Kakao.isInitialized()); // SDK 초기화 확인
      } catch (error) {
        console.log(error);
      }
    };

    initializeKakaoSDK(); // 컴포넌트가 렌더링될 때 SDK 초기화
  }, [kakaoKey]);

  return <img src={kakao_login_large_narrow} alt="kakao login" />;
};

export default Kakao;
