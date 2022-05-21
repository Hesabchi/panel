import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../components/inventory/Inventory";
import TabsComponents from "../components/tabsComponent/TabsComponents";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("access_token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="home">
      <div className="home-header">
        <Inventory />
      </div>
      <TabsComponents />
    </div>
  );
}

export default Home;
