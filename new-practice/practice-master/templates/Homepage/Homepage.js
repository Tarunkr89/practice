import React, { useState } from "react";

import { ProductTab } from "molecules";
import { Box, FeatureTab, Flex, PackagePricingTab, Text } from "atoms";
import { Tab1, Tab2, Tab3 } from "templates";

const data = [
  { id: 0, name: "About The Product" },
  { id: 1, name: "Features" },
  { id: 2, name: "Packages & Pricing" },
];

export const Homepage = () => {
  const [isSelectedTab, setSelectedTab] = useState(0);
  const handleTabSwitch = (id) => {
    setSelectedTab(id);
  };
  return (
    <>
      <Box borderBottom="1px solid" borderColor="#ddd" >
        <Flex>
          {data.map((tab, index) => {
            return (
              <Text key={tab.id} p="2rem" ml="10rem" cursor="pointer" onClick={() => handleTabSwitch(tab.id)} color={isSelectedTab === index ? "primary.50" : "grey"} fontWeight="bold">
                {tab.name}
              </Text>
            );
          })}
        </Flex>
      </Box>
      <div>
        {isSelectedTab === 0 && <Tab1/>}
        {isSelectedTab === 1 && <Tab2/>}
        {isSelectedTab === 2 && <Tab3/>}
      </div>
    </>
  );
};
