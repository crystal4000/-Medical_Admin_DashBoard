import { Routes, Route } from "react-router-dom";
import PatientData from "./pages/PatientData.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PatientData />} />
      </Routes>
    </div>
  );
}

export default App;
