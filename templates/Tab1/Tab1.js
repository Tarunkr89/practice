import React from "react";
import {Box, Text} from "atoms";
import styled from "styled-components";

const Tabone= styled(Box)`
width: 60%;
height: auto;
min-height: 400px;
background: white;
margin: 2rem 10rem;
padding: 1rem;
color: black;
font-weight: 400;
font-size: 19.5px;
border-top:solid thin grey;

`
const Tab1 = () => {
  return (
    <Tabone>
Suitable for both self employed and small SME's. Also idea for starters who want to do most of their accounting themselves.
E-bookeeping is easy to set up and offers all the functionalities that an entrepreneur needs to carry out all financial matters related to
to bookeeping.E-Bookeeping is one of the most popular accounting packages in the Netherlands for doing the bookeeping yourself.

<Text fontWeight="900" pt="3rem" fontSize="2rem">Product Overview</Text>
<Box border="1px solid" borderColor="grey" fontWeight="bold" p="1rem" mb="1rem" mt="1rem" fontSize="1.7rem">In our opinion, E-Bookkeeping is especially suitable for smaller companies that are looking for a funny online accounting program.</Box>

Whether you are the owner of a BV or a starting freelancer,proper bookeeping is essential.
E-bookeeping is an accounting program that should make accounting easy for any small business-owner,
whether you are a novice or an experienced entrepreneur.
E-Bookeeping has been around since 2002 and it employs 36 people.E-Bookeeping indicates that the program
can be used by everyone,whether or not you have experience in the feild of Bookeeping.

    </Tabone>
  );
};
export default Tab1;
