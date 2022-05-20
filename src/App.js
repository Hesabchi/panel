import Home from "./pages/Home";
import "antd/dist/antd.min.css";
import "./theme/variables.scss";
import "./theme/antd.scss";

import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider direction="rtl" >
      <Home />
    </ConfigProvider>
  );
}

export default App;
