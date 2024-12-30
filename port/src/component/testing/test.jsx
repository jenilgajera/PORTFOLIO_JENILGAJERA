import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "../icon/Backend.json"; // Replace with your backend animation file
import {
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaPython,
  FaAws,
  FaJava,
} from "react-icons/fa";

export const Skill = () => {
  return (
    <div className="container my-5">
      {/* Heading Section */}
      <h1 className="text-center display-4 fw-bold mb-4">
        My <span className="text-primary">Skill</span>
      </h1>

      {/* Frontend Skills Section */}
      <div className="row mt-5">
        <div className="col-12 col-md-6 text-center">
          {/* Left Side: Lottie Animation */}
          <Player
            autoplay
            loop
            src={lottieAnimation}
            className="img-fluid" // Bootstrap class for responsive image
            style={{ maxWidth: "60%", height: "auto" }} // Makes sure the Lottie animation resizes correctly
          />
        </div>

        <div className="col-12 col-md-6">
          {/* Right Side: Backend Skills Section */}
          <h2 className="mb-4 text-center text-md-start">
            <span className="text-secondary">~ Backend Skills</span>
          </h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            {/* Card: Node.js */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaNodeJs className="display-6 text-success mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Node.js</h6>
                  <p className="card-text small">
                    JavaScript runtime for server-side development.
                  </p>
                </div>
              </div>
            </div>
            {/* Card: Database */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaDatabase className="display-6 text-info mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Database</h6>
                  <p className="card-text small">SQL & NoSQL databases.</p>
                </div>
              </div>
            </div>
            {/* Card: Docker */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaDocker className="display-6 text-primary mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Docker</h6>
                  <p className="card-text small">
                    Containerization for app deployment.
                  </p>
                </div>
              </div>
            </div>
            {/* Card: Python */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaPython className="display-6 text-dark mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Python</h6>
                  <p className="card-text small">Programming language for backend services.</p>
                </div>
              </div>
            </div>
            {/* Card: AWS */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaAws className="display-6 text-warning mb-2 icon-hover" />
                  <h6 className="card-title mb-1">AWS</h6>
                  <p className="card-text small">Cloud services for scalable infrastructure.</p>
                </div>
              </div>
            </div>
            {/* Card: Java */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaJava className="display-6 text-danger mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Java</h6>
                  <p className="card-text small">Enterprise-level backend development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          {/* Left Side: Backend Skills Cards */}
          <h2 className="mb-4 text-center text-md-start">
            <span className="text-secondary">~ Backend Skills</span>
          </h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            {/* Card: Node.js */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaNodeJs className="display-6 text-success mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Node.js</h6>
                  <p className="card-text small">
                    JavaScript runtime for server-side development.
                  </p>
                </div>
              </div>
            </div>
            {/* Card: Database */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaDatabase className="display-6 text-info mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Database</h6>
                  <p className="card-text small">SQL & NoSQL databases.</p>
                </div>
              </div>
            </div>
            {/* Card: Docker */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaDocker className="display-6 text-primary mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Docker</h6>
                  <p className="card-text small">
                    Containerization for app deployment.
                  </p>
                </div>
              </div>
            </div>
            {/* Card: Python */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaPython className="display-6 text-dark mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Python</h6>
                  <p className="card-text small">Programming language for backend services.</p>
                </div>
              </div>
            </div>
            {/* Card: AWS */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaAws className="display-6 text-warning mb-2 icon-hover" />
                  <h6 className="card-title mb-1">AWS</h6>
                  <p className="card-text small">Cloud services for scalable infrastructure.</p>
                </div>
              </div>
            </div>
            {/* Card: Java */}
            <div className="col">
              <div className="card skill-card h-100">
                <div className="card-body text-center p-3">
                  <FaJava className="display-6 text-danger mb-2 icon-hover" />
                  <h6 className="card-title mb-1">Java</h6>
                  <p className="card-text small">Enterprise-level backend development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          {/* Right Side: Lottie Animation for Backend */}
          <Player
            autoplay
            loop
            src={lottieAnimation}
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
