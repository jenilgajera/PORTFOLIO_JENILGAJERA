import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import finacialvista from "../img/finacialvista.jpg";
import hotel_managment_system from "../img/hotel_managment_system.png";
import hotel_admin_panel from "../img/adminpanel.jpg";

export const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-5" data-aos="fade-up">
        My Projects
      </h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Project 1 Card */}
        <div className="col" data-aos="fade-up">
          <div className="card shadow-sm">
            <img
              src={finacialvista}
              className="card-img-top"
              alt="Financial Vista"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Financial Vista</h5>
              <p className="card-text">
                A Flutter-based app for managing personal and business finances,
                featuring budget tracking, report generation, and financial insights.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/jenilgajera/Financial_vista"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#financialVistaModal"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 Card */}
        <div className="col" data-aos="fade-up" data-aos-delay="200">
          <div className="card shadow-sm">
            <img
              src={hotel_managment_system}
              className="card-img-top"
              alt="Hotel Management System"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Hotel Management System</h5>
              <p className="card-text">
                A comprehensive system for managing hotel reservations, room
                bookings, and customer data efficiently.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/jenilgajera/hotel_managment_system"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#hotelManagementModal"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 Card */}
        <div className="col" data-aos="fade-up" data-aos-delay="400">
          <div className="card shadow-sm">
            <img
              src={hotel_admin_panel}
              className="card-img-top"
              alt="HMS Admin Panel"
            />
            <div className="card-body text-center">
              <h5 className="card-title">HMS Admin Panel</h5>
              <p className="card-text">
                An admin panel to oversee hotel operations, including staff
                management and analytics.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/jenilgajera/hotel_managment_system/tree/Master/admin"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#hmsAdminModal"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Financial Vista */}
      <div
        className="modal fade"
        id="financialVistaModal"
        tabIndex="-1"
        aria-labelledby="financialVistaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="financialVistaModalLabel">
                Financial Vista
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Financial Vista is a Flutter-based application for managing
                personal and business finances. It features:
              </p>
              <a href="http://financial-vista.vercel.app">SHOW THIS APP AND DOWNLOAD APP FROM THEARE</a>
              <ul>
                <li>Expense tracking and budget management</li>
                <li>Report generation for insights</li>
                <li>Expert financial advice integration</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Hotel Management System */}
      <div
        className="modal fade"
        id="hotelManagementModal"
        tabIndex="-1"
        aria-labelledby="hotelManagementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="hotelManagementModalLabel">
                Hotel Management System
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                The Hotel Management System provides a user-friendly interface
                for managing:
              </p>
              <ul>
                <li>Room bookings and customer details</li>
                <li>Reservation scheduling</li>
                <li>Payment and invoice management</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for HMS Admin Panel */}
      <div
        className="modal fade"
        id="hmsAdminModal"
        tabIndex="-1"
        aria-labelledby="hmsAdminModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="hmsAdminModalLabel">
                HMS Admin Panel
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                The HMS Admin Panel simplifies hotel operations through:
              </p>
              <ul>
                <li>Staff management and role assignments</li>
                <li>Performance tracking and analytics</li>
                <li>Centralized control for hotel activities</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};