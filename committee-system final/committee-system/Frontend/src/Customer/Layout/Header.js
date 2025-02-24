import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Header()
{
  const nav = useNavigate()
  let token = sessionStorage.getItem('token')
 
 const logout=()=>{
   toast.success("Logout successfully!!!")
   sessionStorage.clear()
   nav("/login")
 }
    return(
    <> 
       
    <header id="header" class="header d-flex align-items-center fixed-top" style={{backgroundColor:'whitesmoke'}}>
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link
    to="/home"  className="logo d-flex align-items-center"
                  > 
                  <img src="./assets/img/icon222.png" style={{Color:"#56B8E6", marginBottom:"10px"}}></img>
                  <h1 class="d-flex align-items-center">Saving Circle</h1>
                  
                  </Link>

  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list" ></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
        <nav id="navbar" class="navbar">
        <ul>
                <li className="nav-item" >
              <Link className="nav-link" to={"/"}>
              Home
              </Link>
            </li> 
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>  */}
              <li className="nav-item" >
              <Link className="nav-link" to={"/committee"}>
              All Committee
              </Link>
             </li> 

             <li className="nav-item" >
              <Link className="nav-link" to={"/viewHistory"}>
              All Requests
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

            
          <li className="dropdown">
          <a href="#">
              <i class="bi bi-person-circle" style={{fontSize:'30px'}}></i>
              {/* <i className="bi bi-chevron-down dropdown-indicator" /> */}
          </a>
          <ul>
          <li>
                <Link to={"/chnagePassword"}>
                <a href="#">My Profile</a>
                </Link>
          </li>
          
        <li>
           <Link to={"/login"}>
        <a href="" className="nav-item nav-link" onClick={logout}>
          Logout
        </a></Link>
        </li>
      
       
        </ul>
        </li>
        <li>
         <Link to={"/my-chats"}>
            <a href="" className="nav-item nav-link">
            <i class="bi bi-chat-left-text-fill" style={{fontSize:'25px'}}></i>
            </a>
        </Link>
          </li>
        </>
          )} 
             
          </ul>
         
        </nav>
  
      </div>
      
    </header>
    
    </>
    )
}