import React from "react";
import Customers from "./components/Customers/Customers";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Customers />
    </div>
  );
}

export default App;
