import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader(){
  const nav = useNavigate()
  let token = sessionStorage.getItem('token')
 
 const logout=()=>{
   toast.success("Logout successfully!!!")
   sessionStorage.clear()
   nav("/login")
 }
    return(
    <> 

              
    <header id="header" class="header d-flex align-items-center fixed-top" style={{backgroundColor:'WhiteSmoke'}}>
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        
        <Link
    to="/home"  className="logo d-flex align-items-center"
                  > 
                  <img src="/assets/img/icon222.png" style={{Color:"#56B8E6", marginBottom:"10px"}}/>
                  <h1 class="d-flex align-items-center">Saving Circle</h1>
                  
                  </Link>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
         <nav id="navbar" class="navbar">
           
          <ul>

          <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                DashBoard
              </Link>
            </li> 

          <li class="dropdown"> <Link  to={"#"}>
          <span>Committee Type</span>
          <i class="bi bi-chevron-down dropdown-indicator"></i>
         
             
              </Link>
              
               
               
                <ul>
                <li className="nav-item" >
              <Link className="nav-link" to={"/admin/addCommittee"}>
                Add Type
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/manageCommittee"}>
                View Type
              </Link>
            </li> 
             
                </ul>
              </li>

              <li class="dropdown"> <Link  to={"#"}>
          <span>Committee Details</span>
          <i class="bi bi-chevron-down dropdown-indicator"></i>
         
             
              </Link>
              
               
               
                <ul>
                <li className="nav-item" >
              <Link className="nav-link" to={"/admin/addDetails/"}>
                Add Details
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/manageDetails/"}>
                View Details
              </Link>
            </li> 
             
                </ul>
              </li>
           
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/list"}>
                 Member's list
              </Link>
            </li>  */}
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/viewHistory"}>
                Request
              </Link>
            </li>
       
            {!token ? (
          <li>
        <Link to={"/login"}>
        <a href="" className="nav-item nav-link">
          Login
        </a>
        </Link>
        </li>
          ):(
          <>

        <li>
        <a href="" className="nav-item nav-link" onClick={logout}>
          Logout
        </a>
        </li>      
         <li>
         <Link to={"/admin/my-chats"}>
            <a href="" className="nav-item nav-link">
            <i class="bi bi-chat-left-text-fill" style={{fontSize:'20px'}}></i>
            </a>
        </Link>
          </li>
         </>
        )}
          </ul>
         
      
          
        </nav> 
         {/* <nav id="navbar" class="navbar">
          <ul>
            <li><a href="home" class="active">Home </a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="admin">Admin</a></li>
            <li><a href="login">Login</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav> */}
  
  
      </div>
      <div>
      <Link className="nav-link" to={"/admin"}>
      <i class="fa fa-user" aria-hidden="true" style={{fontSize:"28px",marginLeft:"20px",marginTop:"3px"}}> 
         </i>
              </Link>
       
        </div>
      
    </header>
    </>
    )
}