import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../utils/api";
import PatientInfo from "../components/PatientInfo";
import PatientDiagnosis from "../components/PatientDiagnosis";

const PatientData = () => {
  const [patientData, setPatientData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setPatientData(data);
        if (data.length > 0) {
          setSelectedPatient(data[3]);
        }
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <>
      <Navigation />

      <main className="container-fluid mt-4">
        <div className="row ">
          <Sidebar
            patients={patientData}
            onSelectPatient={handlePatientSelect}
            selectedPatient={selectedPatient}
          />
          <div className="patient-info-container col-12 col-md-3 mb-3">
            <PatientInfo patient={selectedPatient} />
          </div>
          <div className="patient-diagnosis-container col-12 col-lg-6 col-md-9">
            <PatientDiagnosis patient={selectedPatient} />
          </div>
        </div>
      </main>
    </>
  );
};

export default PatientData;
