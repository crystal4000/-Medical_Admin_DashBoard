import React from "react";
import "../css/patientInfo.css";
import Patient from "../assets/Layer 2@2x.png";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import DownloadIcon from "../assets/downloadIcon.svg";
import { formatDate } from "../utils/functions";
const PatientInfo = ({ patient }) => {
  console.log(patient);
  return (
    <>
      <div className="patient-info py-3">
        <div className="patient d-flex flex-column justify-content-center align-items-center">
          <img
            alt="profile-pic"
            src={Patient}
            className="d-inline-block"
            width={150}
            height={150}
          />
          <p className="mt-2 mb-0">{patient?.name}</p>
        </div>

        <div className="patient-data mt-3">
          <div className="d-flex align-items-center mb-3">
            <img
              alt="icon"
              src={BirthIcon}
              className="d-inline-block"
              width={30}
              height={30}
            />
            <div className="d-flex flex-column ms-2">
              <p className="mb-2">Date of Birth</p>
              <span>{formatDate(patient?.date_of_birth)}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img
              alt="icon"
              src={FemaleIcon}
              className="d-inline-block"
              width={30}
              height={30}
            />
            <div className="d-flex flex-column ms-2">
              <p className="mb-2">Gender</p>
              <span>{patient?.gender}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img
              alt="icon"
              src={PhoneIcon}
              className="d-inline-block"
              width={30}
              height={30}
            />
            <div className="d-flex flex-column ms-2">
              <p className="mb-2">Contact Info</p>
              <span>{patient?.phone_number}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img
              alt="icon"
              src={PhoneIcon}
              className="d-inline-block"
              width={30}
              height={30}
            />
            <div className="d-flex flex-column ms-2">
              <p className="mb-2">Emergency Contacts</p>
              <span>{patient?.emergency_contact}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img
              alt="icon"
              src={InsuranceIcon}
              className="d-inline-block"
              width={30}
              height={30}
            />
            <div className="d-flex flex-column ms-2">
              <p className="mb-2">Insurance Provider</p>
              <span>{patient?.insurance_type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="patient-lab mt-3 py-3 px-2">
        <p className="mb-0"> Lab Results</p>
        <div className="patient-lab-scroll mt-2">
          {patient?.lab_results?.map((result, index) => (
            <div
              className="d-flex justify-content-between align-items-center mb-1 p-2"
              key={index}
            >
              <span>{result}</span>
              <img
                alt="icon"
                src={DownloadIcon}
                className="d-inline-block"
                width={15}
                height={15}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientInfo;
