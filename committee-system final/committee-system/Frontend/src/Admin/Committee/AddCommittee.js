import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiServices from '../../Api/ApiServices';
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

export default function AddCommittee() {

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [image,setImage]=useState({})
  const [imageName,setImageName]=useState("")
  let [color, setColor] = useState("#2c4964;");
  const [isLoading, setIsLoading] = useState(true);
  const changeImage=(e)=>{
    // console.log(e.target.value)
    setImageName(e.target.value)
    // console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

 useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
 }
 ,[]
)
  const Submitted=(e)=>{
    e.preventDefault()
    let obj ={
      Authorization:sessionStorage.getItem("token")
    }
    console.log("obj is:",obj)
    let data=new FormData()
    data.append("name",name)
    data.append("thumbnail",image)
    data.append("description",description)
   
    ApiServices.addType(data).then(
      (res)=>{
        console.log("response is:",res)
   
          toast.success(res.data.message)
          setName('')
          setImageName("")
          setImage({})
          setDescription('')
      }
    ).catch(
      (err)=>{
        console.log(err);
        toast.error(err.data.message)
      }
    )

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

    <div
    className="breadcrumbs d-flex align-items-center"
    style={{ backgroundImage: 'url("/assets/img/hero-bg.jpg")' , marginTop:"100px", height:"400px"}}
  >
    
    <div className="container position-relative d-flex flex-column align-items-center">
      <h2 style={{color:"white"}}>ADMIN</h2>
      <ol>
        <li>
        <Link className="nav-link" to={" "}>
              Home/
            </Link>
       
        </li>
        <Link className="nav-link" to={" "}>
              Add Committee Type
            </Link>
      </ol>
    </div>
              </div>
      <center data-aos="zoom-in">
    <form  onSubmit={Submitted} className="shadow p-4 mx-auto"style={{marginTop:"50px",marginBottom:"50px", width:'40%'}}> <div className="text-center wow fadeInUp" data-wow-delays="0.1s">
            <h2 className="mb-3 bg-white text-center px-3">DETAILS</h2>
          </div>
       
          <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}} >Type</label>
            <div class="col-lg-9">
           <input type="text" class="form-control" id="inputPassword" 
             value={name} onChange={(e) => { setName(e.target.value) }}/>
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Description</label>
            <div class="col-lg-9">
             <input type="text" class="form-control" id="inputPassword"
             value={description} onChange={(e) => { setDescription(e.target.value) }}/>    
         </div>
         </div>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Attachment</label>
            <div class="col-lg-9">
           <input type="file" class="form-control" id="inputPassword" 
            onChange={changeImage}
            value={imageName}/>
         </div>
         </div>
 
      
        <button type="submit" className="btn  btn-style mt-3 mb-2 text-light" style={{width:"220px",margin:"0 auto",backgroundColor:"#56B8E6", fontSize:"20px"}}>Add</button>
      
     



       
   </form>
   </center>         

      </>
        )}
        </>
      
  )
}