import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jenil from "../img/jenil.jpg"; // Image path
import Lottie from "react-lottie";
import githubAnimationData from "../icon/github.json"; // GitHub animation JSON
import linkedinAnimationData from "../icon/linkdin.json"; // LinkedIn animation JSON
import twitterAnimationData from "../icon/twitter.json"; // Twitter animation JSON
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: githubAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const linkedinOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedinAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const twitterOptions = {
    loop: true,
    autoplay: true,
    animationData: twitterAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      {/* Main content */}
      <div
        id="Home"
        className="row align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        {/* Left Section: Introduction */}
        <div className="col-lg-6 col-md-8 col-12 text-center text-lg-start">
          <h1
            className="display-4 fw-bold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            HEY, I'M{" "}
            <span
              className="jenilgajera hover-effect"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              JENIL GAJERA
            </span>
          </h1>
          <p
            className="lead text-secondary mt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            A Frontend-focused Web Developer building the Frontend of Websites
            and Web Applications that lead to the success of the overall
            product.
          </p>

          <Link
            href="#projects"
            className="btn btn-warning text-gradient btn-lg mt-4 mt-sm-5 w-45 w-md-auto"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            to="/projects"
          >
            VIEW PROJECTS
          </Link>
        </div>

        {/* Right Section: Profile Image */}
        <div
          className="col-lg-6 col-md-4 col-12 text-center mt-9 mt-lg-0"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <img
            src={jenil}
            alt="Developer"
            className="img-fluid mb-4 rounded-circle"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>

      {/* Social Media Icons: Fixed at the bottom-left corner */}
      <div
        className="position-fixed bottom-0 end-0 mb-4 ms-3"
        style={{ zIndex: 1000 }} // Ensure the icons are always on top
      >
        <div className="d-flex flex-column align-items-center">
          <a
            href="https://github.com/jenilgajera"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-3 rounded-circle d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "60px",
              height: "60px",
              fontSize: "20px",
            }}
          >
            <Lottie options={defaultOptions} height={40} width={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/jenil-gajera-6b8b16285"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-muted mx-3 rounded-circle d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "60px",
              height: "60px",
              fontSize: "30px",
            }}
          >
            <Lottie options={linkedinOptions} height={40} width={40} />
          </a>
          <a
            href="https://twitter.com/jenilgajera"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info mx-3 rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "60px",
              height: "60px",
              fontSize: "20px",
            }}
          >
            <Lottie options={twitterOptions} height={40} width={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
