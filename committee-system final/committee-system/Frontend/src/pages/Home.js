import React, { useEffect, useState} from 'react'
import { Link , useNavigate, useParams, Navigate} from "react-router-dom"
import ApiServices,{BASE_URL} from '../Api/ApiServices';
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

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);
  const [data,setData]=useState([])
  let [color, setColor] = useState("#2c4964;");

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
        <><> 
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <h2 data-aos="fade-up">Focus On What Matters</h2>
                <blockquote data-aos="fade-up" data-aos-delay={100}>
                  <p></p>
                </blockquote>
                <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                 
                  <Link
                    to="/committee"
                    className="btn-get-started" > <span>Get started</span>
                  </Link>
 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
        <main id="main">
          {/* ======= Why Choose Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Why Choose Us</h2>
              </div>
              <div className="row g-0" data-aos="fade-up" data-aos-delay={200}>
                <div
                  className="col-xl-5 img-bg"
                  style={{ backgroundImage: 'url("assets/img/why-us-bg.jpg")' }}
                />
                <div className="col-xl-7 slides  position-relative">
                  <div className="slides-1 swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="item">
                          <h3 className="mb-3">Let's grow your business together</h3>
                          <p>
                          With our innovative solutions and collaborative approach, we're committed to driving positive change and fostering growth on a global scale.
                          Ready to take the first step towards realizing your dreams? Sign up for free and join the Saving Circle community today!
                          </p>
                        </div>
                      </div>
                      {/* End slide item */}
                      <div className="swiper-slide">
                        <div className="item">
                          <h3 className="mb-3">
                            Unde perspiciatis ut repellat dolorem
                          </h3>
                          <h4 className="mb-3">
                            Amet cumque nam sed voluptas doloribus iusto. Dolorem eos
                            aliquam quis.
                          </h4>
                          <p>
                            Dolorem quia fuga consectetur voluptatem. Earum
                            consequatur nulla maxime necessitatibus cum accusamus.
                            Voluptatem dolorem ut numquam dolorum delectus autem
                            veritatis facilis. Et ea ut repellat ea. Facere est
                            dolores fugiat dolor.
                          </p>
                        </div>
                      </div>
                      {/* End slide item */}
                      <div className="swiper-slide">
                        <div className="item">
                          <h3 className="mb-3">Aliquid non alias minus</h3>
                          <h4 className="mb-3">
                            Necessitatibus voluptatibus explicabo dolores a vitae
                            voluptatum.
                          </h4>
                          <p>
                            Neque voluptates aut. Soluta aut perspiciatis porro
                            deserunt. Voluptate ut itaque velit. Aut consectetur
                            voluptatem aspernatur sequi sit laborum. Voluptas enim
                            dolorum fugiat aut.
                          </p>
                        </div>
                      </div>
                      {/* End slide item */}
                      <div className="swiper-slide">
                        <div className="item">
                          <h3 className="mb-3">
                            Necessitatibus suscipit non voluptatem quibusdam
                          </h3>
                          <h4 className="mb-3">
                            Tempora quos est ut quia adipisci ut voluptas. Deleniti
                            laborum soluta nihil est. Eum similique neque autem ut.
                          </h4>
                          <p>
                            Ut rerum et autem vel. Et rerum molestiae aut sit vel
                            incidunt sit at voluptatem. Saepe dolorem et sed voluptate
                            impedit. Ad et qui sint at qui animi animi rerum.
                          </p>
                        </div>
                      </div>
                      {/* End slide item */}
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                  <div className="swiper-button-prev" />
                  <div className="swiper-button-next" />
                </div>
              </div>
            </div>
          </section>
          {/* End Why Choose Us Section */}
          {/* ======= Our Services Section ======= */}
          <section id="services-list" className="services-list">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Our Committees</h2>
              </div>
              <div className="container">
 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data?.filter(el=>el.status==true).splice(0,3).map(
                (el,index)=>(
         
      <div class="card m-4" style={{width: "20%",margin:'0 auto'}} key={index}>
  <img class="card-img-top" src={BASE_URL+el.committeTypeId.thumbnail} alt="Card image cap" style={{height:'200px',width:'100%'}}/>
  <div class="card-body">
    <h5 class="card-title">{el.title.toUpperCase()}</h5>

                          
                {/* <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Committee status </span>{el.status==true?'Active':el.status==false?'Inactive':el.status}<br></br>   */}
                <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Duration(in months) </span> {el.month }<br></br>
                <span class="badge badge-info text-dark" style={{backgroundColor:'#ACE2E1'}}> Total Members </span> {el.members }


              <p>
               {el.description}
              </p> 
              {/* <p>
               Total Amount: {el?.totalAmount}
              </p> 
              <p>
               Amount PerHead: {el?.perMemberAmount}
              </p>  */}
  
    <center>
    <Link to={'/committee'}>
    <button className="btn btn-primary text-light">Book Now</button>
    </Link>
</center>


  </div>
</div>  
        ))}        
      </div> 
 </div>
            </div>
          </section>
          {/* End Our Services Section */}
          {/* ======= Call To Action Section ======= */}
          <section id="call-to-action" className="call-to-action">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h3>Division of Responsibilities</h3>
                  <p>
                  The committee system divides the responsibilities and tasks of an organization into smaller, specialized groups or committees. Each committee focuses on specific functions, projects, or areas of interest.
                  </p>
                  <Link
                    to="/committee"
                    className="cta-btn"
                  >    
                    Book Now
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
          {/* End Call To Action Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
                  <h3>
                    Powerful Features for <br />
                    Your Business
                  </h3>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                        <span>Division of Responsibilities</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-bar-chart-box-line"
                          style={{ color: "#5578ff" }}
                        />
                        <span>Specialization and Expertise</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-calendar-todo-line"
                          style={{ color: "#e80368" }}
                        />
                        <span>Decision-Making Authority</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-paint-brush-line"
                          style={{ color: "#e361ff" }}
                        />
                        <span>Oversight and Accountability</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-database-2-line"
                          style={{ color: "#47aeff" }}
                        />
                        <span>Efficiency and Focus</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-gradienter-line"
                          style={{ color: "#ffa76e" }}
                        />
                        <span>Representation and Diversity</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-file-list-3-line"
                          style={{ color: "#11dbcf" }}
                        />
                        <span>Flexibility and Adaptability</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                    <div className="col-md-6">
                      <div className="icon-list d-flex">
                        <i
                          className="ri-base-station-line"
                          style={{ color: "#ff5828" }}
                        />
                        <span>Transparency and Communication</span>
                      </div>
                    </div>
                    {/* End Icon List Item*/}
                  </div>
                </div>
                <div
                  className="col-lg-5 position-relative"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="phone-wrap">
                       
                    <img  src="assets/img/coin.avif"  alt="Image"  className="img-fluid"  style={{borderRadius:"15px"}}/>
                  </div>
                </div>
              </div>
            </div>
   
          </section>
 
        </main>

      
      </>
      </>
       )}
       </>
    )
}