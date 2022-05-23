import { Badge, Button, Input, message, Modal, Switch } from "antd";
import { Fragment, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getListsData } from "../../redux/actions/userAction";
import { getKuknosAddressService } from "../../services/kuknosService";
import { addCost } from "../../services/transactionService";
import { HandleErrors } from "../../utility/HandleErrors";

function AddPurchase() {
  const dispatch = useDispatch();

  const userPublicKey = useSelector(state => state.User.publicKey, shallowEqual);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [personAddress, setPersonAddress] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    title: "",
    amount: "",
    include_me: false,
    users: [],
  });

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const switchOnChange = (checked) => {
    setData({ ...data, include_me: checked });
  };

  const addPerson = async () => {
    try {
      if (personAddress === "") return;

      let publickey = personAddress

      if(personAddress.substr(personAddress.length - 10) === '*kuknos.ir'){
        const response = await getKuknosAddressService(personAddress)
        publickey = response.account_id
      }

      if(publickey === userPublicKey){
        message.error('حساب شما نمی تواند شامل افرا مشمول باشد.')
        return;
      }

      const array = [...data.users];
      if (!array.includes(publickey)) {
        array.push(publickey);
        setData({ ...data, users: array });
        setPersonAddress("");
      }

    } catch (error) {
      HandleErrors(error)
    }
  };

  const deleteAddress = (index) => {
    const array = [...data.users];
    array.splice(index, 1);
    setData({ ...data, users: array });
  };

  const AddCost = async () => {
    if (data.title === "") {
      message.error("عنوان را وارد کنید.");
      return;
    }
    if (data.amount === "") {
      message.error("مبلغ را وارد کنید.");
      return;
    }
    if (data.users.length === 0) {
      message.error("کاربر یا کاربران مشمول را انتخاب کنید.");
      return;
    }
    try {
      setLoader(true);
      const addCostResponse = await addCost(data);
      dispatch(getListsData());
      setLoader(false);
      message.success("درخواست شما با موفقیت ارسال شد.");
      setIsModalVisible(!isModalVisible);
      setData({
        title: "",
        amount: "",
        include_me: false,
        users: [],
      });
      setPersonAddress("");
    } catch (error) {
      setLoader(false);
      HandleErrors(error);
    }
  };

  return (
    <Fragment>
      <Button onClick={showModal} type="primary" className="add-purchase">
        <i className="las la-plus add-icon"></i> ثبت هزینه
      </Button>
      <Modal
        title="مشخصات هزینه"
        footer={null}
        onCancel={() => setIsModalVisible(!isModalVisible)}
        visible={isModalVisible}
      >
        <div className="modal-form-item">
          <span className="modal-input-title">عنوان: </span>
          <Input
            placeholder="عنوان"
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </div>
        <div className="modal-form-item">
          <span className="modal-input-title">مبلغ (ریال):</span>
          <Input
            value={data.amount}
            onChange={(e) => {
              setData({ ...data, amount: e.target.value });
            }}
            placeholder="مبلغ"
          />
        </div>
        <div className="modal-form-item">
          <span className="modal-input-title">خودم را حساب کن:</span>
          <Switch checked={data.include_me} onChange={switchOnChange} />
        </div>
        <div className="modal-repeater-container">
          <Input
            placeholder="کلید عمومی یا آدرس ققنوسی افراد مشمول"
            value={personAddress}
            onChange={(e) => {
              setPersonAddress(e.target.value);
            }}
          />
          <div className="form-add-container" onClick={addPerson}>
            <i className="las la-plus form-add-icon"></i>
          </div>
        </div>
        <div className="modal-persons-public">
          {data.users.map((item, index) => {
            return (
              <div key={index} className="modal-persons-public-item">
                <Badge
                  className="modal-persons-public-badge"
                  text={
                    item.length > 50
                      ? `${item.slice(0, 10)}...${item.slice(-10)}`
                      : item
                  }
                  color="red"
                />
                <i
                  className="lar la-times-circle delete-repeater-item"
                  onClick={() => {
                    deleteAddress(index);
                  }}
                ></i>
              </div>
            );
          })}
        </div>
        <Button
          className="modal-add-btn"
          loading={loader}
          onClick={() => {
            AddCost();
          }}
        >
          ثبت هزینه
        </Button>
      </Modal>
    </Fragment>
  );
}

export default AddPurchase;
