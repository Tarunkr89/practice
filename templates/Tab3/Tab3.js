import React from "react";
import styled from "styled-components";
import { Box } from "atoms";
const Tab= styled.div`
width: 60%;
height: auto;
min-height: 400px;
padding-left: 9rem;
margin: 3.5rem auto 1.5 rem;
font-size: 2rem;

`

export const Tab3 = ()=> {
  return(<Tab>
  <div><p>
  Suitable for both self employed and small SME's.Also idea for starters who want to do most of their accounting themselves
    E-bookeeping is easy to set up and offers all the functionality that an entrepreneur needs to carry out all financial matters related to
    to bookeeping.E-Bookeeping is one of the most popular accounting packages in the Netherlands for doing the bookeeping yourself.
  </p>
  <h4>Product Overview</h4>
  <div>
    <Box border="1px solid#ddd"p="1rem" ><h4>In our opinion,E-booking is especially suitable for smaller companies that are looking for a fully
        online accounting program.</h4></Box>
    
  </div>
  <div>
    <p>
    Whether you are the owner of a BV or a starting freelancer,proper bookeeping is essential.
     E-bookeeping is an accounting program that should make accounting easy for any small business-owner,
     whether you are a novice or an experienced entrepreneur.
    </p>
  </div>
  </div>
  </Tab>
   
    
  );  
};
