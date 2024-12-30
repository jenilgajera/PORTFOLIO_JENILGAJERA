import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import frontend from "../icon/Front.json";
import backend from "../icon/Backend.json";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

export const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default animation duration
  }, []);

  return (
    <div className="container my-5">
      {/* Heading Section */}
      <h1
        style={{
          color: "#007BFF",
          background: "linear-gradient(to right, #007BFF, #6c5fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          textShadow: "2px 2px 1px rgba(0, 0, 0, 0.2)",
        }}
        className="text-center display-4 fw-bold mb-4"
        data-aos="fade-up"
      >
        My Skillset,{" "}
        <span
          style={{
            color: "#007BFF",
            background: "linear-gradient(to right, #007BFF, #6c5fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            textShadow: "3px 3px 2px rgba(0, 0, 0, 0.2)",
          }}
          className="text-primary"
        >
          Your Solution
        </span>
      </h1>

      {/* Frontend Skills */}
      <div className="row mt-5">
        <div className="col-12 col-md-6 text-center" data-aos="fade-right">
          {/* Frontend Animation */}
          <Player
            autoplay
            loop
            src={frontend}
            className="img-fluid"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-md-6" data-aos="fade-right">
          <h2 className="mb-4 text-center text-md-start">
            <span className="text-secondary">~ Frontend Skills</span>
          </h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            {/* Frontend Skill Cards */}
            {[
              { icon: <FaHtml5 />, title: "HTML", text: "Markup language for web pages.", color: "primary" },
              { icon: <FaCss3Alt />, title: "CSS", text: "Styling for web pages.", color: "success" },
              { icon: <FaJsSquare />, title: "JavaScript", text: "Programming language for interactivity.", color: "warning" },
              { icon: <FaBootstrap />, title: "Bootstrap", text: "CSS framework for responsive design.", color: "purple" },
              { icon: <FaGitAlt />, title: "Git", text: "Version control system.", color: "danger" },
              { icon: <FaReact />, title: "React", text: "JavaScript library for UI.", color: "info" },
            ].map((skill, index) => (
              <div className="col" key={index} data-aos="zoom-in">
                <div className="card skill-card h-100">
                  <div className="card-body text-center p-3">
                    {React.cloneElement(skill.icon, {
                      className: `display-6 text-${skill.color} mb-2 icon-hover`,
                    })}
                    <h6 className="card-title mb-1">{skill.title}</h6>
                    <p className="card-text small">{skill.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="row mt-5">
        <div className="col-12 col-md-6" data-aos="fade-right">
          <h2 className="mb-4 text-center text-md-start">
            <span className="text-secondary">~ Backend Skills</span>
          </h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            {/* Backend Skill Cards */}
            {[
              { icon: <FaPhp />, title: "PHP", text: "Server-side scripting language.", color: "primary" },
              { icon: <FaNodeJs />, title: "Node.js", text: "JavaScript runtime for backend.", color: "success" },
              { icon: <FaServer />, title: "ASP.NET Core", text: "Cross-platform web framework for building modern applications.", color: "danger" },
              { icon: <FaDatabase />, title: "MySQL", text: "Relational database management system.", color: "info" },
              { icon: <SiMongodb />, title: "MongoDB", text: "NoSQL database for scalability.", color: "green" },
              { icon: <SiFirebase />, title: "Firebase", text: "Cloud-based database and services.", color: "warning" },
            ].map((skill, index) => (
              <div className="col" key={index} data-aos="zoom-in">
                <div className="card skill-card h-100">
                  <div className="card-body text-center p-3">
                    {React.cloneElement(skill.icon, {
                      className: `display-6 text-${skill.color} mb-2 icon-hover`,
                    })}
                    <h6 className="card-title mb-1">{skill.title}</h6>
                    <p className="card-text small">{skill.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6 text-center" data-aos="fade-right">
          {/* Backend Animation */}
          <Player
            autoplay
            loop
            src={backend}
            className="img-fluid"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </div>
      </div>

      <style>
        {`
          @media (max-width: 576px) {
            .mt-5 {
              margin-top: 3rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};
