import React from "react";
import { useContext } from "react";
import AppContext from "../context/myntraContext";

function Modal(props) {
  const { cart, setCart } = useContext(AppContext);

  const addProductToCart = () => {
    const newProduct = {
      product: props.productImages,
    };

    setCart([...cart, newProduct]);
  };
  return (
    <div
      id="product-modal"
      style={{
        position: "absolute",
        zIndex: 1000,
        top: "45%",
        left: "30%",
        background: "white",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => {
            props.onClose();
          }}
          style={{ position: "relative", right: "0" }}
        >
          X
        </div>
      </div>

      {props.productImages.otherImages.map((images) => {
        return (
          <img
            src={images}
            width="100"
            height="100"
            style={{ marginRight: 20 }}
          />
        );
      })}
      {/* size chart */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Size Char</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.productImages.productSize.split(",").map((size) => {
            return (
              <div className="size-option">
                <button>{size}</button>
              </div>
            );
          })}
        </div>
        <div>{props.productImages.name}</div>
        <div>
          <i>{props.productImages.description}</i>
        </div>
        <div>Rs.{props.productImages.finalPrice}</div>
        <div>
          <strike>{props.productImages.strickPrice}</strike>
        </div>
        <div style={{ color: "red" }}>{props.productImages.discount}% OFF</div>
        <div>
          <button onClick={addProductToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
