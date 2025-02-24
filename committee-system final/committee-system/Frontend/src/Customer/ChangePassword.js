import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiServices,{BASE_URL} from '../Api/ApiServices';
import {ClipLoader} from "react-spinners"

const override= {

    margin: "0 auto",
    marginTop: "250px",
    marginBottom: '200px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:"hidden"
  };

export default function ChangePassword() {

    sessionStorage.getItem('name')
    sessionStorage.getItem('email')
    const[newPassword,setNewPassword]=useState("")
    const[currentPassword,setCurrentPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")

    const[Image,setImage]=useState("")
    const [isLoading, setIsLoading] = useState(true);
    let [color, setColor] = useState("#2c4964;");


  useEffect(()=>{
    let data = {
   _id:sessionStorage.getItem("customerId")
  }
  ApiServices.singleCustomer(data)
  .then((res) => { 
    console.log('single Loaded',res)
    // console.log("category ID",res.data.data.freelancer.categoryId._id)
    setImage(res.data.data.profile)
  
    })
  },[])
  useEffect(()=>{
    setTimeout(() => {
    setIsLoading(false);
  }, 1500);
})
const handleForm=(e)=>{
e.preventDefault();

let data = {
 _id:sessionStorage.getItem('_id'),
 newPassword:newPassword,
 currentPassword:currentPassword,
 confirmPassword:confirmPassword


 
}
ApiServices.chnagePassword(data)
.then(
(res)=>{
  toast(res.data.message)
//   nav("/managetype")
setNewPassword("")
setCurrentPassword("")
setConfirmPassword("")
}
).catch((error)=>{
console.log(error);
})
}
  return(
    <>
    {isLoading && (
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )}
    {!isLoading && (
       <> 

      <center data-aos="zoom-in">
    <form  onSubmit={handleForm} className="shadow p-4 mx-auto"style={{marginTop:"150px",marginBottom:"50px", width:'40%'}}> <div className="text-center wow fadeInUp" data-wow-delays="0.1s">
            <h2 className="mb-3 bg-white text-center px-3">My Profile</h2>
          </div>
          <center>
              <img src={BASE_URL+Image} width={200} className='mb-4'/></center>
          <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}} >Name</label>
            <div class="col-sm-9">
            <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  required=""
                  value={sessionStorage.getItem('name')} 
                  readOnly
                />
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Email</label>
            <div class="col-sm-9">
            <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email"
                  required=""
                  value={sessionStorage.getItem('email')} 
                  readOnly
                />   
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-6 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Current Password</label>
            <div class="col-sm-6">
            <input
                  type="password"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="current password"
                  required=""
                  value= {currentPassword}
                  onChange={(e)=>{setCurrentPassword(e.target.value)}}
                />
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-6 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>New Password</label>
            <div class="col-sm-6">
            <input
                  type="password"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="New Password"
                  required=""
                  value= {newPassword}
                  onChange={(e)=>{setNewPassword(e.target.value)}}
                />
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-6 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Confirm New Password</label>
            <div class="col-sm-6">
            <input
                  type="password"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Confirm New Password"
                  required=""
                  value= {confirmPassword}
                  onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
         </div>
         </div>
 
      
        <button type="submit" className="btn  btn-style mt-3 mb-2 text-light" style={{width:"220px",margin:"0 auto",backgroundColor:"#56B8E6", fontSize:"20px"}}>Update Password</button>
      
     



       
   </form>
   </center>         

      </>
        )}
        </>
      
  )
}