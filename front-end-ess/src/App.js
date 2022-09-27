import "./App.css";
import Login from "pages/Auth/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Auth/Register/register";
import Dashboard from "pages/Auth/dashboard/dashboard";

function App() {
  console.log(process.env.REACT_APP_SERVER_ADDRESS);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-primer" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
