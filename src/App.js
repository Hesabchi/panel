import Home from "./pages/Home";
import "antd/dist/antd.variable.min.css";
import "./theme/variables.scss";
import "./theme/antd.scss";
import "./styles.scss";
import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import { Client as KuknosWallet } from "@kuknos/wallet-connect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_WALLET_CONNECT } from "./redux/actions/types";

const style = getComputedStyle(document.body);
ConfigProvider.config({
  theme: {
    primaryColor: style.getPropertyValue("--primary-color"),
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initWallet();
  }, []);

  const initWallet = () => {
    const wallet = new KuknosWallet({});
    dispatch({
      type: SET_WALLET_CONNECT,
      payload: wallet,
    });
  };

  return (
    <ConfigProvider direction="rtl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
