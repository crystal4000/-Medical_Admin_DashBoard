import React from "react";
import "../css/nav.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import TestLogo from "../assets/TestLogo.svg";
import Profile from "../assets/profile.png";
import Settings from "../assets/settingsIcon.svg";
import Ellipsis from "../assets/ellipsis.svg";
import OverView from "../assets/overviewIcon.svg";
import Patients from "../assets/patientsIcon.svg";
import Schedule from "../assets/scheduleIcon.svg";
import Message from "../assets/messageIcon.svg";
import Transaction from "../assets/transactionIcon.svg";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="cs-navbar mt-2 justify-content-between mx-2 px-2 bg-white"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img alt="Logo" src={TestLogo} className="d-inline-block" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-between">
          <Nav className="justify-content-center mx-auto">
            <Nav.Link
              href="#overview "
              className=" d-flex justify-content-center align-items-center me-2"
            >
              <img src={OverView} alt="overview-icon" width={16} height={17} />{" "}
              <span className="ms-1">Overview</span>
            </Nav.Link>
            <Nav.Link
              href="#patients"
              active
              className="d-flex justify-content-center align-items-center me-2"
            >
              <img src={Patients} alt="patients-icon" width={16} height={17} />
              <span className="ms-1"> Patients</span>
            </Nav.Link>
            <Nav.Link
              href="#schedule"
              className=" d-flex justify-content-center align-items-center me-2"
            >
              <img src={Schedule} alt="schedule-icon" width={16} height={17} />
              <span className="ms-1">Schedule</span>
            </Nav.Link>
            <Nav.Link
              href="#message"
              className=" d-flex justify-content-center align-items-center me-2"
            >
              <img src={Message} alt="message-icon" width={16} height={17} />
              <span className="ms-1"> Message</span>
            </Nav.Link>
            <Nav.Link
              href="#transaction"
              className="d-flex justify-content-center align-items-center "
            >
              <img
                src={Transaction}
                alt="transaction-icon"
                width={16}
                height={17}
              />
              <span className="ms-1">Transaction</span>
            </Nav.Link>
          </Nav>

          <div className="profile d-flex align-items-center">
            <img alt="profile-pic" src={Profile} className="d-inline-block" />
            <div className="d-flex flex-column ms-2">
              <p className="mb-0">Dr. Jose Simmons</p>
              <span>Medical Practitioner</span>
            </div>
            <img
              alt="settings-icon"
              src={Settings}
              className="d-inline-block mx-3"
            />
            <img
              alt="ellipsis-icon"
              src={Ellipsis}
              className="d-inline-block"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
