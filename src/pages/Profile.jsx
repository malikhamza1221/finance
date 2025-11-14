import React from "react";
import { User, Briefcase, CheckCircle, MessageCircle, Settings } from "lucide-react";

export default function Profile() {
  const topStats = [
    { label: "Projects", value: 12, Icon: Briefcase, gradient: "from-blue-500 to-blue-400" },
    { label: "Tasks Completed", value: 34, Icon: CheckCircle, gradient: "from-green-500 to-green-400" },
    { label: "Messages", value: 8, Icon: MessageCircle, gradient: "from-purple-500 to-purple-400" },
    { label: "Activity", value: 14, Icon: Settings, gradient: "from-red-500 to-red-400" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
            U
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">Product Manager</p>
          </div>
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

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1">Email</label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1">Phone</label>
            <input
              type="tel"
              defaultValue="+1 234 567 890"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-500 mb-1">Change Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
