import { Button, Typography } from "antd";
import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { getChallengeService, loginService } from "../../services/authServices";
import { HandleErrors } from "../../utility/HandleErrors";
import { useDispatch } from "react-redux";
import { SET_LOGIN_DATA } from "../../redux/actions/types";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const walletConnect = useSelector(
    (state) => state.User.walletConnect,
    shallowEqual
  );

  const connect = async () => {
    setLoading(true);
    try {
      const connectResponse = await walletConnect.connect();
      const challengeResponse = await getChallengeService(
        connectResponse.data.public
      );

      const signatureResponse = await walletConnect.signData(
        challengeResponse.data.challenge
      );
      if (signatureResponse.status === "reject") {
        throw new Error(signatureResponse.message);
      }

      const loginResponse = await loginService(
        connectResponse.data.public,
        signatureResponse.data.signature
      );

      sessionStorage.setItem("access_token", loginResponse.data.access_token);
      sessionStorage.setItem("public_key", connectResponse.data.public);

      dispatch({
        type: SET_LOGIN_DATA,
        payload: {
          access_token: loginResponse.data.access_token,
          public_key: connectResponse.data.public,
        },
      });

      navigate("/");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      HandleErrors(error);
    }
  };

  return (
    <div className="login">
      <Title className="login-title">حسابچی</Title>
      <img
        src="./assets/images/login.svg"
        alt="login"
        className="login-image"
      />
      <Button
        loading={loading}
        onClick={connect}
        className="login-btn"
        type="primary"
      >
        ورود
      </Button>
    </div>
  );
}

export default Login;
