export function kakaoSignIn(code) {
  return new Promise(async (resolve, reject) => {
    await post(`/auth`, code)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
