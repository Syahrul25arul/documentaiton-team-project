import "./App.css";
import Login from "pages/Auth/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Auth/register/register";
import RegisterPrimer from "pages/Auth/register/register-primer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-primer" element={<RegisterPrimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
