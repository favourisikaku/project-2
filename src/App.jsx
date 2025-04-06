import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";

import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Analytics />} />{" "}
        <Route path="/analytics" element={<Dashboard />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
