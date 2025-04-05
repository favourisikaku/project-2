import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";

import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
