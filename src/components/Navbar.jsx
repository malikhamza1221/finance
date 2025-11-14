import { useLocation } from "react-router-dom";
import { Home, BarChart2, CreditCard, Bitcoin, Calendar, MessageSquare, User, Briefcase, Menu } from "lucide-react";

const menuIcons = {
  "/": <Home size={20} />,
  "/charts": <BarChart2 size={20} />,
  "/bank": <CreditCard size={20} />,
  "/crypto": <Bitcoin size={20} />,
  "/calendar": <Calendar size={20} />,
  "/chat": <MessageSquare size={20} />,
  "/profile": <User size={20} />,
  "/sales": <Briefcase size={20} />,
  "/project": <Briefcase size={20} />,
};

const menuNames = {
  "/": "Dashboard",
  "/charts": "Charts",
  "/bank": "Bank",
  "/crypto": "Crypto",
  "/calendar": "Calendar",
  "/chat": "Chat & Messages",
  "/profile": "User Profile",
  "/sales": "Sales CRM",
  "/project": "Project",
};

export default function Navbar({ setIsOpen }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-[#051441] border-b border-gray-700 p-4 flex justify-between items-center shadow-4xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(true)} className="md:hidden p-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-all duration-300">
          <Menu size={24} className="text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transform transition duration-300">
            {menuIcons[path] || <Home size={20} className="text-white" />}
          </div>
          <h1 className="text-2xl font-bold text-white relative">
            {menuNames[path] || "Page"}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col text-right">
          <span className="text-white font-semibold">Malik Hamza</span>
          <span className="text-gray-300 text-sm">Admin</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer">
          MK
        </div>
      </div>
    </div>
  );
}
