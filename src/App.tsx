import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
// import UserDetail from "./Pages/userDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/userdetail/:id" element={<UserDetail />} /> */}
        {/* <Route path="/userdetail" element={<UserDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
