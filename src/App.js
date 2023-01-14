import React from "react";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesDetail from "./pages/MoviesDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/:id"} element={<MoviesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
