import React, { useState } from "react";
import { Grid, Box, Text } from "atoms";
import Tab1 from "templates/Tab1/Tab1";
import Tab2 from "templates/Tab2/Tab2";
import Tab3 from "templates/Tab3.js/Tab3";



export const Homepage = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Grid gridTemplateColumns="1fr 1fr 1fr" width="60%" pr="25rem" mt="5rem" ml="10rem" textAlign="left" height="auto">
        <Text pl="1rem" fontSize="2rem" fontWeight="bold" color={active === 0 ? "primary.50" : "gray.1000"} onClick={()=>setActive(0)}> About The Product </Text>     
        <Text pl="3.5rem" fontSize="2rem" fontWeight="bold" color={active === 1 ? "primary.50" : "gray.1000"} onClick={()=>setActive(1)}> Features </Text>
        <Text fontSize="2rem" fontWeight="bold" color={active === 2 ? "primary.50" : "gray.1000"} onClick={()=>setActive(2)}> Packages & Prices </Text>
      </Grid>
    
    <Box>
    {active===0 && <Tab1/>}
    {active===1 && <Tab2/>}
    {active===2 && <Tab3/>}
    </Box>
</>
  );
};
