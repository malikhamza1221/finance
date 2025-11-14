import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { DollarSign, Users, CreditCard, PieChart as ChartIcon } from "lucide-react";

const lineData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4000 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 7000 },
];

const barData = [
  { name: "Bank", value: 4000 },
  { name: "Crypto", value: 3000 },
  { name: "Sales", value: 2000 },
  { name: "Project", value: 2780 },
];

const pieData = [
  { name: "Revenue", value: 4000 },
  { name: "Expenses", value: 3000 },
  { name: "Profit", value: 3000 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];
const GRADIENTS = ["from-blue-500 to-blue-400", "from-green-500 to-green-400", "from-yellow-500 to-yellow-400", "from-purple-500 to-purple-400"];

export default function Charts() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Analytics & Charts</h1>
        <p className="text-gray-500 mt-1">Visualize your financial performance over time.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "$25,000", icon: <DollarSign className="w-8 h-8 text-white" />, gradient: GRADIENTS[0] },
          { label: "Profit", value: "$12,000", icon: <CreditCard className="w-8 h-8 text-white" />, gradient: GRADIENTS[1] },
          { label: "Expenses", value: "$8,500", icon: <ChartIcon className="w-8 h-8 text-white" />, gradient: GRADIENTS[2] },
          { label: "New Users", value: "1,250", icon: <Users className="w-8 h-8 text-white" />, gradient: GRADIENTS[3] },
        ].map((stat, index) => (
          <div key={index} className={`bg-linear-to-tr ${stat.gradient} p-5 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 flex items-center gap-4`}>
            <div className="p-3 bg-white/20 rounded-full flex items-center justify-center">
              {stat.icon}
            </div>
            <div>
              <p className="text-white/80">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="flex items-center mb-4 gap-2">
            <DollarSign className="text-blue-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-800">Revenue Over Months</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="url(#lineGradient)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="flex items-center mb-4 gap-2">
            <CreditCard className="text-green-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-800">Category Performance</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Bar dataKey="value" barSize={25}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#4F46E5" : "#10B981"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.02] md:col-span-2">
          <div className="flex items-center mb-4 gap-2">
            <ChartIcon className="text-yellow-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-800">Revenue vs Expenses vs Profit</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
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
