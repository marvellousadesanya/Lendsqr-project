import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
