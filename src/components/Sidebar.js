import React from "react";
import Search from "../assets/searchIcon.svg";
import "../css/sidebar.css";
import Ellipsis from "../assets/ellipsis_hori.svg";

const Sidebar = ({ patients, onSelectPatient, selectedPatient }) => {
  return (
    <div className="col-3 d-none d-lg-block sidebar-container">
      <div className="side-header d-flex justify-content-between align-items-center mt-2">
        <h4 className="m-0 p-0">Patients</h4>
        <img src={Search} alt="search-icon" width={18} height={18} />
      </div>

      <div className="side-body sidebar-scroll my-3">
        <ul>
          {patients.map((patient, index) => (
            <li
              className={`d-flex justify-content-between align-items-center mb-3 p-2 ${
                selectedPatient === patient ? "selected-patient" : "bg-light"
              }`}
              key={index}
              onClick={() => onSelectPatient(patient)}
              style={{ cursor: "pointer" }}
            >
              <div className="profile d-flex justify-content-center align-items-center">
                <img
                  src={patient.profile_picture}
                  alt="overview-icon"
                  width={45}
                  height={45}
                />
                <div className="d-flex flex-column ms-2">
                  <p className="mb-0">{patient.name}</p>
                  <span>
                    {patient.gender}, {patient.age}
                  </span>
                </div>
              </div>
              <img src={Ellipsis} alt="ellipsis-icon" width={18} height={18} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
