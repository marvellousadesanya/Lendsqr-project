import React from "react";

import "./App.scss";
import Navbar from "./Components/navbar";
import Login from "./Pages/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
