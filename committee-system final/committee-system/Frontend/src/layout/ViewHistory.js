import { Link } from "react-router-dom"

export default function ViewHistory(){
   
    return(
        <>
          <div className="container position-relative d-flex flex-column align-items-center">
        <h2 style={{color:"white"}}>ADMIN PAGE</h2>
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
               
            <center>
        

 <div className="container" style={{marginTop:"50px"}} >
  <div className="row">
    <div
    className="col-md-7 mx-auto shadow p-4 mb-5 mt-5"
    data-aos="fade-left"
    data-aos-delay={100}
    >
    <div >
      <h2 className="mb-3 bg-white text-center px-3">History</h2>

    </div>
    <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
      <thead>
        <tr>
          <th scope="col" style={{backgroundColor:"#56B8E6"}}>Sr.No.</th>
          <th scope="col" style={{backgroundColor:"#56B8E6" }}>Committee Details</th>
          <th scope="col" style={{backgroundColor:"#56B8E6" }}>Date of Request</th> 
          <th scope="col" style={{backgroundColor:"#56B8E6" }}>Status</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Slip Type</td>
          <td ><input type="date" className="form-control"/></td>
           <td>Success </td>
           
           
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td> </td>
          <td> </td>
        </tr>
       
      </tbody>
    </table>

  </div>
 </div>
 </div>
</center>
        </>
    )
}