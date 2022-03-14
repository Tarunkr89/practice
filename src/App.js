import "./App.css";
 import Common from "./Common";

//import { Header } from "./molecules";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
 //import { Heading } from "./atoms";
// import { Card } from "./atoms/Card";
//import { Profile } from "./molecules";
//import { Grid } from "./atoms";
// import {Main} from "./molecules"
// import {About} from "./molecules"
// import {Timeline} from "./molecules"
// import {Job} from "./molecules"
// import {Last} from "./molecules"
// import {Navbar} from "./molecules"
// import {Form} from"./atoms"
// import {Form2} from"./atoms"
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";






const data = [
  { name: "Tarun", value: "sdvsd", secondName: "Lokesh" },
  { name: "Saurav", value: "sdvsd", secondName: "Yatharth" },
];

function App() {

  const productList =[
    {
      price: 9999,
      name: "abc",
      quantity: 1,
    },
    {
      price: 99999,
      name: "abcd",
      quantity: 0,
    }
  ]

  

  return (
    <>
     <ThemeProvider theme={theme}>
      {/* <Main/>
      <About/>
      <Timeline/>
      <Job/>
      <Last/> */}
      {/* <Navbar/> */}
      {/* <Form/>
      <Form2/> */}
      <Navbar/>
      <main className='container mt-5'>
      <ProductList productList={productList}/>
      </main>
      
      
    
    {/* <Footer/> */}
      
      
    </ThemeProvider>
    </>
   
  );
}

export default App;
