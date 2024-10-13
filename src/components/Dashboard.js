// src/components/Dashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaCog, FaChartLine } from 'react-icons/fa'; // Ensure this is installed

const Dashboard = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg border-r border-gray-300">
        <div className="p-4 text-xl font-bold text-gray-900 text-center">
          My App
        </div>
        <nav className="mt-5">
          <Link
            to="/dashboard"
            className="flex items-center p-4 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <FaChartLine className="mr-2" /> Dashboard
          </Link>
          <Link
            to="/profile"
            className="flex items-center p-4 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <FaUser className="mr-2" /> Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center p-4 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <FaCog className="mr-2" /> Settings
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center">
            <span className="text-gray-600">Welcome, User!</span>
            <button
              onClick={onLogout} // Call onLogout function here
              className="ml-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </header>
        <main className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Your cards here */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">Statistics</h2>
              <p className="mt-2">Here are your latest stats.</p>
              <p className="mt-4 text-3xl">42</p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">User Engagement</h2>
              <p className="mt-2">Engagement Rate</p>
              <p className="mt-4 text-3xl">75%</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">New Signups</h2>
              <p className="mt-2">Recent Signups</p>
              <p className="mt-4 text-3xl">15</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">Your dashboard content goes here.</p>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
