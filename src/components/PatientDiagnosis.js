import React from "react";
import { monthAbbreviations } from "../utils/functions";
import "../css/patientDiagnosis.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GoDotFill, GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import HeartIcon from "../assets/HeartBPM.svg";
import TemperatureIcon from "../assets/temperature.svg";
import RespiratoryIcon from "../assets/respiratory rate.svg";
import { Table } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PatientDiagnosis = ({ patient }) => {
  if (!patient || !patient.diagnosis_history) {
    return null;
  }
  const firstSixMonths = patient?.diagnosis_history.slice(0, 6);
  const monthsWithYear = firstSixMonths.map(
    (entry) => `${monthAbbreviations[entry.month]} ${entry.year}`
  );

  const systolicValues = firstSixMonths.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicValues = firstSixMonths.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const data = {
    labels: monthsWithYear,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.1,
        pointStyle: "circle",
        backgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        fill: false,
        borderColor: "#8C6FE6",
        tension: 0.1,
        pointStyle: "circle",
        backgroundColor: "#8C6FE6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Patient Diagnosis Data",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: "Month",
        },
        ticks: {
          color: "#072635",
          font: {
            size: 12,
            family: "'Manrope', sans-serif",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "Value",
        },
        ticks: {
          color: "#072635",
          font: {
            size: 12,
            family: "'Manrope', sans-serif",
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <>
      <div className="chart-container bg-white p-2">
        <h4 className="title m-0 p-0 mb-3 mx-2"> Diagnosis History</h4>
        <div className="chart row py-2 mx-2">
          <div className="col-12 col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="mb-0">Blood Pressure</h4>
              <span className="mb-0">
                Last 6 months <FaAngleDown color="#072635" className="ms-1" />
              </span>
            </div>
            <Line data={data} options={options} />
          </div>
          <div className="chart-details col-12 col-md-3 m-0 p-0">
            <p className="mb-1">
              <GoDotFill color="#C26EB4" /> Systolic
            </p>
            <h4 className="mb-1">
              {patient?.diagnosis_history[0].blood_pressure.systolic.value}
            </h4>
            <span>
              <GoTriangleUp color="#072635" className="me-1" />
              {
                patient?.diagnosis_history[0].blood_pressure.systolic.levels
              }{" "}
            </span>

            <hr />

            <p className="mb-1">
              {" "}
              <GoDotFill color="#8C6FE6" /> Diastolic
            </p>
            <h4 className="mb-1">
              {patient?.diagnosis_history[0].blood_pressure.diastolic.value}
            </h4>
            <span>
              <GoTriangleDown color="#072635" className="me-1" />
              {
                patient?.diagnosis_history[0].blood_pressure.diastolic.levels
              }{" "}
            </span>
          </div>
        </div>

        <div className="row w-100 mx-auto mt-4">
          <div className="col mb-3 mx-2 p-2 respiratory">
            <img
              alt="ellipsis-icon"
              src={RespiratoryIcon}
              className="d-inline-block"
            />
            <p className="mb-0 mt-2">Respiratory Rate</p>
            <h4 className="mb-3">
              {patient?.diagnosis_history[0].respiratory_rate.value} bpm
            </h4>
            <span>{patient?.diagnosis_history[0].respiratory_rate.levels}</span>
          </div>
          <div className="col mb-3 mx-2 p-2 temperature">
            <img
              alt="ellipsis-icon"
              src={TemperatureIcon}
              className="d-inline-block"
            />
            <p className="mb-0 mt-2">Temperature</p>
            <h4 className="mb-3">
              {patient?.diagnosis_history[0].temperature.value} °F
            </h4>
            <span>{patient?.diagnosis_history[0].temperature.levels}</span>
          </div>
          <div className="col mb-3 mx-2 p-2 heart-rate">
            <img
              alt="ellipsis-icon"
              src={HeartIcon}
              className="d-inline-block"
            />
            <p className="mb-0 mt-2">Heart Rate</p>
            <h4 className="mb-3">
              {patient?.diagnosis_history[0].heart_rate.value} bpm
            </h4>
            <span>
              {" "}
              <GoTriangleDown color="#072635" className="me-1" />
              {patient?.diagnosis_history[0].heart_rate.levels}
            </span>
          </div>
        </div>
      </div>

      <div className="diagnostic_list bg-white w-100 mt-4 p-2">
        <h4 className="title m-0 p-0 mb-3 mx-2"> Diagnosis List</h4>

        <div className="table-wrapper">
          <Table borderless>
            <thead>
              <tr>
                <th className="text-start">Problem/Diagnosis</th>
                <th className="text-start">Description</th>
                <th className="text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              {patient?.diagnostic_list.map((item, index) => (
                <tr key={index}>
                  <td className="text-start">{item.name}</td>
                  <td className="text-start">{item.description}</td>
                  <td className="text-start">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PatientDiagnosis;
