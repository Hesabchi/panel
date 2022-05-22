import { Button } from "antd";
import { MaskNumber } from "../../utility/MaskNumber";

function DebtsList() {
  return (
    <div className="debtsList">
      <div className="debtsList-item">
        <div className="item-head">
          <div className="transaction-title">شیرموز</div>
          <div>15:10 1401-02-31</div>
        </div>
        <div className="price-container">
          <div>
            مبلغ بدهی: <span className="price">{MaskNumber(1351656)}</span>
          </div>
          <div>10 پیمان</div>
        </div>
        <Button className="pay">پرداخت بدهی</Button>
      </div>
    </div>
  );
}

export default DebtsList;
