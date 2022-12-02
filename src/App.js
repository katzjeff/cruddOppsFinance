import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import CreateModal from "./components/CreateModal";

function App() {
  return (
    <>
      <div className="container">
        <div className="main">
          <h1 className="main-text">Finance Management Dashboard</h1>
        </div>
        <div className="modal">
          <CreateModal />
        </div>
      </div>
    </>
  );
}

export default App;
