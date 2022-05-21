import { SET_WALLET_CONNECT } from "../actions/types";

const initialState = {
  accessToken: "",
  pesonalPublicKey: "",
  walletPublicKey: "",
  balance: 0,
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
    default:
      return state;
  }
};
