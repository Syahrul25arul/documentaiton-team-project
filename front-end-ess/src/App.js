import "./App.css";
import Login from "pages/Auth/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Auth/Register/register";
import Dashboard from "pages/Auth/dashboard/dashboard";
import Timesheet from "pages/Auth/timesheet/timesheet";
import FormTimesheet from "pages/Auth/timesheet/form-timesheet";

function App() {
  console.log(process.env.REACT_APP_SERVER_ADDRESS);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-primer" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/formtimesheet" element={<FormTimesheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
