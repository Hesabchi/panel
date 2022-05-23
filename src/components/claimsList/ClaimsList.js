import moment from "jalali-moment";
import './ClaimsList.scss'
import { shallowEqual, useSelector } from "react-redux";
import { MaskNumber } from "../../utility/MaskNumber";
import {Row, Col, Typography} from 'antd'

const {Text} = Typography

function ClaimsList() {

  const claims = useSelector(state => state.User.claimsList, shallowEqual);
  const irr = useSelector(state => state.User.irr, shallowEqual);

  return (
    <div className="ClaimsList">
      <Row justify="center">
        {claims.map(item=>{
          return(
            <Col xs={24} className="claimsList-item">
                <Row justify="space-between">
                  <Col >
                    <Text className="title">{item.title}</Text>
                  </Col>
                  <Col style={{direction: 'ltr'}}>
                    <Text className="date">{moment(item.created_at).format("jYYYY/jMM/jDD HH:mm:ss")}</Text>
                  </Col>
                </Row>
                <Row justify="space-between" className="price-container">
                  <Col>
                    <Text className="title">مبلغ بدهی: <span className="price">{MaskNumber(item.amount)}</span> <span className="unit">(ریال)</span></Text>
                  </Col>
                  <Col >
                    <Text className="title">  {irr ? MaskNumber(item.amount / irr) : 0} <span className="unit">(پیمان)</span></Text>
                  </Col>
                </Row>
                <Row justify="end" className="account-container">
                  <Col>
                    <Text className="publickey">{item.publickey.substr(0, 8)}*****{item.publickey.substr(-8)}</Text>
                  </Col>
                </Row>
                <div className="waiting-for-pay">در انتظار پرداخت</div>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default ClaimsList;
