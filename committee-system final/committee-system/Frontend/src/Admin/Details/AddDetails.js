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

export default function AddDetails() {

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [startMonth,setStartMonth]=useState("")
  const [endMonth,setEndMonth]=useState("")
  const [totalAmount,setTotalAmount]=useState("")
  const [perMemberAmount,setPerMemberAmount]=useState("")
  const [month,setMonth]=useState("")
  const [members,setMembers]=useState("")
  const [image,setImage]=useState({})
  const [imageName,setImageName]=useState("")
  const[type,setType]=useState("")
  const [allType,setAllType]=useState([])
  let [color, setColor] = useState("#2c4964;");
  const [isLoading, setIsLoading] = useState(true);
  const [dateError, setDateError] = useState('');

  const changeImage=(e)=>{
    // console.log(e.target.value)
    setImageName(e.target.value)
    // console.log(e.target.files[0])
    setImage(e.target.files[0])
  }
  useEffect(()=>{
  
    ApiServices.viewCommittee()
    .then((data)=>{
      // console.log(data);
      console.log("data",data.data.data);
      setAllType(data.data.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
  },[])

  const Submitted=(e)=>{
    e.preventDefault()
    let obj ={
      Authorization:sessionStorage.getItem("token")
    }
    console.log("obj is:",obj)
    let data= {
    "title":name,
    "members":members,
    "month":month,
    "totalAmount":totalAmount,
    "perMemberAmount":perMemberAmount,
    "startMonth":startMonth,
    "endMonth":endMonth,
    "committeTypeId":type,
    "description":description
    }
   
    ApiServices.addDetails(data).then(
      (res)=>{
        console.log("response is:",res)
   
          toast.success(res.data.message)
          setName('')
          setType("")
          setEndMonth('')
          setStartMonth('')
          setMembers('')
          setMonth('')
          setDescription('')
          setTotalAmount('')
          setPerMemberAmount('')
      }
    ).catch(
      (err)=>{
        console.log(err);
        toast.error(err.data.message)
      }
    )

  }

  const   handleStartMonth = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setDateError('Month cannot be in the past!');
    } else {
      setDateError('');
      setStartMonth(e.target.value);
    }
  };
  

  const handleEndMonth=(e)=>{
    const selectedExpiryDate = e.target.value
    if (selectedExpiryDate < startMonth) {
    alert('End Month cannot be less than Start Month');
  }else{
    setEndMonth(selectedExpiryDate);
  }
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
              Add Committee Details
            </Link>
      </ol>
    </div>
              </div>
      <center data-aos="zoom-in">
    <form  onSubmit={Submitted} className="shadow p-4 mx-auto"style={{marginTop:"50px",marginBottom:"50px", width:'70%'}}> <div className="text-center wow fadeInUp" data-wow-delays="0.1s">
            <h2 className="mb-3 bg-white text-center px-3">DETAILS</h2>
          </div>
       <div className='row'>
        <div className='col-md-6'>
          <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-4 col-form-label" style={{fontSize:"20px",fontWeight:"500"}} >Title</label>
            <div class="col-sm-8">
           <input type="text" class="form-control" id="inputPassword" 
             value={name} onChange={(e) => { setName(e.target.value) }}/>
         </div>
         </div>
         </div>

         <div className='col-md-6'>
         <div class="mb-3 row">
         <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Select Type</label>
         <div className="col-sm-9 form-group mb-3">
           
              <select value={type} onChange={(e)=>{setType(e.target.value)}} className="form-select" >
                    <option value={""} hidden selected>Select Committee Type</option>
                    {
                      allType?.filter(el=>el.status==true).map((el)=>(
                        <option value={el._id} >{el.name}</option>
                      ))
                    }
                </select>
              </div></div></div>
  
              <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>No. of Members</label>
            <div class="col-sm-9">
             <input type="text" class="form-control" id="inputPassword"
             value={members} onChange={(e) => { setMembers(e.target.value) }}/>    
         </div>
         </div></div>
         <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Month</label>
            <div class="col-sm-9">
             <input type="text" class="form-control" id="inputPassword"
             value={month} onChange={(e) => { setMonth(e.target.value) }}/>    
         </div>
         </div></div>
         <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Total Amount</label>
            <div class="col-sm-9">
             <input type="text" class="form-control" id="inputPassword"
             value={totalAmount} onChange={(e) => { setTotalAmount(e.target.value) }}/>    
         </div>
         </div></div>
         <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Amount Per Member</label>
            <div class="col-sm-9">
             <input type="text" class="form-control" id="inputPassword"
             value={perMemberAmount} onChange={(e) => { setPerMemberAmount(e.target.value) }}/>    
         </div>
         </div></div>
         <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>start Month</label>
            <div class="col-sm-9">
             <input type="date" class="form-control" id="inputPassword"
             value={startMonth} onChange={handleStartMonth}/>    
         </div>
         {dateError && (
          <div className="text-danger">{dateError}</div>
        )}
         </div></div>
         <div className='col-md-6'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-3 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>End Month</label>
            <div class="col-sm-9">
             <input type="date" class="form-control" id="inputPassword"
              value={endMonth} onChange={handleEndMonth}/>    
   
         </div>
         </div></div>     
         
         <div className='col-md-12'>
         <div class="mb-3 row">
           <label for="inputPassword" class="col-sm-4 col-form-label" style={{fontSize:"20px",fontWeight:"500"}}>Description</label>
            <div class="col-sm-8">
             <textarea type="text" class="form-control" id="inputPassword"
             value={description} onChange={(e) => { setDescription(e.target.value) }}/>    
         </div>
         </div>
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