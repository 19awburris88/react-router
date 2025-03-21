import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Home from "./components/home";
import Blue from "./components/blue";
import Red from "./components/red";
import Green from "./components/green";
import Yellow from "./components/yellow";
import Black from "./components/black";
import Pink from "./components/pink";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/black" element={<Black />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/pink" element={<Pink />} />
      </Routes>

      <footer />
    </div>
  )
}

export default App
