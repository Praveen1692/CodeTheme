import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mklb.css";
import "./css/swiper-bundle.min.css";
import "./css/materialdesignicons.min.css";
import "./css/style.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Projects", "Testimonial", "Team"];

  const designs = [
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/1.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/2.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/1.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/3.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/5.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
    {
      image:
        "https://coderthemes.com/dojek/layouts/images/agency/project-img/4.jpg", // Replace with actual image URL
      title: "The Language of Designs",
      category: "Design",
    },
  ];

  const testimonials = [
    {
      quote:
        "Excellent support for a tricky issue related to our customization of the template.",
      name: "Brightlight Books",
      role: "Ubold Customer",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-1.jpg", // Replace with actual image URL
    },
    {
      quote:
        "This kit provides many options which I can use everyday. It's great work.",
      name: "Echineo",
      role: "Ubold Customer",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-2.jpg", // Replace with actual image URL
    },
    {
      quote:
        "This is a very extensive web app kit that can serve all kinds of purposes.",
      name: "Aebra Schultz",
      role: "Designer",
      image: "https://coderthemes.com/dojek/layouts/images/users/user-2.jpg", // Replace with actual image URL
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

      <section class="section" id="projects">
        <div class="container">
          <div class="row justify-content-center mb-5">
            <div class="col-md-8 col-lg-6 text-center">
              <h6 class="subtitle">Our Projects</h6>
              <h2 class="title">
                A great design brings thousands of great results.
              </h2>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              <div
                className="btn-group"
                role="group"
                aria-label="Gallery Filters"
              >
                <button type="button" className="btn btn-primary active">
                  All Items
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Design
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Creative
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Digital
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Photography
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              {designs.map((design, index) => (
                <div key={index} className="col-md-4 p-3">
                  <div className="card border-0">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="card-img-top rounded"
                      style={{
                        objectFit: "cover",
                        height: "300px",
                        backgroundColor:
                          index === 0
                            ? "#00B4D8"
                            : index === 1
                              ? "#E9ECEF"
                              : "#FFC300",
                      }}
                    />
                    <div className="card-body px-0">
                      <h5 className="card-title">{design.title}</h5>
                      <p className="card-text text-muted">{design.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testi-bg" id="testimonial">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 col-lg-6 text-center">
              <h6 className="subtitle text-dark">Testimonial</h6>
              <h2 className="title">Client Feedback</h2>
              <p className="text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut consequuntur magni dolores.
              </p>
            </div>
          </div>

          <div className="container-fluid bg-light py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center p-5 position-relative">
                    <div className="row align-items-center">
                      <div className="col-3 text-end">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="rounded-circle"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            transition: "opacity 0.5s ease-in-out",
                          }}
                        />
                      </div>
                      <div className="col-9 text-start">
                        <blockquote className="blockquote mb-0">
                          <p
                            className="fs-5 fst-italic"
                            style={{ transition: "opacity 0.5s ease-in-out" }}
                          >
                            "{testimonials[activeIndex].quote}"
                          </p>
                          <footer className="blockquote-footer">
                            {testimonials[activeIndex].name},
                            <cite className="text-muted">
                              {" "}
                              {testimonials[activeIndex].role}
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="mt-4 d-flex justify-content-center">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`btn rounded-circle mx-2 ${index === activeIndex ? "btn-primary" : "btn-light"
                            }`}
                          style={{
                            width: "10px",
                            height: "10px",
                            padding: 0,
                            border: "none",
                            transition: "background-color 0.3s",
                          }}
                          onClick={() => handleDotClick(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/1.png",
                name: "Ronnie Cooper",
                role: "Graphic Designer, USA",
              },
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/1.png",
                name: "Adela White",
                role: "Web Designer, USA",
              },
              {
                img: "https://coderthemes.com/dojek/layouts/images/agency/team/1.png",
                name: "Ronnie Cooper",
                role: "Graphic Designer, USA",
              },
            ].map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="team-bg rounded text-center">
                  <img
                    src={`https://coderthemes.com/dojek/layouts/images/agency/team/1.png`}
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
