import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen bg-gray-200 font-AlbertSans">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
