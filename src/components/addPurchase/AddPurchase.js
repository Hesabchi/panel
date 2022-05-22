import { Badge, Button, Input, Modal, Switch } from "antd";
import { Fragment, useState } from "react";

function AddPurchase() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [personAddress, setPersonAddress] = useState("");
  const [personsAddress, setPersonsAddress] = useState([]);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const switchOnChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const addPerson = () => {
    if (personAddress === "") return;
    const array = personsAddress;
    if (!array.includes(personAddress)) {
      array.push(personAddress);
      setPersonsAddress(array);
      setPersonAddress("");
    }
  };

  const deleteAddress = (index) => {
    const array = [...personsAddress];
    array.splice(index, 1);
    setPersonsAddress(array);
  };

  return (
    <Fragment>
      <Button onClick={showModal} type="primary" className="add-purchase">
        <i className="las la-plus add-icon"></i> ثبت هزینه
      </Button>
      <Modal
        title="مشخصات خرید"
        footer={null}
        onCancel={() => setIsModalVisible(!isModalVisible)}
        visible={isModalVisible}
      >
        <div className="modal-form-item">
          <span className="modal-input-title">عنوان: </span>
          <Input placeholder="عنوان" />
        </div>
        <div className="modal-form-item">
          <span className="modal-input-title">مبلغ:</span>
          <Input placeholder="مبلغ" />
        </div>
        <div className="modal-form-item">
          <span className="modal-input-title">خودم را حساب کن:</span>
          <Switch onChange={switchOnChange} />
        </div>
        <div className="modal-repeater-container">
          <Input
            placeholder="کلید عمومی یا آدرس ققنوس افراد مشمول"
            onChange={(e) => {
              setPersonAddress(e.target.value);
            }}
          />
          <div className="form-add-container" onClick={addPerson}>
            <i className="las la-plus form-add-icon"></i>
          </div>
        </div>
        <div className="modal-persons-public">
          {personsAddress.map((item, index) => {
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
          onClick={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          ثبت هزینه
        </Button>
      </Modal>
    </Fragment>
  );
}

export default AddPurchase;
