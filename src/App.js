// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Dummy login check
    if (email === "test@gmail.com" && password === "1234") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/signup" 
          element={<Signup />} 
        />
        {isAuthenticated ? (
          <Route 
            path="/dashboard" 
            element={<Dashboard onLogout={handleLogout} />} 
          />
        ) : (
          <Route 
            path="/" 
            element={<Login onLogin={handleLogin} />} 
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
