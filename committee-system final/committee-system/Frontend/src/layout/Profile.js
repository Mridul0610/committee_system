
import { Link } from "react-router-dom"
export default function Profile(){
 
  
        return(
            <>
              <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("assets/img/hero-bg.jpg")' , marginTop:"100px", height:"400px"}}
    >
      
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2 style={{color:"white"}}> PROFILE</h2>
        <ol>
          <li>
          <Link className="nav-link" to={"/home"}>
                Home/
              </Link>
         
          </li>
          <Link className="nav-link" to={" "}>
                Contact
              </Link>
            
        </ol>
      </div>
                </div>
              <center>
           
           
              <div className="container">
  <div className="row">
    <div
    className="col-md-6 mx-auto shadow p-4 mb-5 mt-5"
    data-aos="fade-left"
    data-aos-delay={100}
    >
    <div className="text-center wow fadeInUp">
      <h2 className="mb-3 bg-white text-center px-3 "><i class="bi bi-person-check"style={{marginRight:"10px"}}></i>Profile</h2>

    </div>
    <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>Name</th>
          <td style={{textAlign:"center"}}>Bhupinder Kumar</td>
        
         
        
          
        </tr>
        <tr>
          <th style={{textAlign:"center"}}>Email</th>
          <td style={{textAlign:"center"}}>Kumar12@gmail.com</td>
        
         
        
          
        </tr>
        <tr>
          <th style={{textAlign:"center"}}>Contact</th>
          <td style={{textAlign:"center"}}>9876543210</td>
        
         
        
          
        </tr>
        <tr>
          <th style={{textAlign:"center"}}>Address</th>
          <td style={{textAlign:"center"}}>S.B.S.Nagar,Punjab</td>
        
         
        </tr>
        
          
        </thead>
       
    </table>
    <button type="submit" className="btn" style={{ backgroundColor:"#56B8E4"}} >UPDATE</button>
   
  </div>
 </div>
 </div>
             
         </center>
               </>
             
    )
}
