import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Style } from "react-loader-spinner"
import ApiServices from '../Api/ApiServices';
import { toast } from 'react-toastify';
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
export default function ViewPequests(){
  const [isLoading, setIsLoading] = useState(true);
  const [x,setX]=useState(false)
  const [data,setData]=useState([])
  let [color, setColor] = useState("#2c4964");
 
  useEffect(()=>{

      ApiServices.adminAllRequest()
      .then((res)=>{
          console.log(res)
          setData(res.data.data)
      }).catch((err)=>{
          console.log(err);
      })
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  },[x])

  const changeStatus=(id,status)=>{
    let data = {
        _id:id,
        status:status
    }
    ApiServices.adminChangeStatus(data)
    .then((res)=>{
        toast.success(res.data.message)
        // window.location.reload()
        setX(true)
    })
    setX(false)
}

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Example format: "MM/DD/YYYY"
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
};

 
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
      <h2 style={{color:"white"}}>Customer</h2>
      <ol>
        <li>
        <Link className="nav-link" to={" "}>
              Home/
            </Link>
       
        </li>
        <Link className="nav-link" to={""}>
             All Requests
            </Link>
      </ol>
    </div>
              </div>
        
            <center>
        

 <div className="container">
  <div className="row">
    <div
    className="col-md-12 mx-auto shadow p-4 mb-5 mt-5"
    data-aos="fade-left"
    data-aos-delay={100}
    >
    <div className="text-center wow fadeInUp">
      <h2 className="mb-3 bg-white text-center px-3">All Requests</h2>

    </div>
    <div className='table-responsive'>
    <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
      <thead>
        <tr>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Sr.No.</th>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Title</th>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Committee Type</th>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Members</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6" ,alignContent:"center"}}>Month</th>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Total Amount</th>
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Amount Per Member</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Duration</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Status</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Request Status</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6",alignContent:"center"}}>Action</th> 


          {/* <th scope="col" style={{backgroundColor:"#56B8E6" ,alignContent:"center" }}>Delete</th>  */}
        </tr>
      </thead>
      
    {data?.map(
                (el,index)=>(
      <tbody>
        <tr key={index}>
          <td>{index+1}</td>
          <td>{el.committeDetailId?.title}</td>
          <td>{el.committeDetailId?.committeTypeId?.name}</td>
          <td>{el?.committeDetailId?.members} members</td>
          <td>{el?.committeDetailId?.month} months</td>
          <td>	&#8377; {el?.committeDetailId?.totalAmount}</td>
          <td>&#8377;{el?.committeDetailId?.perMemberAmount}</td>
          <td>{formatDate(el?.committeDetailId?.startMonth)}-{formatDate(el?.committeDetailId?.endMonth)}</td>
          <td>{el?.status==true?'Active':el?.status==false?'InActive':el?.status}</td>
          <td>  {el.status === 1 ? (
                    <span style={{ backgroundColor: '#5BBCFF' }} class="badge badge-pill badge-info" >Pending</span>
                     ) : el.status === 2 ? (
                        <span style={{ backgroundColor: 'green' }} class="badge badge-pill badge-info">Approved</span>
                     ) : el.status === 3 ? (
                        <span style={{ backgroundColor: 'red' }} class="badge badge-pill badge-info">Declined</span>
                     ):(
                       <span>{el.status}</span>
                     )}</td>

        <td> 
            <div style={{display:'flex', gap:'20px'}}>
            {el.status== 1 && (
           <button type="submit" class="btn text-light" style={{backgroundColor:"rgba(41, 171, 135)"}} onClick={()=>{changeStatus(el?._id,2)}}>Approve</button>
           )}
           {el.status === 1 && (
            <button className="btn text-center text-light" style={{backgroundColor:"crimson"}} onClick={()=>{changeStatus(el?._id,3)}}>Decline</button>
           )}
           {(el.status === 2 || el.status === 3) && (
            <h6>Request Status Updated!!</h6>
           )}            

           </div>
        </td> 
        </tr>
       
      </tbody>
           )
          )}
    </table>
    </div>

  </div>
 </div>
 </div>
</center>  
 </>
        )}
        </>
      
    )
}