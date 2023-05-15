import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Components/Navbar";
import Home from "./Components/Home";
import GroupExample from "./Components/Service";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Footer from "./Components/Footer";




function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Service" element={<Service/>}></Route>

      <Route path="/About" element={<About/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>

    

    </Routes>
<Footer/>
 
      


    </>
  );
}

export default App