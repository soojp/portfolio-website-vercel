import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="font-mono bg-red-50 min-h-screen p-6">
          <Navbar />
          <Routes>
            <Route path="/*">
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
