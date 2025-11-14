import React from "react";
import { MessageCircle, Users, Mail, Wifi } from "lucide-react";

const chatUsers = [
  { name: "Alice", message: "Can you check the report?", time: "10:30 AM" },
  { name: "Bob", message: "Meeting rescheduled to 3 PM", time: "09:45 AM" },
  { name: "Charlie", message: "Project update: All done!", time: "Yesterday" },
];

const COLORS = [
  "from-blue-500 to-blue-400",
  "from-green-500 to-green-400",
  "from-red-500 to-red-400",
  "from-purple-500 to-purple-400"
];

const topStats = [
  { label: "Total Chats", value: 125, Icon: MessageCircle, gradient: COLORS[0] },
  { label: "Active Users", value: 12, Icon: Users, gradient: COLORS[1] },
  { label: "Unread Messages", value: 8, Icon: Mail, gradient: COLORS[2] },
  { label: "Online Users", value: 7, Icon: Wifi, gradient: COLORS[3] },
];

export default function Chat() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Chat & Messages</h1>
        <p className="text-gray-500 mt-1">Send and receive messages with your team.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {topStats.map((stat, index) => {
          const StatIcon = stat.Icon;
          return (
            <div
              key={index}
              className={`bg-linear-to-tr ${stat.gradient} p-5 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 flex items-center gap-4`}
            >
              <div className="p-3 bg-white/20 rounded-full flex items-center justify-center">
                <StatIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/80">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat Messages List */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Messages</h2>
        <ul className="space-y-4">
          {chatUsers.map((user, index) => (
            <li
              key={index}
              className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
            >
              <div>
                <p className="font-semibold text-gray-700">{user.name}</p>
                <p className="text-gray-500">{user.message}</p>
              </div>
              <span className="text-gray-400 text-sm">{user.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
