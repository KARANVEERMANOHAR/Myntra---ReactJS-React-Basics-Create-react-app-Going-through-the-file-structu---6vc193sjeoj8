import React, { useState, useContext } from "react";
import myntraLogo from "../icon.jpeg";
import shoppingCart from "../shopping-cart-solid.svg";
import Appcontext from "../context/myntraContext";
import CartModal from "../components/CartModal";
function NavBar() {
  const [showCartItems, setShowCartItems] = useState(false);
  const { cart } = useContext(Appcontext);

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
      <div
        className="cart-holder"
        style={{ position: "relative", marginLeft: "50%" }}
      >
        {showCartItems ? (
          <CartModal
            onClose={() => {
              setShowCartItems(false);
            }}
          />
        ) : null}
        <div onClick={() => setShowCartItems(true)}>
          <img src={shoppingCart} alt="shooping-cart" height={20} width={20} />
        </div>
      </div>
      <div className="cart-list-length">{cart.length}</div>
    </nav>
  );
}

export default NavBar;
