import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { ArrowUp, ArrowDown, Users, CreditCard, PieChart as BankIcon } from "lucide-react";

const balanceData = [
  { month: "Jan", balance: 5000 },
  { month: "Feb", balance: 7000 },
  { month: "Mar", balance: 6500 },
  { month: "Apr", balance: 8000 },
  { month: "May", balance: 9000 },
  { month: "Jun", balance: 10000 },
];

const depositsWithdrawals = [
  { month: "Jan", deposits: 3000, withdrawals: 2000 },
  { month: "Feb", deposits: 4000, withdrawals: 2500 },
  { month: "Mar", deposits: 3500, withdrawals: 3000 },
  { month: "Apr", deposits: 5000, withdrawals: 3500 },
  { month: "May", deposits: 4500, withdrawals: 3000 },
  { month: "Jun", deposits: 6000, withdrawals: 4000 },
];

const accountTypeData = [
  { name: "Savings", value: 120 },
  { name: "Checking", value: 80 },
  { name: "Business", value: 50 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];

export default function Bank() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Bank Overview</h1>
        <p className="text-gray-500 mt-1">Monitor balances, deposits, withdrawals, and accounts.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Balance", value: "$10,000", icon: <CreditCard className="w-8 h-8 text-white" />, gradient: "from-blue-500 to-blue-400" },
          { label: "Deposits", value: "$27,500", icon: <ArrowUp className="w-8 h-8 text-white" />, gradient: "from-green-500 to-green-400" },
          { label: "Withdrawals", value: "$17,500", icon: <ArrowDown className="w-8 h-8 text-white" />, gradient: "from-red-500 to-red-400" },
          { label: "Active Accounts", value: "250", icon: <Users className="w-8 h-8 text-white" />, gradient: "from-purple-500 to-purple-400" },
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
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <div className="flex items-center mb-4 gap-2">
            <BankIcon className="text-blue-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-800">Bank Balance Over Time</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={balanceData}>
              <XAxis dataKey="month" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip />
              <Line type="monotone" dataKey="balance" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <div className="flex items-center mb-4 gap-2">
            <ArrowUp className="text-green-500 w-5 h-5" />
            <ArrowDown className="text-red-500 w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-800">Deposits vs Withdrawals</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={depositsWithdrawals}>
              <defs>
                <linearGradient id="depositsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981"/>
                  <stop offset="100%" stopColor="#4F46E5"/>
                </linearGradient>
                <linearGradient id="withdrawalsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B"/>
                  <stop offset="100%" stopColor="#F87171"/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip />
              <Bar dataKey="deposits" barSize={20} fill="url(#depositsGradient)" />
              <Bar dataKey="withdrawals" barSize={20} fill="url(#withdrawalsGradient)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Account Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={accountTypeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {accountTypeData.map((entry, index) => (
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
