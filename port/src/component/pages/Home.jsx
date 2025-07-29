import "bootstrap/dist/css/bootstrap.min.css";
import jenil from "../img/jenil.jpg"; // Profile image
import Lottie from "react-lottie";
import githubAnimationData from "../icon/github.json";
import linkedinAnimationData from "../icon/linkdin.json";
import twitterAnimationData from "../icon/twitter.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home = () => {
  const cardRef = useRef(null);
  const heartRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: false, mirror: true });

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX + 10}px`;
        cursorRef.current.style.top = `${e.clientY + 10}px`;
      }
    };

    const scaleUp = () => {
      if (cursorRef.current) cursorRef.current.style.scale = 3;
    };

    const scaleDown = () => {
      if (cursorRef.current) cursorRef.current.style.scale = 1;
    };

    const animateHeart = () => {
      if (heartRef.current) {
        heartRef.current.style.scale = 1;
        heartRef.current.style.opacity = 1;

        setTimeout(() => {
          if (heartRef.current) {
            heartRef.current.style.scale = 0;
            heartRef.current.style.opacity = 0;
          }
        }, 350);
      }
    };

    document.body.addEventListener("mousemove", moveCursor);
    cardRef.current?.addEventListener("mouseover", scaleUp);
    cardRef.current?.addEventListener("mouseleave", scaleDown);
    cardRef.current?.addEventListener("dblclick", animateHeart);

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      cardRef.current?.removeEventListener("mouseover", scaleUp);
      cardRef.current?.removeEventListener("mouseleave", scaleDown);
      cardRef.current?.removeEventListener("dblclick", animateHeart);
    };
  }, []);

  // Lottie options
  const githubOptions = {
    loop: true,
    autoplay: true,
    animationData: githubAnimationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  const linkedinOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedinAnimationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  const twitterOptions = {
    loop: true,
    autoplay: true,
    animationData: twitterAnimationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <>
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          zIndex: 111,
          position: "absolute",
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          transition: "0s",
          mixBlendMode: "difference",
          pointerEvents: "none",
        }}
      ></div>

      {/* Main Container */}
      <div className="container" style={{ minHeight: "100vh" }}>
        <div
          id="Home"
          className="row align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          {/* Left: Intro */}
          <div className="col-lg-6 col-md-8 col-12 text-center text-lg-start">
            <h1
              className="display-4 fw-bold"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              HEY, I AM{" "}
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
              to="/projects"
              className="btn btn-warning text-gradient btn-lg mt-4 mt-sm-5"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
            >
              VIEW PROJECTS
            </Link>
          </div>

          {/* Right: Profile Image */}
          <div
            ref={cardRef}
            className="card col-lg-6 col-md-4 col-12 d-flex justify-content-center align-items-center text-center mt-5 mt-lg-0"
            data-aos="fade-in"
            data-aos-delay="300"
            style={{
              border: "none",
              background: "transparent",
              position: "relative",
            }}
          >
            <i
              ref={heartRef}
              className="heart ri-heart-3-fill"
              style={{
                opacity: "0",
                scale: "0",
                fontSize: "10vh",
                color: "red",
                transition: "0.25s",
                position: "absolute",
              }}
            ></i>
            <img
              src={jenil}
              alt="Developer"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "80%",
                height: "60%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className="position-fixed bottom-0 end-0 mb-4 me-3"
          style={{ zIndex: 1000 }}
        >
          <div className="d-flex flex-column align-items-center">
            <a
              href="https://github.com/jenilgajera"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <Lottie options={githubOptions} height={40} width={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/jenil-gajera-6b8b16285"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-muted rounded-circle d-flex justify-content-center align-items-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <Lottie options={linkedinOptions} height={40} width={40} />
            </a>
            <a
              href="https://twitter.com/jenilgajera"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <Lottie options={twitterOptions} height={40} width={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
