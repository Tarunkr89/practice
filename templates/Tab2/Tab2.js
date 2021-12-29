import React from "react";
import {Box} from "atoms";
import styled from "styled-components";


const Tabtwo= styled(Box)`
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
const Tab2 = () => {
  return (
  <Tabtwo>
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
  </Tabtwo>
  );
};

export default Tab2;