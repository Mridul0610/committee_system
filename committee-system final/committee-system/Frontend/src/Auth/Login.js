import React from 'react'
import LoginHeader from './LoginHeader'
import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import ApiServices from '../Api/ApiServices';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const nav = useNavigate()

  const Submitted = (e) => { 
    e.preventDefault()
    console.log(e)
    let data = {
      email: email,
      password: password
    }
    ApiServices.login(data)
      .then((res) => { 
        console.log(res)

        if (res.data.success) {
          if(res.data.data.userType === 1){
          sessionStorage.setItem("token", res.data.token)
          sessionStorage.setItem("_id", res.data.data._id)
          sessionStorage.setItem("data", JSON.stringify(res.data.data))
          toast.success(res.data.message)
          nav("/admin")
         
        } // for member
        else if(res.data.data.userType === 2){
          sessionStorage.setItem("token", res.data.token)
          sessionStorage.setItem("_id", res.data.data._id)
          sessionStorage.setItem("customerId", res.data.data.customerId)
          sessionStorage.setItem("email", res.data.data.email)
          sessionStorage.setItem("name", res.data.data.name)
          sessionStorage.setItem("data", JSON.stringify(res.data.data))
          toast.success(res.data.message)
          nav("/")

        }
     
    
      }     else{
          toast.error(res.data.message)
        }
    }
      ).catch((error)=>{
        toast.error("Something went wrong!! Try again later!!")
      })
      
  }
      
  
  return (
    <>
    <LoginHeader/>
     {/* ======= Contact Section ======= */}
  <div className="shadow p-5 mx-auto" style={{marginTop:'80px'}}>
    <section id="contact" className="contact">
      <div className="container position-relative">
        <div className="row gy-4 d-flex justify-content-end">
          <div className="col-lg-5">
             <img src="/assets/img/blog/blog-2.jpg" width={550} height={450}/>
          </div>
          <div className="col-lg-6 mx-4"  style={{marginTop:'80px'}}>
            <form style={{width:'80%'}} onSubmit={Submitted}>
              <h1>Welcome To saving circle!</h1>
              <h3 className='mt-5'>Login Here</h3>
              <div className="row">
                <div className="col-md-12 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="email"
                  required=""
                  onChange={(e) => { setEmail(e.target.value)}}
                />
                </div>
                <div className="col-md-12 form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="password"
                  required=""
                  onChange={(event) => { setPassword(event.target.value) }}
                />
                </div>
              </div>
             
        <div class="mb-3 row">
        <div class="col-sm-9">
        <button type="submit" className="btn  btn-style mt-3 mb-2 text-light" style={{width:"220px",margin:"0 auto",backgroundColor:"#56B8E6", fontSize:"20px"}}>Login</button>
        </div>
        </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section></div>
    {/* End Contact Section */}
</>
  )
}

export default Login