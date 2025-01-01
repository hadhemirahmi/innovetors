import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pejes/about';
import Why from './pejes/why';
import Contact from './pejes/contact';
import Hom from './pejes/hom';
import Nav from './componets/nabar.jsx';
import './pejes/styles.css';
export const MyContext = createContext(null);
function App() {

  const contextValue = { basename: '/example' };

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<Why />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
