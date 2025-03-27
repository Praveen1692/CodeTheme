import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mklb.css";
import "./css/swiper-bundle.min.css";
import "./css/materialdesignicons.min.css";
import "./css/style.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLink, setActiveLink] = useState("Home");
  const [activeFilter, setActiveFilter] = useState("All");

  const navLinks = ["Home", "About", "Projects", "Testimonial", "Team"];

  const designs = [
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/1.jpg",
      title: "Creative Design",
      category: "Design",
    },
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/2.jpg",
      title: "Digital Marketing",
      category: "Digital",
    },
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/3.jpg",
      title: "Photography Art",
      category: "Photography",
    },
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/4.jpg",
      title: "Creative Artwork",
      category: "Creative",
    },
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/5.jpg",
      title: "Web Design",
      category: "Design",
    },
    {
      image: "https://coderthemes.com/dojek/layouts/images/agency/project-img/6.jpg",
      title: "Digital Content",
      category: "Digital",
    },
  ];

  const testimonials = [
    {
      quote: "Excellent work! The team delivered beyond our expectations.",
      name: "John Anderson",
      role: "CEO, TechCorp",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-1.jpg",
    },
    {
      quote: "The design quality and innovative solutions provided.",
      name: "Sarah Williams",
      role: "Marketing Director",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-2.jpg",
    },
    {
      quote: "Outstanding service and results! ",
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-3.jpg",
    },
    {
      quote: "Excellent work out.",
      name: "John Anderson",
      role: "CEO, TechCorp",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-1.jpg",
    },
    {
      quote: "The design quality and innovative ",
      name: "Sarah Williams",
      role: "Marketing Director",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-2.jpg",
    },
    {
      quote: "Outstanding service and results! .",
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-3.jpg",
    },
    
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Initialize Swiper for testimonials
    if (window.Swiper) {
      new window.Swiper(".clients-slider", {
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    }

    // Placeholder for other script initializations (e.g., counter, filter)
    // You may need to check the actual content of counter.init.js, filter.init.js, etc.
  }, []);

  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="60">
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg fixed-top" style={{
        background: "white",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://coderthemes.com/dojek/layouts/images/logo-dark.png" alt="Logo" height="30" />
          </a>

          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link} className="nav-item">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`nav-link ${activeLink === link ? "active" : ""}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section
        className="hero-agency"
        id="home"
        style={{
          background: "linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
             
              <h1
                className="hero-title fw-bold mb-4"
                style={{ fontSize: "48px", lineHeight: "1.2", color: "#2c3e50" }}
              >
                We are Creative Web  <span style={{ color: "#1ce1ac" }}>Design Agency</span>
              </h1>
              <p
                className="text-muted mb-5 fs-18"
                style={{ fontSize: "18px", lineHeight: "1.8", color: "#7f8c8d" }}
              >
                Aenean vulputate eleifend tellus eenean a ligula porttitor consequat vitae eleifend ac enim eliquam ante dapibus.
              </p>
              <div className="d-flex align-items-center mb-4 mb-lg-0">
                <a
                  href="#"
                  className="btn btn-gradient-success rounded-pill me-4"
                  style={{
                    background: "linear-gradient(45deg, #28a745, #34c759)",
                    padding: "12px 30px",
                    fontSize: "16px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(40, 167, 69, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Learn More <i className="mdi mdi-chevron-right ms-1"></i>
                </a>
                
                <div
                  className="modal fade bd-example-modal-lg"
                  id="watchvideomodal"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div
                      className="modal-content video-modal"
                      style={{ borderRadius: "15px", overflow: "hidden" }}
                    >
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        style={{ position: "absolute", top: "10px", right: "10px" }}
                      ></button>
                      <video id="VisaChipCardVideo" className="w-100" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://coderthemes.com/dojek/layouts/images/heros/hero-2-img.png"
                alt=""
                className="img-fluid"

                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <ul className="list-inline text-center mt-5 pt-5">
                {["dribbble", "envato", "insta", "bootstrap"].map((brand, index) => (
                  <li key={index} className="list-inline-item mx-3">
                    <img
                      src={`https://coderthemes.com/dojek/layouts/images/agency/brand-logo/${brand}.png`}
                      alt={brand}
                      height="38"
                      style={{
                        filter: "grayscale(50%)",
                        transition: "filter 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "grayscale(0%)";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "grayscale(50%)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-light" id="about" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 col-lg-6 text-center">
              <h6
                className="subtitle"
                style={{ color: "#007bff", fontWeight: 600, letterSpacing: "1px" }}
              >
                What We Do
              </h6>
              <h2
                className="title"
                style={{ fontSize: "36px", color: "#2c3e50", marginBottom: "20px" }}
              >
                The things motivates me is commen form of motivation.
              </h2>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "1", title: "Strategy & Research" },
              { icon: "2", title: "Design & Development" },
              { icon: "3", title: "Management & Marketing" },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="mt-5 p-4"
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div className="about-icon ms-3">
                    <img
                      src={`https://coderthemes.com/dojek/layouts/images/agency/icon/${item.icon}.png`}
                      alt=""
                      className="img-fluid"
                      style={{ maxWidth: "60px" }}
                    />
                  </div>
                  <h5 className="fs-22 mt-4 pt-3 mb-3" style={{ color: "#34495e" }}>
                    {item.title}
                  </h5>
                  <p className="text-muted" style={{ lineHeight: "1.7" }}>
                    Et harum quidem as rerum facilis us est et distinctio nam libero temp soluta nobis esteligendi optio.
                  </p>
                  <a href="#" className="text-danger" style={{ fontWeight: 500 }}>
                    More About <i className="mdi mdi-arrow-right fs-14 ms-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
<section className="section bg-light" id="projects" style={{ padding: "80px 0" }}>
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-lg-7 text-center">
        <h4 className="text-muted">Our Projects</h4>
        <h2 className="fw-bold mb-5">A great design brings thousands of great results.</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button
            type="button"
            className={`btn ${activeFilter === "All" ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`btn ${activeFilter === "Design" ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setActiveFilter("Design")}
          >
            Design
          </button>
          <button
            type="button"
            className={`btn ${activeFilter === "Creative" ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setActiveFilter("Creative")}
          >
            Creative
          </button>
          <button
            type="button"
            className={`btn ${activeFilter === "Digital" ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setActiveFilter("Digital")}
          >
            Digital
          </button>
          <button
            type="button"
            className={`btn ${activeFilter === "Photography" ? "btn-primary" : "btn-outline-secondary"}`}
            onClick={() => setActiveFilter("Photography")}
          >
            Photography
          </button>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        {designs
          .filter((design) => activeFilter === "All" || design.category === activeFilter)
          .map((design, index) => (
            <div key={index} className="col-md-4 p-3">
              <div className="card border-0 project-card">
                <img
                  src={design.image}
                  alt={design.title}
                  className="card-img-top rounded"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                  }}
                />
                <div className="card-body px-0">
                  <h5 className="card-title mb-0">{design.title}</h5>
                  <p className="text-muted">{design.category}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="section bg-ll" id="testimonial" style={{ padding: "80px 0" }}>
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-lg-7 text-center">
        <h4 className="text-muted">Testimonials</h4>
        <h2 className="fw-bold">What Our Clients Say</h2>
        <h3 className="text-muted">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni dolores.
        </h3>
      </div>
    </div>

    {/* Carousel */}
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
          >
            <div className="row">
              {testimonials
                .slice(groupIndex * 3, groupIndex * 3 + 3)
                .map((testimonial, index) => (
                  <div key={index} className="col-lg-4">
                    <div className="card border-0 shadow-sm p-4 mb-4" style={{ height: "350px" ,width:"350px"}}>
                      <div className="text-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            border: "3px solid #1ce1ac",
                            padding: "3px",
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                          <i
                            className="mdi mdi-format-quote-open text-primary h3 d-block mb-2"
                            style={{ color: "#1ce1ac !important" }}
                          ></i>
                          {testimonial.quote}
                        </p>
                        <h5 className="mb-1" style={{ color: "#2c3e50" }}>
                          {testimonial.name}
                        </h5>
                        <p className="text-muted mb-0">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Dots Indicator */}
      <div className="text-center mt-4">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`btn rounded-circle mx-2 ${
              index === activeIndex ? "btn-primary" : "btn-light"
            }`}
            style={{
              width: "12px",
              height: "12px",
              border: "none",
              padding: "0",
            }}
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to={index}
          />
        ))}
      </div>
    </div>
  </div>
</section>
















      {/* Counter Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row" id="counter">
            {[
              { value: "825", label: "Global Brands" },
              { value: "1800+", label: "Happy Clients" },
              { value: "599+", label: "Creative Idea" },
              { value: "2000+", label: "User clients" },
            ].map((counter, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="text-center my-3">
                  <div className="counter-content">
                    <h2>
                      <span
                        className="counter_value"
                        data-target={counter.value.replace("+", "")}
                      >
                        {counter.value}
                      </span>
                    </h2>
                    <p className="counter-name text-muted mb-0 text-uppercase">
                      {counter.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 col-lg-6 text-center">
              <h6 className="subtitle">Team</h6>
              <h2 className="title">Amazing Team</h2>
              <p className="text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut consequuntur magni dolores.
              </p>
            </div>
          </div>

          <div className="row mb-5 pb-5">
            {[
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/1.png",
                name: "Adela White",
                role: "Web Designer, USA",
              },
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/4.png",
                name: "Ronnie Cooper",
                role: "Graphic Designer, USA",
              },
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/3.png",
                name: "Adela White",
                role: "Web Designer, USA",
              },
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/2.png",
                name: "Ronnie Cooper",
                role: "Graphic Designer, USA",
              },
            ].map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="team-bg rounded text-center">
                  <img
                    src={member.img}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h5 className="fs-18 mb-0 mt-3">{member.name}</h5>
                <p className="text-muted fs-15 mb-4 mb-lg-0">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

















      {/* Footer Section */}
      <section className="footer bg-light">
        <div className="cta-content">
          <div className="container">
            <div className="row bg-dark cta-bg p-5 rounded align-items-center">
              <div className="col-lg-6">
                <h3 className="text-white fs-26 mb-3">
                  Subscribe our newsletter
                </h3>
                <p className="text-white opacity-75 mb-4 mb-lg-0">
                  Et harum quidem rerum facilis est us et expedita distinctio am
                  libero tempore cum soluta nobis.
                </p>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="subscribe-form">
                  <i className="mdi mdi-email-outline form-icon"></i>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Email Address"
                  />
                  <a href="#" className="btn btn-primary form-btn">
                    Get Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center text-lg-start">
              <div className="footer-logo mb-4">
                <a href="#">
                  <img
                    src="https://coderthemes.com/dojek/layouts/images/logo-dark.png"
                    alt=""
                  />
                </a>
              </div>
              <a href="#" className="text-muted">
                Hello@coderthemes.com
              </a>
              <p className="text-muted">+01 ( 1234 567 890 )</p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <h5 className="fs-22 mb-3 fw-semibold">About Us</h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="#" className="footer-link">
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Copyright
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Add other footer columns as needed */}
                <div className="col-sm-6 col-md-3">
                  <h5 className="fs-22 mb-3 fw-semibold">Our Information</h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="#" className="footer-link">
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Store Hours
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-3">
                  <h5 className="fs-22 mb-3 fw-semibold">My Account</h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="#" className="footer-link">
                        Press Inquiries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Social Media Directories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Images & B-roll
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Speaker Requests
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-3">
                  <h5 className="fs-22 mb-3 fw-semibold">Policy</h5>
                  <ul className="list-unstyled footer-nav">
                    <li>
                      <a href="#" className="footer-link">
                        Application Security
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Softwere Principles
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Unwanted Softwere
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-link">
                        Risponsible Supply Chain
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <a
        href="#"
        onClick={() => window.scrollTo(0, 0)}
        className="back-to-top-btn btn btn-dark"
        id="back-to-top"
      >
        <i className="mdi mdi-chevron-up"></i>
      </a>
    </div>
  );
};

export default App;
