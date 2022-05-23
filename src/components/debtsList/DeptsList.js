import moment from "jalali-moment";
import './DeptsList.scss'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { MaskNumber } from "../../utility/MaskNumber";
import {Row, Col, Typography, Button} from 'antd'
import * as KuknosSDK from 'stellar-sdk'
import {HandleErrors} from './../../utility/HandleErrors'
import { getAccountService } from "../../services/horizonSerivce";
import { useState } from "react";
import { submitpaymentService } from "../../services/transactionService";
import {getListsData} from './../../redux/actions/userAction'

const {Text} = Typography

function DeptsList() {
  const dispatch = useDispatch()

  const userPublicKey = useSelector(state => state.User.publicKey, shallowEqual);
  const wallet = useSelector(state => state.User.walletConnect, shallowEqual);
  const depts = useSelector(state => state.User.deptsList, shallowEqual);
  const irr = useSelector(state => state.User.irr, shallowEqual);

  const [loading, setLoading] = useState(0);

  const pay = async (item)=>{
    try {
      setLoading(item.id)
      const paymentResponse = await wallet.payment({
        amount: (item.amount / irr).toFixed(7),
        destination: item.publickey,
        asset_code: 'PMN',
        memo: `hesabchi_payment_${item.id}`
      })
      await submitpaymentService(paymentResponse.data.transaction_hash);
      dispatch(getListsData())
      setLoading(0)
    } catch (error) {
      setLoading(0)
      HandleErrors(error)
    }
  }

  return (
    <div className="DeptsList">
      <Row justify="center">
        {depts.length === 0 && <Col xs={20} className="empty-box">
          <img src={'/assets/images/empty.svg'} width={'100%'} />
          <Text className="desc">شما هیچ بدهی ندارید</Text>
        </Col>}
        {depts.map(item=>{
          return(
            <Col xs={24} className="deptsList-item">
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
                <Row>
                  <Button loading={loading === item.id} onClick={()=>{pay(item)}} className="btn" type="primary" block>پرداخت</Button>
                </Row>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default DeptsList;
