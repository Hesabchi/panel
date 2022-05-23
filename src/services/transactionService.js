import { backendApi } from "./API";

export const addCost = (data) => {
  return new Promise((resolve, reject) => {
    backendApi
      .post("/transactions", data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getClaimsList = (data) => {
  return new Promise((resolve, reject) => {
    backendApi
      .get("/transactions/claims")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getDeptsList = (data) => {
  return new Promise((resolve, reject) => {
    backendApi
      .get("/transactions/depts")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const submitpaymentService = (hash) => {
  return new Promise((resolve, reject) => {
    backendApi
      .post("/transactions/payment" , {hash})
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};