import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feeds/Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
