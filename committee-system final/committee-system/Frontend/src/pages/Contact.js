
import { Link } from "react-router-dom"
export default function Contact(){
  return(
    <>
   <div
      className="breadcrumbs d-flex align-items-center"
      
      style={{ backgroundImage: 'url("assets/img -header.jpg")', marginTop:"100px", height:"400px" }}
    >
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2 style={{color:"white"}}> CONTACT</h2>
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
  {/* ======= Contact Section ======= */}
  <form className="shadow p-4 mx-auto">
    <section id="contact" className="contact">
      <div className="container position-relative" data-aos="fade-up">
        <div className="row gy-4 d-flex justify-content-end">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay={100}>
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h4>Location:</h4>
                <p>Punjab</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0" />
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
            <form
             
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                    style={{borderRadius:"8px"}}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                    style={{borderRadius:"8px"}}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                  style={{borderRadius:"8px"}}
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                  style={{borderRadius:"8px"}}
                />
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
             
             <div class="mb-3 row">
        <div class="col-sm-9">
        <button type="submit" className="btn  btn-style mt-3 mb-2 ml-5" style={{width:"220px",marginLeft:"200px",backgroundColor:"#56B8E6", fontSize:"20px"}}>SEND MESSAGE</button>
        </div>
        </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section></form>
    {/* End Contact Section */}

 

</>

  )
}
