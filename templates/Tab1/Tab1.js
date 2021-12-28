import React from "react";
import styled from "styled-components";

const Tabone= styled.div`
width: 80%;
height: auto;
min-height: 400px;
background: blue;
margin: 3.5rem auto 1.5rem;
padding: 2rem 1rem;
color: #E8F0F2;
 border-radius: 2rem;

`
 
const Tab1 = () => {
  return (
    <Tabone>
      <p>First</p>
    
    </Tabone>
  );
};


export default Tab1;
