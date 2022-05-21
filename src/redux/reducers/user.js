import { SET_WALLET_CONNECT, SET_LOGIN_DATA, SET_ACCOUNT_BALANCE, SET_IRR } from "../actions/types";

const initialState = {
  accessToken: sessionStorage.getItem("access_token") || "",
  publicKey: sessionStorage.getItem("public_key") || "",
  balance: 0,
  irr: 0,
  walletConnect: {},
};

export const User = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WALLET_CONNECT:
      return {
        ...state,
        walletConnect: payload,
      };

    case SET_LOGIN_DATA:
      return {
        ...state,
        accessToken: payload.access_token,
        publicKey: payload.public_key,
      };

    case SET_ACCOUNT_BALANCE:
      return{
        ...state,
        balance: payload
      }

    case SET_IRR:
      return{
        ...state,
        irr: payload
      }

    default:
      return state;
  }
};
