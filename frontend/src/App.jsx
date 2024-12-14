import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';  

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer /> 
      </div>
      <Footer />
    </>
  );
};

export default App;
