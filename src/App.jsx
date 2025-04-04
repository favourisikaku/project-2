import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import { UserContext } from "./Context/AppContext";

import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div className="App">
      <UserContext>
        <Routes>
          <Route path="/" element={<Dashboard />} />{" "}
        </Routes>
      </UserContext>
    </div>
  );
};

export default App;
