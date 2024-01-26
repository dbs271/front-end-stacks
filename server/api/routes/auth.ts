import { Router } from "express";
import * as console from "console";
import axios from "axios";

interface Data {
  grant_type: string;
  client_id: string;
  code: string;
  [key: string]: string;
}
export default (router: Router) => {
  router.use("/auth", router);

  router.post("/kakao", async (req, res, next) => {
    const { code } = req.body; // 프런트에서 인가코드 body에 담아서 보낸거 받기

    const restApiKey = "123"; // 앱키 - Rest API key

    const data: Data = {
      grant_type: "authorization_code",
      client_id: restApiKey,
      code,
    };
    // 헤더 설정
    const header = {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: "Bearer ",
    };

    // grant_type=authorization_code&client_id=your_client_id&code=authorization_code_here
    // 위에 처럼 문자열 형태로 구성하기 위해
    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

    const kakaoToken = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      queryString,
      { headers: header }
    );
    console.log(kakaoToken);
  });
};
