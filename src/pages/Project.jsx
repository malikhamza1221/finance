import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from "recharts";
import { Folder, CheckCircle, Clock, Users } from "lucide-react";

const projectTimeline = [
  { month: "Jan", progress: 20 },
  { month: "Feb", progress: 40 },
  { month: "Mar", progress: 60 },
  { month: "Apr", progress: 80 },
  { month: "May", progress: 100 },
];

const taskCompletion = [
  { project: "Website Redesign", completed: 8, pending: 2 },
  { project: "Mobile App", completed: 5, pending: 5 },
  { project: "Marketing Campaign", completed: 7, pending: 3 },
];

const projects = [
  { name: "Website Redesign", team: "Design Team", status: "In Progress" },
  { name: "Mobile App", team: "Dev Team", status: "Pending" },
  { name: "Marketing Campaign", team: "Marketing Team", status: "Completed" },
];

export default function Project() {
  const topStats = [
    { label: "Ongoing Projects", value: 3, Icon: Folder, gradient: "from-blue-500 to-blue-400" },
    { label: "Completed", value: 7, Icon: CheckCircle, gradient: "from-green-500 to-green-400" },
    { label: "Pending Tasks", value: 10, Icon: Clock, gradient: "from-purple-500 to-purple-400" },
    { label: "Team Members", value: 5, Icon: Users, gradient: "from-red-500 to-red-400" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          <p className="text-gray-500 mt-1">Manage ongoing projects, tasks, and team members.</p>
        </div>
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Timeline</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={projectTimeline}>
              <XAxis dataKey="month" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Completion</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={taskCompletion}>
              <XAxis dataKey="project" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10B981" barSize={20} />
              <Bar dataKey="pending" fill="#F59E0B" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Project List</h2>
        <ul className="space-y-3">
          {projects.map((proj, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
            >
              <div>
                <p className="font-semibold text-gray-700">{proj.name}</p>
                <p className="text-gray-500 text-sm">{proj.team}</p>
              </div>
              <span className={`text-sm font-medium ${
                proj.status === "Completed" ? "text-green-500" :
                proj.status === "Pending" ? "text-red-500" : "text-yellow-500"
              }`}>
                {proj.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
