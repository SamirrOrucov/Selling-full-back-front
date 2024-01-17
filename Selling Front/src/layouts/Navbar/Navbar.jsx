import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
       <div className="logo">
       <Link to={"/"}>
          Selling<span>.</span>
        </Link>
       </div>
        <div className="list">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/add"}>Add Product</NavLink>
            <NavLink to={"/basket"}>Basket</NavLink>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/login"}>Login</NavLink>

        </div>
        <div className="hamburger">
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
