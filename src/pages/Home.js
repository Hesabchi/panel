import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../components/inventory/Inventory";
import TabsComponents from "../components/tabsComponent/TabsComponents";
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { getAccountBalance } from "../redux/actions/userAction";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const publicKey = useSelector(state => state.User.publicKey, shallowEqual);
  const accessToken = useSelector(state => state.User.accessToken, shallowEqual);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);


  useEffect(()=>{
    if(publicKey){
      dispatch(getAccountBalance(publicKey))
    }
  },[publicKey])


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
