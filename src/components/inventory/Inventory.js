import { Typography } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { MaskNumber } from "../../utility/MaskNumber";
const { Text } = Typography;

function Inventory() {

  const balance = useSelector(state => state.User.balance, shallowEqual);
  const irr = useSelector(state => state.User.irr, shallowEqual)



  return (
    <div className="inventory">
      <Text className="inventory-price">
        <span className="inventory-amount">({MaskNumber(balance)} عدد)</span>
        {MaskNumber((balance * irr).toFixed(0))}
        <span className="inventory-amount">(ریال)</span>
        {/* <i className="las la-sync refresh-icon"></i> */}
      </Text>
      <Text className="inventory-title">میزان ریالی توکن پیمان</Text>
    </div>
  );
}

export default Inventory;
