import React, { useEffect, useState} from 'react'
import { Link , useNavigate, useParams, Navigate} from "react-router-dom"
import { Style } from "react-loader-spinner"
import ApiServices,{BASE_URL} from '../Api/ApiServices';
import { toast } from 'react-toastify';
import {ClipLoader} from "react-spinners"
import Modal from 'react-modal';


const override= {

    margin: "0 auto",
    marginTop: "250px",
    marginBottom: '200px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:"hidden"
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'20px',
      width:'30%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
  };
export default function CommitteView(){
  const [isLoading, setIsLoading] = useState(true);
  const [data,setData]=useState([])
  let [color, setColor] = useState("#2c4964;");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [dateError, setDateError] = useState('');
  let nav = useNavigate()
  const {id} = useParams()
 
  useEffect(()=>{

      ApiServices.viewDetails()
      .then((res)=>{
          console.log(res)
          setData(res.data.data)

      }).catch((err)=>{
          console.log(err);
      })
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  },[])


  const handleBookClick = (_id,) => {
    setSelectedWork(_id); 
    const storedToken = sessionStorage.getItem("token");
    if(!storedToken){
      toast.error("user not authenticated! Login first");
      nav("/login")
   
    }      
      setIsOpen(true);

};

const closeModal = () => {
  const confirmation=
  window.confirm("Are you Really want to cancel booking?")
  if (confirmation) {
   setIsOpen(false);
  setSelectedWork(null);
  setBookingDate('');
  } else {
    setIsOpen(true);
  }

};

  const book=()=>{      
            
    let data = {
      committeDetailId:selectedWork,
      enrollmentDate:bookingDate,
      customerId:sessionStorage.getItem('customerId')
     
    } 
    ApiServices.addRequest(data)
    .then(
      (res)=>{
        const storedToken = sessionStorage.getItem("token");
        if(!storedToken){
          toast.error("user not authenticated! Login first");
          return <Navigate to='/login'/>
       
        }
        if(res.data.success=== true){
        toast(res.data.message)
        nav("/viewHistory")
      }else{
        toast.error(res.data.message)
      }
    }
    ).catch((error)=>{
      toast.error(error.data.message)
      console.log(error);
    })
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setDateError('Date cannot be in the past!');
    } else {
      setDateError('');
      setBookingDate(e.target.value);
    }
  };

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
      <h2 style={{color:"white"}}>Saving Circle</h2>
      <ol>
        <li>
        <Link className="nav-link" to={""}>
              Home/
            </Link>
       
        </li>
        <Link className="nav-link" to={""}>
             Committee Details
            </Link>
      </ol>
    </div>
              </div>
        

        

 <div className="container">
 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data?.filter(el=>el.status==true).map(
                (el,index)=>(
         
      <div class="card m-4" style={{width: "30%",margin:'0 auto'}} key={index}>
  <img class="card-img-top" src={BASE_URL+el.committeTypeId.thumbnail} alt="Card image cap" style={{height:'200px',width:'100%'}}/>
  <div class="card-body">
    <h5 class="card-title">{el.title.toUpperCase()}</h5>

                          
                <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Committee status </span>{el.status==true?'Active':el.status==false?'Inactive':el.status}<br></br>  
                <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Duration(in months) </span> {el.month }<br></br>
                <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Total Members </span> {el.members }

          
              <p>
               {el.description}
              </p>  
               <p>
                Start Month: {formatDate(el.startMonth)}
              </p>
              <p>
               Total Amount: {el?.totalAmount}
              </p> 
              <p>
               Amount PerHead: {el?.perMemberAmount}
              </p> 
  
    <center>
    <button className="btn btn-primary text-light" onClick={(e)=>handleBookClick(el._id)} >Book Now</button>
</center>

<Modal
        isOpen={modalIsOpen}
     
        onRequestClose={closeModal}
        style={customStyles}
      > 
      <div>
      <div className="form-group">
                  <label htmlFor="bookingDate">Date of Booking:</label>
                  <input
                    type="date"
                    id="bookingDate"
                    className="form-control"
                    value={bookingDate}
                    onChange={handleDateChange}
                       
                  />
                </div>
                {dateError && (
        <div className="text-danger">{dateError}</div>
      )}
              </div>                
                <div className="modal-footer gap-5 d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-danger" onClick={closeModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={(e)=>book(el._id)}>Book Now</button>
              </div>

      </Modal>

  </div>
</div>  
        ))}        
      </div> 
 </div>
 </>
        )}
        </>
      
    )
}