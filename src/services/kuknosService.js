import { KuknosApi } from "./API";

export const getAssetsService = () => {
  return new Promise((resolve, reject) => {
    KuknosApi.get("/microservice/asset/directory")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getKuknosAddressService = (kuknosAddress)=>{
  return new Promise((resolve, reject) => {
    KuknosApi.get("/api/directory/federation",{
      params:{
        type: 'name',
        q: kuknosAddress
      }
    })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
