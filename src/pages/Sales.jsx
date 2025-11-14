import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { DollarSign, Users, Clipboard, PieChart as PieIcon } from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 6000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 8000 },
  { month: "Jun", sales: 9000 },
];

const leadSources = [
  { source: "Website", value: 4000 },
  { source: "Referral", value: 2500 },
  { source: "Email Campaign", value: 1500 },
  { source: "Social Media", value: 2000 },
];

const customerDistribution = [
  { name: "Retail", value: 50 },
  { name: "Wholesale", value: 30 },
  { name: "Corporate", value: 20 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];

export default function Sales() {
  const topStats = [
    { label: "Total Sales", value: "$39,000", Icon: DollarSign, gradient: "from-blue-500 to-blue-400" },
    { label: "Leads", value: 120, Icon: Users, gradient: "from-green-500 to-green-400" },
    { label: "Opportunities", value: 35, Icon: Clipboard, gradient: "from-purple-500 to-purple-400" },
    { label: "Customers", value: 80, Icon: PieIcon, gradient: "from-red-500 to-red-400" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Sales CRM</h1>
          <p className="text-gray-500 mt-1">Track your sales, leads, and customer relationships.</p>
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3}/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Lead Sources</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={leadSources}>
              <XAxis dataKey="source" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Bar dataKey="value" barSize={20} fill="#10B981"/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Customer Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={customerDistribution} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={100} 
                label
              >
                {customerDistribution.map((entry,index) => (
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
