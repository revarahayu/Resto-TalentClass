import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalItemsInCart } = useContext(StoreContext);

  const totalItems = getTotalItemsInCart();

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#food-display' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FaCartShopping size={28} />
          </Link>
          {totalItems > 0 && (
            <div className="dot">{totalItems}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
