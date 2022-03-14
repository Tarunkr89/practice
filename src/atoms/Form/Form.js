// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";
// import { string } from "yup";



// const initialValues={
//     name:"",
//     email:"",
//     channel: ""
// }

// const onSubmit= (values)=>{
//     console.log("Form data",values)
// }

// const validate=(values)=>{
//     // values.name values.email values.channel
//     //errors.name errors.email errors .channel
//     //errors.name="This field is required"
// let errors={}
// if(!values.name){
//     errors.name="Required"
// }
// if(!values.email){
//     errors.email="Required"
// }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     errors.email="Invalid email format"
// }
// if(!values.channel){
//     errors.channel="Required"
// }
// return errors
// }

// const validationSchema= Yup.object({
//     name: Yup.string().required("Required!"),
//     email: Yup.string()
//     .email("Invalid email format")
//     .required("Required"),
//     channel: Yup.string().required("Required")


    
// })

// const Simple= styled.div`
// input[type="text"]
// input[type="email"]
// display:block;
// width: 21rem;
// height: 20rem;
// padding : 0.6rem 1.2rem;
// font-size: 1.2rem;
// line-height: 1.42857143;
// color: #555;
// background-color: #fff;
// border: 0.1rem solid #CCC;
// border-radius: 0.4rem;
// margin-left:25rem;
// `

// export const Form =() => {
//     const formik= useFormik({initialValues,onSubmit, validationSchema})
//     console.log("Visited fields",formik.touched)
//     return (
//         <Simple> <div>
//           <form onsubmit={formik.handleSubmit}>
//                <div className="form-control">
//               <label html For="name">Name</label>
//               <input type="text" id ="name" name="name" onChange={formik.handleChange} value={formik.values.name} 
//               onBlur={formik.handleBlur}/>
//               { formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div> : null}
//               </div>
//               <div className="form-control">
//              <label html For="email">Email</label >
//               <input type="text" id ="email" name="email" onChange={formik.handleChange} value={formik.values.email}
//               onBlur={formik.handleBlur}/>
//               { formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div> : null}
//               </div>
//               <div className="form-control">
//              <label html For="channel">Channel</label>
//               <input type="text" id ="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}
//               onBlur={formik.handleBlur}/>
//               { formik.touched.channel && formik.errors.channel?<div className="error">{formik.errors.channel}</div> : null}
//               </div>
              
//               <button type="submit" mt="2rem"height="4rem"width="12.8rem">Submit</button>
        
//           </form>
         
//       </div>
//       </Simple> 
      
//     );
//   };