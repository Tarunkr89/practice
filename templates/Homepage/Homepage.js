import React, { useState } from "react";

import { ProductTab } from "molecules";
import { Box, FeatureTab, Flex, PackagePricingTab, Text } from "atoms";

const data = [
  { id: "0", name: "Product" },
  { id: "1", name: "Feature" },
  { id: "2", name: "Pricing" },
];

export const Homepage = () => {
  const [isSelectedTab, setSelectedTab] = useState("0");
  const handleTabSwitch = (id) => {
    setSelectedTab(id);
  };
  return (
    <>
      <Box borderBottom="1px solid" borderColor="#ddd">
        <Flex>
          {data.map((tab) => {
            return (
              <Text key={tab.id} p="1rem" cursor="pointer" onClick={() => handleTabSwitch(tab.id)}>
                {tab.name}
              </Text>
            );
          })}
        </Flex>
      </Box>
      <div>
        {isSelectedTab === "0" && <ProductTab data={data[0]} />}
        {isSelectedTab === "1" && <FeatureTab data={data[1]} />}
        {isSelectedTab === "2" && <PackagePricingTab data={data[2]} />}
      </div>
    </>
  );
};
