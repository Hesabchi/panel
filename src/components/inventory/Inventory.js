import { Typography, Row, Col } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { MaskNumber } from "../../utility/MaskNumber";
import './Inventory.scss'


const { Text } = Typography;

function Inventory() {

  const balance = useSelector(state => state.User.balance, shallowEqual);
  const irr = useSelector(state => state.User.irr, shallowEqual)



  return (
    <div className="Inventory">
      <Row justify="space-between" align="center">
        <Col className="title-box">
          <Text className="title">دارایی پیمان</Text>
          <Text className="token-amount"> ({MaskNumber(balance)})</Text>
        </Col>
        <Col className="price-box">
          <Text className="price">
            {MaskNumber((balance * irr).toFixed(0))}
          </Text>
          <Text className="unit">(ریال)</Text>
        </Col>
      </Row>
      
    </div>
  );
}

export default Inventory;
