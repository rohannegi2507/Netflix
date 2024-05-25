import React from 'react'
import {
  BrowserRouter as Router,
 Route,
 Routes,
} from "react-router-dom";
import Browser from '../pages/Browser';
import Login from '../pages/Login';

const Body = () => {
  return (
    <Router>
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default Body