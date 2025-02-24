import { useEffect, useState } from "react"
import ApiServices from "../Api/ApiServices";
import { Link,Navigate } from "react-router-dom";
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

export default function Dashboard() {

  const [isLoading, setIsLoading] = useState(true);
  const [appointment,setAppointments]=useState([])
  const [customer,setCustomers]=useState([])
  const [committee,setCommittee]=useState([])
  let [color, setColor] = useState("#2c4964");

  useEffect(()=>{
      let data = {
          status:sessionStorage.getItem.data
      }
      ApiServices.Dashboard(data)
      .then((res)=>{
          console.log(res)

          setAppointments(res.data.totalBookings)
          setCustomers(res.data.totalCustomers)
          setCommittee(res.data.totalCommittee)



          
      }).catch((err)=>{
          console.log(err);
      })
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  },[])

  const storedToken = sessionStorage.getItem("token");
  if(!storedToken){
    toast.error("user not authenticated! Login first");
    return <Navigate to='/login'/>
 
  }
    
    return(
        <>
            {isLoading &&(
<ClipLoader
color={color}
loading={isLoading}
cssOverride={override}
size={100}
aria-label="Loading Spinner"
data-testid="loader"
/>
)}
{!isLoading &&(
      
       <>
      
        <h3 style={{fontSize:"45px",marginTop:"220px",marginBottom:"8px" , marginLeft:"600px"}}>DASHBOARD</h3>
      

        <div  className="container" >
            <div className="row justify-content-center">

                <div className="col-md-3 m-4"data-aos="flip-right">
         <div className="card" style={{width: "18rem" ,boxShadow:"3px 3px", height:'200px'}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px"}}><i class="bi bi-people"style={{marginRight:"10px"}}></i>Total Customers</h5>
           
           <Link className="btn w-100" style={{marginTop:"50px",backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >{customer}</Link> 
        </div>
     </div>
     </div>
     
     <div className="col-md-3 m-4" data-aos="flip-right">
         <div className="card" style={{width: "18rem",boxShadow:"3px 3px", height:'200px'}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px"}}><i class="bi bi-file-earmark-binary"style={{marginRight:"10px"}}></i>Total Committees</h5>
          
           <Link className="btn w-100" style={{marginTop:"50px",backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >{committee}</Link> 
        </div>
     </div>
     </div>

     

     <div className="col-md-3 m-4"data-aos="flip-right">
         <div className="card" style={{width: "18rem",boxShadow:"3px 3px", height:'200px'}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px"}}><i class="bi bi-clock-history"style={{marginRight:"10px"}}></i>Total Bookings</h5>
           
           <Link className="btn w-100" style={{marginTop:"80px",backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >{appointment}</Link> 
        </div>
     </div>
     </div>
     </div>
     </div>
     </>
       )}
      </>


    )
}