import React from 'react'
import { useState } from "react"
import ApiServices from '../Api/ApiServices'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import RegisterHeader from './RegisterHeader'

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const[image,setImage]=useState("")
  const[imageName,setImageName]=useState("")
  const [contact, setContact] = useState()
  const [address, setAddress] = useState()
  const [country, setCountry] = useState()
  const nav = useNavigate()



  const changeImage=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0])
    setImageName(e.target.value)
  }
const Submitted = (e) => { 
    e.preventDefault()
    console.log(e)
    let data = new FormData()
    data.append("name",name)
    data.append("profile",image)
    data.append("password",password)
    data.append("address",address)
    data.append("contact",contact)
    data.append("email",email)



    
    ApiServices.Register(data)
    .then((res) => { 
      console.log(res)
      toast.success(res.data.message);
      nav("/login")

      setContact("");
      setEmail("");
      setAddress("");
      setPassword("");
      setName("");
  
    }
)
}
      
  
  return (
    <>
    <RegisterHeader/>
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
              <h3 className='mt-5'>Register Here</h3>
              <div className="row">
              <div className="col-md-12 form-group">
              <input
                    type="file"
                    className="form-control"
                    id="profile"
                    placeholder="Photo  "
                    onChange={changeImage} value={imageName}
                    />  
                </div>
                <div className="col-md-12 form-group mt-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  required=""
                  onChange={(e) => { setName(e.target.value)}}
                />
                </div>
                <div className="col-md-12 form-group mt-3">
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
                <div className="col-md-12 form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Address"
                  required=""
                  value={address} onChange={(e) => { setAddress(e.target.value) }}
                />
                </div>
                <div className="col-md-12 form-group mt-3">
                <input
                  type="tel"
                  className="form-control"
                  name="email"
                  id="email"
                  maxLength={10}
                  minLength={10}
                  placeholder="Contact"
                  required=""
                  value={contact} onChange={(e) => { setContact(e.target.value) }}
                />
                </div>

              </div>
             
        <div class="mb-3 row">
        <div class="col-sm-9">
        <button type="submit" className="btn  btn-style mt-3 mb-2 text-light" style={{width:"220px",margin:"0 auto",backgroundColor:"#56B8E6", fontSize:"20px"}}>Register</button>
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

export default Register