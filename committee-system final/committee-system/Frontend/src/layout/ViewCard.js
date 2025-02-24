import React from 'react'

import { Link } from 'react-router-dom'


export default function ViewCard(){ 
 

    
    return(<>
    
   
  

    
        <div  className="container"style={{marginTop:"120px",marginBottom:"50px"}} >
       <center> <div style={{fontSize:"60px",marginTop:"60px",marginBottom:"20px" }}><h1 >View Types</h1></div></center>
            <div className="row">
                <div className="col-md-3 mb-5"data-aos="zoom-in">
                
         <div className="card" style={{width: "18rem" ,height:"18rem",boxShadow:"3px 3px", backgroundColor:" whiteSmoke", }}>
             <div className="card-body"> 
            
           <h5 className="card-title"style={{fontSize:"28px",display:"flex",  gap:"10px"}}><i class="bi bi-card-heading"  ></i>Slip Type</h5>
              <p style={{fontSize:"18px"}}>
             
              Slip type committee is done by choosing the slips by all the members . Click to register to be a member.
              <br></br>
              <i class="bi bi-check-circle-fill" style={{marginRight:"6px", color:"#56B8E6"}}></i>
             <b>Start Date is 20/05/2024.</b> 
              <br></br>
              <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b> Total Members=100.</b> <br></br>
             
              </p>
              <Link className="btn  shadow w-100" style={{backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >Register</Link> 
            
            
        </div>
     </div>
     </div>
    
     <div className="col-md-3 mb-5"data-aos="zoom-in">
         <div className="card" style={{width: "18rem", height:"18rem",boxShadow:"3px 3px", backgroundColor: " whiteSmoke"}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px",display:"flex", gap:"10px"}}><i class="bi bi-person-lock" ></i>Auction Type</h5>
              <p style={{fontSize:"18px"}}>
                Auction type committee is done by verbal auction by all the members. Click to register to be a member.
                <br></br>
              <i class="bi bi-check-circle-fill" style={{marginRight:"6px", color:"#56B8E6"}}></i>
               <b>Start Date is 20/07/2024.</b> 
              <br></br>
              <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Total Members = 50.</b>  </p>
              <Link className="btn  shadow w-100" style={{backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >Register</Link> 
             
        </div>
     </div>

    
     </div>
     <div className="col-md-3 mb-5"data-aos="zoom-in">
     <div className="card" style={{width: "18rem",height:"18rem",boxShadow:"3px 3px", backgroundColor: " whiteSmoke"}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px", marginRight:"10px"}}><i class="bi bi-wallet-fill" style={{marginRight:"10px"}}></i>Gold Type</h5>
              <p  style={{fontSize:"18px"}}>
              Under this plan you are required to make 11 advance installments .Click to register to be a member.
              <br></br> 
              <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Start Date is 15/06/2024.</b>
               <br></br> 
           <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Total Members = 70.</b>
              </p>
              <Link className="btn  shadow w-100" style={{backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >Register</Link> 
            
        </div>
   
     </div></div>
        
     <div className="col-md-3 mb-5"data-aos="zoom-in">
         <div className="card" style={{width: "18rem",height:"18rem",boxShadow:"3px 3px", backgroundColor: " whiteSmoke"}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px"}}><i class="bi bi-people-fill" style={{marginRight:"20px"}}></i>Joint Type</h5>
              <p  style={{fontSize:"18px"}}> 
              Under this plan you are both required to make 11 monthly installments .Click to register to be a member.
              <br></br> 
              <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Start Date is 20/06/2024.</b>
               <br></br> 
           <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Total Members = 60.</b>
              </p>
           
             <Link className="btn  shadow w-100" style={{backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >Register</Link> 
        </div>
     </div>
     </div>
    

     <div className="col-md-3 mb-5"data-aos="zoom-in">
         <div className="card" style={{width: "18rem",height:"18rem",boxShadow:"3px 3px", backgroundColor: " whiteSmoke"}}>
             <div className="card-body">
           <h5 className="card-title"style={{fontSize:"28px"}}><i class="bi bi-currency-rupee"style={{marginRight:"9px"}}></i>Regular pays</h5>
              <p  style={{fontSize:"18px"}}>
              Under this plan you are required to make payments on daily basis .Click to register to be a member.
              <br></br> 
              <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Start Date is 20/05/2024.</b>
               <br></br> 
           <i class="bi bi-check-circle-fill " style={{marginRight:"6px", color:"#56B8E6"}}></i>
              <b>Total Members = 100.</b>
              </p>
              <Link className="btn  shadow w-100" style={{backgroundColor:"#56B8E6",fontSize:"20px"}} to={"#"} >Register</Link> 
          
        </div>
     </div>
     </div>
    
    
  
     
     </div>
     </div>
    
 
        </>
       

   
   )


    
}