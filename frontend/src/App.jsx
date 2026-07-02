import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Placement from "./pages/Placement";
import Course from "./pages/Course";
import Enroll from "./pages/Enroll";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/placement" element={<Placement/>} />
        <Route path="/Course" element={<Course/>} />
        <Route path="/Enroll" element={<Enroll/>} />


      </Routes>

        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
