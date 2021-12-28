import React, { useState } from "react";
import Tab1 from "templates/Tab1/Tab1";
import Tab2 from "templates/Tab2/Tab2";



export const Homepage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
 
  <div className="Tabs">
      <ul className="nav">
      <li className={activeTab === "tab1" ? "active" : ""}>ONE</li>
      <li className={activeTab === "tab2" ? "active" : ""}>TWO</li>
     
      </ul>
      <div className="output">
      {activeTab === "tab1" && <Tab1/>}
      {activeTab === "tab2" && <Tab2/>}
      </div>
  </div>

);
};
