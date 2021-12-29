import React, { useState } from "react";
import {Tab1,Tab2,Tab3} from "templates";
import { Box,  Flex,  Text } from "atoms";


const data = [
  { id: 0, name: "About The Product" },
  { id: 1, name: "Features" },
  { id: 2, name: "Pricing & Packages" },
];

export const Homepage = () => {
  const [isSelectedTab, setSelectedTab] = useState(0);
  const handleTabSwitch = (id) => {
    setSelectedTab(id);
  };
  return (
    <>
    <Box borderBottom="1px solid" borderColor="#ddd">
        <Flex>
          {data.map((tab,index) => {
            return (
              <Text key={tab.id} p="2rem" ml="8rem"cursor="pointer"  onClick={() => handleTabSwitch(tab.id)} color={isSelectedTab===index   ? "primary.50":"grey"} fontWeight="bold">
                {tab.name} 
              </Text>
            );
          })}
        </Flex>
      </Box>
      
      
      <div>
        
        {isSelectedTab === 0 && <Tab1 data={data[0]} />}
        {isSelectedTab === 1 && <Tab3 data={data[1]} />}
        {isSelectedTab === 2 && <Tab2 data={data[2]} />}
        
      </div>
      
    </>
  );
};
