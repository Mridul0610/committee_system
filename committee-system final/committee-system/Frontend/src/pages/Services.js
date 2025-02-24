
export default function Contact(){
    return(
      <>
          {/* <div
      className="breadcrumbs d-flex align-items-center"
      style={{ backgroundImage: 'url("assets/img/hero-bg.jpg")', marginTop:"100px", height:"400px" }}
    >
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2 style={{color:"white"}}>SERVICES</h2>
        <ol>
          <li>
            <a href="home">Home</a>
          </li>
          <li> <a href="login">Login</a></li>
        </ol>
      </div>
    </div>   */}
    <>  
      <section id="services-list" className="services-list" style={{marginTop:"100px"}}>
      
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase" style={{ color: "#f57813" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist" style={{ color: "#15a04a" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Dolor Sitema
                  </a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-bar-chart" style={{ color: "#d90769" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Sed ut perspiciatis
                  </a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-binoculars" style={{ color: "#15bfbc" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Magni Dolores
                  </a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-brightness-high" style={{ color: "#f5cf13" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Nemo Enim
                  </a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-calendar4-week" style={{ color: "#1335f5" }} />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Eiusmod Tempor
                  </a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* End Our Services Section */}
      {/* ======= Services Cards Section ======= */}
      <section id="services-cards" className="services-cards">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div
                      className="card-bg"
                      style={{ backgroundImage: "url(assets/img/cards-1.jpg)" }}
                    />
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                      <p>
                        Fuga in dolorum et iste et culpa. Commodi possimus nesciunt
                        modi voluptatem placeat deleniti adipisci. Cum delectus
                        doloribus non veritatis. Officia temporibus illo magnam.
                        Dolor eos et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div
                      className="card-bg"
                      style={{ backgroundImage: "url(assets/img/cards-2.jpg)" }}
                    />
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">
                        Possimus ut sed velit assumenda
                      </h4>
                      <p>
                        Sunt deserunt maiores voluptatem autem est rerum perferendis
                        rerum blanditiis. Est laboriosam qui iste numquam laboriosam
                        voluptatem architecto. Est laudantium sunt at quas aut hic.
                        Eum dignissimos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div
                      className="card-bg"
                      style={{ backgroundImage: "url(assets/img/cards-3.jpg)" }}
                    />
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">
                        Error beatae dolor inventore aut
                      </h4>
                      <p>
                        Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim
                        molestiae facilis numquam quae quaerat ipsam omnis. Neque
                        debitis ipsum at architecto officia laboriosam odit. Ut sunt
                        temporibus nulla culpa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div
                      className="card-bg"
                      style={{ backgroundImage: "url(assets/img/cards-4.jpg)" }}
                    />
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">
                        Expedita voluptas ut ut nesciunt
                      </h4>
                      <p>
                        Aut est quidem doloremque voluptatem magnam quis excepturi
                        vero quia. Eum eos doloremque architecto illo at beatae
                        dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid
                        ea dolores libero nobis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item */}
          </div>
        </div>
      </section>
      {/* End Services Cards Section */}
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Testimonials</h2>
          </div>
          <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                    eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore eram
                    velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint
                    quorum nulla quem veniam duis minim tempor labore quem eram duis
                    noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore illum
                    veniam.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                    veniam tempor noster veniam enim culpa labore duis sunt culpa
                    nulla illum cillum fugiat legam esse veniam culpa fore nisi
                    cillum quid.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
      {/* End #main */}
      
      
    </>
    
      </>
      
      
      
      
      
      
      )
      
    
    
    
    }

