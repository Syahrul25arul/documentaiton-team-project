import "./App.css";
import Login from "pages/Auth/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Auth/Register/register";
import RegisterPrimer from "pages/Auth/Register/register-primer";
import Dashboard from "pages/Auth/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-primer" element={<RegisterPrimer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
