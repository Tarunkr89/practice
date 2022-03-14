import React from "react";
import { Formik , Form ,Field , ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { string } from "yup";



const initialValues={
    name:"",
    email:"",
    channel: ""
}

const onSubmit= (values)=>{
    console.log("Form data",values)
}



const validationSchema= Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
    channel: Yup.string().required("Required")


    
})

const Simp= styled.div`
input[type="text"]
input[type="email"]
display:block;
width: 21rem;
height: 20rem;
padding : 0.6rem 1.2rem;
font-size: 1.2rem;
line-height: 1.42857143;
color: #555;
background-color: #fff;
border: 0.1rem solid #CCC;
border-radius: 0.4rem;
margin-left:50rem;
margin-bottom: 20px;
`

export const Form2 =() => {
    
    return (
        <Simp> <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
               <div className="form-control">
              <label html For="name">Name</label>
              <Field type="text" id ="name" name="name" />
              <ErrorMessage name="name"/>
              </div>
              <div className="form-control" >
             <label html For="email">Email</label >
              <Field type="text" id ="email" name="email"/>
              <ErrorMessage name="email" />
              </div>
              <div className="form-control">
             <label html For="channel">Channel</label>
              <Field type="text" id ="channel" name="channel"/>
              <ErrorMessage name="channel"/>
              </div>
              
              <button type="submit" mt="2rem"height="4rem"width="12.8rem">Submit</button>
        
          </Form>
         
      </Formik>
      </Simp> 
      
    );
  };