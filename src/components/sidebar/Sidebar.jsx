import { NavLink } from "react-router-dom";
import { Home, BarChart2, CreditCard, Bitcoin, Calendar, MessageSquare, User, Briefcase, LayoutDashboard,  } from "lucide-react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const menuItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Charts", path: "/charts", icon: BarChart2 },
  { name: "Bank", path: "/bank", icon: CreditCard },
  { name: "Crypto", path: "/crypto", icon: Bitcoin },
  { name: "Calendar", path: "/calendar", icon: Calendar },
  { name: "Chat & Messages", path: "/chat", icon: MessageSquare },
  { name: "User Profile", path: "/profile", icon: User },
  { name: "Sales CRM", path: "/sales", icon: Briefcase },
  { name: "Project", path: "/project", icon: Briefcase },
];

export function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className={`
        fixed top-0 left-0 z-40 bg-linear-to-b from-[#051441] to-[#051441] text-white min-h-screen p-4
        shadow-4xl transition-transform duration-300
        w-64
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative md:w-64
      `}>
<div className="flex items-center  mb-6">
  <div className="flex items-center gap-3 ">
    {/* Dashboard Icon with gradient */}
    <LayoutDashboard
      size={32} 
      className=" bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 transform transition duration-300 hover:scale-110"
    />

    {/* Text */}
    <h2 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500">
      MaLiK
    </h2>
  </div>

  {/* Close button only for mobile */}
  <button 
    className="md:hidden p-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-all duration-300" 
    onClick={() => setIsOpen(false)}
  >
    ×
  </button>
</div>

        {/* Navigation */}
        <nav className="space-y-3 mt-12">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition-all duration-300
                   hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-xl hover:scale-105 transform
                   ${isActive ? "bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 shadow-2xl text-black font-semibold" : "text-white"}`
                }
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={item.name}
              >
                <Icon size={24} className="text-white hover:text-yellow-400 transition-all duration-300 drop-shadow-lg" />
                <span className="font-medium text-lg">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

     
      </div>
    </>
  );
}
