import { Tabs } from "antd";
import { useState } from "react";
import CreditorsList from "../creditorsList/CreditorsList";
import DebtsList from "../debtsList/DebtsList";

const { TabPane } = Tabs;

const TabsComponents = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const callback = (key) => {
    setCurrentTab(key);
  };

  return (
    <Tabs activeKey={currentTab} onChange={callback}>
      <TabPane tab="بدهی ها" key="1">
        <div className="list">
          <DebtsList />
        </div>
      </TabPane>
      <TabPane tab="طلب ها" key="2">
        <div className="list">
          <CreditorsList />
        </div>
      </TabPane>
    </Tabs>
  );
};

export default TabsComponents;
