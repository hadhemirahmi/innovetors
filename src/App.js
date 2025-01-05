import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pejes/about";
import Why from "./pejes/why";
import Contact from "./pejes/contact";
import Hom from "./pejes/hom";
import Nav from "./componets/nabar.jsx";
import Footer from "./componets/footer.jsx";
import Signin from "./componets/signinup.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "initial"; 
  };

  return (
    <div>
      <Nav openModal={openModal} /> 
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin closeModal={closeModal} />} />
      </Routes>
      <Footer />
      {isModalOpen && <Signin closeModal={closeModal} />}
    </div>
  );
}
export default App;
