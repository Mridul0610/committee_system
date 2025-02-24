
import {Link} from 'react-router-dom'
export default function AdminHeader(){
    return(
    <> 

              
    <header id="header" class="header d-flex align-items-center fixed-top" style={{backgroundColor:'WhiteSmoke'}}>
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        
        <Link
    to="/home"  className="logo d-flex align-items-center"
                  > 
                  <img src="./assets/img/icon222.png" style={{Color:"#56B8E6", marginBottom:"10px"}}/>
                  <h1 class="d-flex align-items-center">Saving Circle</h1>
                  
                  </Link>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
         <nav id="navbar" class="navbar">
           
          <ul>
          <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                 Home
              </Link>
            </li> 

            {/* <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                 About
              </Link>
            </li>  */}
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                Don't Have an Account? Register Here
              </Link>
            </li>
 
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

      
    </header>
    </>
    )
}