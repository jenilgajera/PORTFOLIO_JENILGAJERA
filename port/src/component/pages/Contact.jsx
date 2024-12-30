import React, { useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

AOS.init(); // Initialize AOS

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      serviceType: '',
      message: '',
    });
  };

  return (
    <div className="container mb-4 mt-3 mt-md-0">
      <div className="row">
        {/* right Side: Get in Touch Cards */}
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0" data-aos="fade-right">
          <h3 className="text-center mb-4">Get in Touch</h3>

          <div className="card mb-3 shadow-sm border-light" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-body d-flex align-items-center">
              <i className="bi bi-envelope-fill text-primary fs-2 me-3"></i>
              <div>
                <h5 className="card-title">Email</h5>
                <p className="card-text">jgajera441@rku.ac.in</p>
              </div>
            </div>
          </div>

          <div className="card mb-3 shadow-sm border-light" data-aos="zoom-in" data-aos-delay="400">
            <div className="card-body d-flex align-items-center">
              <i className="bi bi-geo-alt-fill text-primary fs-2 me-3"></i>
              <div>
                <h5 className="card-title">Location</h5>
                <p className="card-text">Ploat vistar, Balel Pipaliya, Amreli, Gujarat, 365460</p>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-light" data-aos="zoom-in" data-aos-delay="600">
            <div className="card-body d-flex align-items-center">
              <i className="bi bi-telephone-fill text-primary fs-2 me-3"></i>
              <div>
                <h5 className="card-title">Phone</h5>
                <p className="card-text">+91 5482959299</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-12 col-md-6 col-lg-8" data-aos="fade-right">
          <h3 className="text-center mb-4">Contact Form</h3>
          <form onSubmit={handleSubmit} data-aos="fade-up">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="serviceType" className="form-label">Type of Services</label>
              <select
                className="form-select"
                id="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="full-stack-web-development">Full Stack Web Development</option>
                <option value="app-development">App Development</option>
                <option value="freelance-work">Freelance Work</option>
              </select>
            </div>

            <div className="mb-3" data-aos="fade-up" data-aos-delay="600">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-100 btn btn-primary btn-lg"
              style={{
                background: "linear-gradient(to right, #007BFF, #6c5fff)",
                borderColor: "transparent",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease",
              }}
           
          
             
            >
              Send Me Message
            </button>
          </form>
        </div>
      </div>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
        aria-hidden="true"
        data-aos="fade-in"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Thank you! Your message has been successfully sent.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
