import React from "react";
import myntraLogo from "../icon.jpeg";
import shoppingCart from "../shopping-cart-solid.svg";
function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="icon-holder">
        <img src={myntraLogo} alt="logo" width={70} height={70} />
      </div>
      <form>
        <input placeholder=" Search for a product..." />
      </form>
      <div className="cart-holder">
        <img src={shoppingCart} alt="shooping-cart" height={20} width={20} />
      </div>
      <div className="cart-list-length"></div>
    </nav>
  );
}
export default NavBar;
