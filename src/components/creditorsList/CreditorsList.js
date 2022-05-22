import { MaskNumber } from "../../utility/MaskNumber";

function CreditorsList() {
  return (
    <div className="creditorsList">
      <div className="creditorsList-item">
        <div className="item-head">
          <div>شیرموز</div>
          <div>15:10 1401-02-31</div>
        </div>
        <div className="price-container">
          <div>
            مبلغ بدهی: <span className="price">{MaskNumber(1351656)}</span>
          </div>
          <div>10 پیمان</div>
        </div>
        <div className="waiting-for-pay">در انتظار پرداخت</div>
      </div>
      <div className="creditorsList-item">
        <div className="item-head">
          <div>شیرموز</div>
          <div>15:10 1401-02-31</div>
        </div>
        <div className="price-container">
          <div>
            مبلغ بدهی: <span className="price">{MaskNumber(1351656)}</span>
          </div>
          <div>10 پیمان</div>
        </div>
        <div className="is-paid">پرداخت شده</div>
      </div>
    </div>
  );
}

export default CreditorsList;
