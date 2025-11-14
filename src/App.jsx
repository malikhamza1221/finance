import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Sidebar } from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Bank from "./pages/Bank";
import Crypto from "./pages/Crypto";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Sales from "./pages/Sales";
import Project from "./pages/Project";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar setIsOpen={setIsSidebarOpen} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
