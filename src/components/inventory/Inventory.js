import { Typography } from "antd";
import { MaskNumber } from "../../utility/MaskNumber";
const { Text } = Typography;
function Inventory() {
  return (
    <div className="inventory">
      <Text className="inventory-price">
        <span className="inventory-amount">(2 عدد)</span>
        {MaskNumber(117000)}
        <i className="las la-sync refresh-icon"></i>
      </Text>
      <Text className="inventory-title">میزان ریالی توکن پیمان</Text>
    </div>
  );
}

export default Inventory;
