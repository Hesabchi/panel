import { Tabs } from "antd";
import { useState } from "react";
import ClaimsList from "../claimsList/ClaimsList";
import DebtsList from "../debtsList/DeptsList";

const { TabPane } = Tabs;

const TabsComponents = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const callback = (key) => {
    setCurrentTab(key);
  };

  return (
    <Tabs activeKey={currentTab} onChange={callback}>
      <TabPane tab="طلب ها" key="1">
        <div className="list">
          <ClaimsList />
        </div>
      </TabPane>
      <TabPane tab="بدهی ها" key="2">
        <div className="list">
          <DebtsList />
        </div>
      </TabPane>
    </Tabs>
  );
};

export default TabsComponents;
