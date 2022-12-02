import React from "react";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import CreateModal from "./components/CreateModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./pages/View";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="main">
            <h1 className="main-text">Finance Management Dashboard</h1>
          </div>
          <div className="modal">
            <CreateModal />
            <Routes>
              <Route path="/view" element={<View />} />
              <Route path="/update" element={<Update />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
