import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Player } from "@lottiefiles/react-lottie-player";
import skillsAnimation from "../icon/sk.json";
import projectsAnimation from "../icon/project.json";
import contributionsAnimation from "../icon/contribution.json";
import resume from "../pdf/jenilgajera.pdf"; // Import the resume file

const About = () => {
  return (
    <div className="container my-5">
      <div
        className="text-center mb-5"
        data-aos="fade-up"
        data-aos-offset="200"
      >
        <h1 style={{
                color: "#007BFF",
                background: "linear-gradient(to right, #007BFF, #6c5fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }} className="display-4 fw-bold">About Me</h1>
        <hr
          className="mx-auto"
          style={{ height: "2px", backgroundColor: "#333", maxWidth: "50%" }}
        />
      </div>

      <div className="row">
        {/* Left Section */}
        <div
          className="col-12 col-md-6 mb-4"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
        >
          <p
            className="lead mb-4 px-3 text-center text-md-start"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Hello! I am{" "}
            <strong
              style={{
                color: "#007BFF",
                background: "linear-gradient(90deg, #6c5fff, #7f7bfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Jenil Gajera
            </strong>
            , a passionate developer focused on creating web and mobile
            applications that deliver impactful user experiences.
          </p>

          <p
            className="lead mb-4 px-3 text-center text-md-start"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Skilled in problem-solving, user-centric designs, and modern
            development practices. I enjoy mentoring and contributing to
            open-source projects.
          </p>

          {/* Download Resume Button */}
          <div className="text-center text-md-start">
            <a
              href={resume}
              download
              className="btn btn-primary btn-lg mt-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                background: "linear-gradient(90deg, #6c5fff, #7f7bfe)",
                borderColor: "transparent",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: "white",
                transition: "transform 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.background =
                  "linear-gradient(90deg, #5a4eed, #6a69e4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.background =
                  "linear-gradient(90deg, #6c5fff, #7f7bfe)";
              }}
            >
              <i className="bi bi-download me-2"></i>Download Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6">
          <div
            className="card mb-3 p-2"
            style={{ maxWidth: "90%" }}
            data-aos="fade"
            data-aos-easing="ease-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
          >
            <div
              className="card-body d-flex align-items-center py-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Player
                autoplay
                loop
                src={skillsAnimation}
                style={{ width: 50, height: 50 }}
              />
              <div className="ms-2">
                <h6 className="card-title mb-1">8+ Coding Skills</h6>
                <p className="card-text fs-6 mb-0">
                  Expert in Flutter, HTML, CSS, JavaScript, React, Node.js, and
                  more.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card mb-3 p-2"
            style={{ maxWidth: "90%" }}
            data-aos="fade"
            data-aos-easing="ease-in"
          >
            <div
              className="card-body d-flex align-items-center py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Player
                autoplay
                loop
                src={contributionsAnimation}
                style={{ width: 50, height: 50 }}
              />
              <div className="ms-2">
                <h6 className="card-title mb-1">Open-Source Contributions</h6>
                <p className="card-text fs-6 mb-0">
                  Active contributor to open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card mb-3 p-2"
            style={{ maxWidth: "90%" }}
            data-aos="fade"
            data-aos-easing="ease-in"
          >
            <div
              className="card-body d-flex align-items-center py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Player
                autoplay
                loop
                src={projectsAnimation}
                style={{ width: 50, height: 50 }}
              />
              <div className="ms-2">
                <h6 className="card-title mb-1">10+ Projects Built</h6>
                <p className="card-text fs-6 mb-0">
                  Developed apps like a financial manager and portfolio website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
