import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { TrendingUp, TrendingDown, Users, Bitcoin } from "lucide-react";
import CountUp from "react-countup";

const portfolioData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 13000 },
  { month: "Apr", value: 17000 },
  { month: "May", value: 19000 },
  { month: "Jun", value: 22000 },
];

const coinInvestments = [
  { coin: "Bitcoin", value: 10000 },
  { coin: "Ethereum", value: 7000 },
  { coin: "Solana", value: 3000 },
  { coin: "Cardano", value: 2000 },
];

const portfolioDistribution = [
  { name: "Bitcoin", value: 45 },
  { name: "Ethereum", value: 35 },
  { name: "Other Coins", value: 20 },
];

const COLORS = ["#F59E0B", "#4F46E5", "#10B981"];
const CARD_GRADIENTS = [
  "from-yellow-500 to-yellow-400",
  "from-green-500 to-green-400",
  "from-red-500 to-red-400",
  "from-purple-500 to-purple-400"
];

export default function Crypto() {
  const topStats = [
    { label: "Total Portfolio", value: 22000, Icon: Bitcoin, gradient: CARD_GRADIENTS[0], prefix: "$" },
    { label: "Profit", value: 5000, Icon: TrendingUp, gradient: CARD_GRADIENTS[1], prefix: "$" },
    { label: "Loss", value: 1500, Icon: TrendingDown, gradient: CARD_GRADIENTS[2], prefix: "$" },
    { label: "Active Coins", value: 12, Icon: Users, gradient: CARD_GRADIENTS[3] },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Crypto Portfolio</h1>
        <span className="text-gray-500 mt-1 block">Track your cryptocurrency investments and performance.</span>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {topStats.map((stat, i) => {
          const StatIcon = stat.Icon;
          return (
            <div
              key={i}
              className={`bg-linear-to-tr ${stat.gradient} p-5 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 flex items-center gap-4`}
            >
              <div className="p-3 bg-white/20 rounded-full flex items-center justify-center ">
                <StatIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-white">{stat.label}</span>
                {/* <span className="text-2xl font-bold text-white block">
                  <CountUp end={stat.value} duration={1.5} separator="," prefix={stat.prefix || ""} />
                </span> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Value Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={portfolioData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="url(#lineGradient)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Coin Investments</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={coinInvestments}>
              <XAxis dataKey="coin" stroke="#A0AEC0"/>
              <YAxis stroke="#A0AEC0"/>
              <Tooltip />
              <Bar dataKey="value" barSize={25}>
                {coinInvestments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Portfolio Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {portfolioDistribution.map((entry, index) => (
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
