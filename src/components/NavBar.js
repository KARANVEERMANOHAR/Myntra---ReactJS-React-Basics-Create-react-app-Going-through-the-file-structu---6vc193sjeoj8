import React from "react";
import "../styles/App.css";
import Logo from "../icon.jpeg";
import shoppingCart from "../shopping-cart-solid.svg";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="icon-holder">
        <img src={Logo} alt="logo" width={70} height={70} />
      </div>
      <form>
        <input placeholder="Search for products, brands and more" />
      </form>
      <div className="cart-holder">
        <img src={shoppingCart} alt="cart-image" height={20} />
      </div>
    </nav>
  );
};

export default NavBar;
