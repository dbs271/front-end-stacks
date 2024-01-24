import React, { useEffect, useState } from "react";
import AWS from "aws-sdk";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [myBucket, setMyBucket] = useState(null);
  const [image, setImage] = useState(null);

  // 최초로 실행할 때 딱 1번만 호출: aws 암호키 장착 => s3로 파일을 날릴 수 있음. (이 키는 노출되기 때문에 웬만하면 프론트에서 이렇게 하진 않는다.)
  useEffect(() => {
    // 1. aws 키 설정
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    });

    // 2. aws s3 객체 생성
    const myBucket = new AWS.S3({
      params: { Bucket: "test12347778799988899" },
      region: "ap-northeast-2", // 서울에서 생성
    });

    setMyBucket(myBucket);
  }, []);

  // 1. 이미지 파일 가져오기
  const handleFileInput = (e) => {
    console.log("e: ", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  // 2. 이미지 파일 s3로 전송
  const uploadFile = (file) => {
    // a. aws가 시킨 양식을 따라야 함
    const param = {
      ACL: "public-read",
      ContentType: "image/png",
      Body: file,
      Bucket: "test12347778799988899",
      Key: "upload/" + file.name, // 보통은 file.name이라고 하면 파일명이 중복되어 덮어씌워지므로, uuid + 파일명 형태로 저장한 뒤 db에 저장함
    };

    // b. aws에 보내기?
    myBucket.putObject(param).send((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const url = myBucket.getSignedUrl("getObject", { Key: param.Key });
        console.log("url: ", url);
        setImage(url);
      }
    });
  };
  return (
    <div>
      <input type="file" onChange={handleFileInput} />

      <button onClick={() => uploadFile(selectedFile)}>S3로 파일 전송</button>
      <img src={image} alt="image" />
    </div>
  );
}

export default App;
