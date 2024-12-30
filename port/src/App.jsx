import React from "react";
import Navbar from "./component/inc/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./component/pages/Home";
import About from "./component/pages/About";
import { Skill } from "./component/pages/Skill";
import { Project } from "./component/pages/Project";
import { Service } from "./component/pages/Service";
import { Contact } from "./component/pages/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./component/inc/footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skill />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      {/* Render additional screens only on HomePage */}
      {location.pathname === "/" && (
        <>
          <About />
          <Skill />
          <Project />
          <Service />
          <Contact />
          <Footer/>
        </>
      )}
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
