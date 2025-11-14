import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const balanceData = [
  { month: "Jan", balance: 5000 },
  { month: "Feb", balance: 7000 },
  { month: "Mar", balance: 6500 },
  { month: "Apr", balance: 8000 },
  { month: "May", balance: 9000 },
  { month: "Jun", balance: 10000 },
];

const customerDistribution = [
  { name: "Retail", value: 50 },
  { name: "Wholesale", value: 30 },
  { name: "Corporate", value: 20 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];
const CARD_GRADIENTS = [
  "from-blue-500 to-blue-400",
  "from-green-500 to-green-400",
  "from-purple-500 to-purple-400",
  "from-red-500 to-red-400"
];

export default function Dashboard() {
  const topStats = [
    { label: "Total Balance", value: "$10,000", gradient: CARD_GRADIENTS[0] },
    { label: "Total Sales", value: "$39,000", gradient: CARD_GRADIENTS[1] },
    { label: "Active Users", value: "12", gradient: CARD_GRADIENTS[2] },
    { label: "Ongoing Projects", value: "3", gradient: CARD_GRADIENTS[3] },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, John!</h1>
        <p className="text-gray-500 mt-1">Here's a safe, error-free overview of your finance dashboard.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {topStats.map((stat, i) => (
          <div
            key={i}
            className={`bg-linear-to-tr ${stat.gradient} p-5 rounded-xl shadow-md flex flex-col items-center gap-2
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 cursor-pointer`}
          >
            <p className="text-white/80">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Balance Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={balanceData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Line type="monotone" dataKey="balance" stroke="url(#lineGradient)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Customer Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={customerDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {customerDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
