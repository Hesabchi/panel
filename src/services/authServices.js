import { BackendApi } from "./API";

export const getChallengeService = (publicKey) => {
  return new Promise((resolve, reject) => {
    BackendApi.post("/user/challenge", { public_key: publicKey })
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const loginService = (publicKey, signature) => {
  return new Promise((resolve, reject) => {
    BackendApi.post("/user/login", { public_key: publicKey, signature })
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
