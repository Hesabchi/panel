import { Button, Typography } from "antd";
import { useSelector, shallowEqual } from "react-redux";

const { Title } = Typography;

function Login() {
  const walletConnect = useSelector(
    (state) => state.User.walletConnect,
    shallowEqual
  );

  const connect = async () => {
    try {
      const connectResponse = await walletConnect.connect();
      window.alert(connectResponse.data.public);
    } catch (error) {}
  };

  return (
    <div className="login">
      <Title className="login-title">حسابچی</Title>
      <img
        src="./assets/images/login.svg"
        alt="login"
        className="login-image"
      />
      <Button onClick={connect} className="login-btn" type="primary">
        ورود
      </Button>
    </div>
  );
}

export default Login;
