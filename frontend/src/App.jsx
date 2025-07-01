import "./App.css";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Register from "./views/Register/index";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import About from "./views/About/About";
import React, { Suspense, lazy } from "react";

const LoadingComponent = lazy(() =>
  import("./components/LoadingComponent/index")
);

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="myappointments" element={<MyAppointments />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
