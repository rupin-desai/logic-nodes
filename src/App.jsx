import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CRM from "./pages/CRM";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#282B4C]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/crm" element={<CRM />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
