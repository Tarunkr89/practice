import React from "react";
import {Box} from "atoms";
import styled from "styled-components";


const Tabthree= styled(Box)`
width: 60%;
height: auto;
min-height: 400px;
background: white;
margin: 2rem 10rem;
padding: 1rem;
color: black;
font-size: 17px;
border-top:solid thin grey;
`

const Tab3 = () => {
  return (
    <Tabthree>
     Tabs are user interface components that render and display subsections to users; they arrange content into categories for easy access and make your apps look cleaner by saving space. Tabs are a prevalent UI component, and it is essential to understand how to implement them as a developer.
    </Tabthree>
  );
};
export default Tab3;