import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the CSS file for AOS

export const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <section className="bsb-service-7 py-5 py-xl-8">
      {/* Header Section */}
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">
              Services
            </h3>
            <h2 className="display-5 mb-5 mb-xl-9 text-center">
              We offer premier services where excellence meets affordability.
            </h2>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container-fluid bg-light border shadow">
              <div className="row">
                {/* Full Stack Web Development Card */}
                <div
                  className="col-12 col-md-4 p-0"
                  data-aos="fade-up"
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <i
                        className="bi bi-laptop text-primary mb-4"
                        style={{ fontSize: "56px" }}
                      ></i>
                      <h4 className="fw-bold text-uppercase mb-4">
                        Full Stack Web Development
                      </h4>
                      <p className="mb-4 text-secondary">
                        Crafting cutting-edge, responsive websites with robust
                        backend integration for superior functionality and
                        scalability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* App Development Card */}
                <div
                  className="col-12 col-md-4 p-0 border-top border-bottom border-start border-end"
                  data-aos="fade-up"
                  data-aos-delay="200" // Delay added for staggered animation
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <i
                        className="bi bi-phone-fill text-primary mb-4"
                        style={{ fontSize: "56px" }}
                      ></i>
                      <h4 className="fw-bold text-uppercase mb-4">
                        App Development
                      </h4>
                      <p className="mb-4 text-secondary">
                        Engineering innovative mobile applications with
                        intuitive designs and flawless performance to enhance
                        user engagement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Freelance Work Card */}
                <div
                  className="col-12 col-md-3 p-0"
                  data-aos="fade-up"
                  data-aos-delay="400" // Delay added for staggered animation
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <i
                        className="bi bi-briefcase-fill text-primary mb-4"
                        style={{ fontSize: "56px" }}
                      ></i>
                      <h4 className="fw-bold text-uppercase mb-4">
                        Freelance Work
                      </h4>
                      <p className="mb-4 text-secondary">
                        Open to freelance opportunities! Share your project
                        requirements, and I’ll deliver tailored, high-quality
                        solutions with precision and professionalism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
