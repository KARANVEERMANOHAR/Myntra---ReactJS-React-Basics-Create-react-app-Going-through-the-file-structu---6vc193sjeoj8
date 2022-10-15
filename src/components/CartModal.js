import React, { useState, useContext } from "react";
import AppContext from "../context/myntraContext";

function CartModal(props) {
  const { cart } = useContext(AppContext);
  return (
    <>
      <div
        id="cart-modal-content"
        style={{
          position: "absolute",
          zIndex: 1000,
          top: "45%",
          left: "20%",
          background: "white",
          padding: 10,
        }}
      >
        <div
          onClick={() => {
            props.onClose();
          }}
        >
          X
        </div>
        {cart.map((items) => {
          return (
            <div
              className="indiv-tile-holder"
              style={{ marginRight: 20, marginBottom: 20 }}
            >
              <img
                src={items.product.otherImages[0]}
                width="100px"
                height="100px"
              ></img>

              <div>{items.product.name}</div>
              <div>
                <i>{items.product.description}</i>
              </div>
              <div>Rs.{items.product.finalPrice}</div>
              <div>
                <strike>{items.product.strickPrice}</strike>
              </div>
              <div style={{ color: "red" }}>{items.product.discount}% OFF</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default CartModal;
