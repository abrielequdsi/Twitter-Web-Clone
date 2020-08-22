import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widgets from "./widgets/Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
