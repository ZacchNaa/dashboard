import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Error404 from './pages/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
