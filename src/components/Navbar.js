import React from 'react'
import { Link } from 'react-router-dom'
import logoKalkulasi from '../images/logoKalkulasi.png'

const Navbar = () => {
     return (
          <div className="navbar">
               <div className="brand">
                    <img src={logoKalkulasi} alt="logo-kalkulasi" />
               </div>
               <div className="navigation">
                    <Link to="/">
                         <a>Homepage</a>
                    </Link>
                    <Link to="/product">
                         <a>Product</a>
                    </Link>
                    <Link to="/transaction">
                         <a>Transaction</a>
                    </Link>
                    <Link to="/about">
                         <a>About</a>
                    </Link>
               </div>
               <div className="member">
                    <button className="register">
                         Register
                    </button>
                    <button className="login">
                         Login
                    </button>
               </div>
          </div>
     )
}

export default Navbar;