import { moment } from "jalali-moment";
import { MaskNumber } from "../../utility/MaskNumber";

function ClaimsList() {
  return (
    <div className="claimsList">
      <div className="claimsList-item">
        <div className="item-head">
          <div className="transaction-title">شیرموز</div>
          <div>15:10 1401-02-31</div>
          {/* {moment(created_at, "YYYY-MM-DD").format("jYYYY/jMM/jDD")} */}
        </div>
        <div className="price-container">
          <div>
            مبلغ بدهی: <span className="price">{MaskNumber(1351656)}</span>
          </div>
          <div>10 پیمان</div>
        </div>
        <div className="waiting-for-pay">در انتظار پرداخت</div>
      </div>
      <div className="claimsList-item">
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
        <div className="is-paid">پرداخت شده</div>
      </div>
    </div>
  );
}

export default ClaimsList;
