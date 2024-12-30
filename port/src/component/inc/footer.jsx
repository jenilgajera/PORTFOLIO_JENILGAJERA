// src/components/Footer.js
import React from "react";
import yourImage from "../img/jenil.jpg"; // Adjust the path as per your folder structure


const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        
        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Copyright Section */}
        <div className="text-center">
          <p>&copy; 2024 jess. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;