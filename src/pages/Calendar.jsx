import React from "react";
import { Calendar as CalendarIcon, Clock, CheckCircle, Bell } from "lucide-react";

const upcomingEvents = [
  { date: "2025-11-15", event: "Team Meeting" },
  { date: "2025-11-16", event: "Project Deadline" },
  { date: "2025-11-18", event: "Client Call" },
];

export default function Calendar() {
  const topStats = [
    { label: "Events Today", value: 3, Icon: Clock, gradient: "from-blue-500 to-blue-400" },
    { label: "Upcoming Events", value: 5, Icon: CalendarIcon, gradient: "from-green-500 to-green-400" },
    { label: "Completed", value: 12, Icon: CheckCircle, gradient: "from-purple-500 to-purple-400" },
    { label: "Pending Reminders", value: 2, Icon: Bell, gradient: "from-red-500 to-red-400" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Calendar Overview</h1>
        <p className="text-gray-500 mt-1">Check your scheduled events, reminders, and deadlines.</p>
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

      {/* Upcoming Events List */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
            >
              <span className="font-medium text-gray-700">{event.event}</span>
              <span className="text-gray-500">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Monthly Calendar */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Calendar</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-gray-600">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="p-3 rounded-md hover:bg-blue-100 cursor-pointer transition"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
