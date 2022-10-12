import React, { useContext } from "react";
import AppContext from "../context/myntraContext";
function Product() {
  const { filetredProducts } = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: "2rem",
      }}
    >
      {filetredProducts.map((product) => {
        return (
          <div className="indiv-tile-holder" onCilck={() => {}}>
            <img src={product.otherImages[0]} width="200" height="200" />
            <div>{product.name}</div>
            <div>
              <i>{product.description}</i>
            </div>
            <div>₹.{product.finalPrice}</div>
            <div>
              <strike>{product.strickPrice}</strike>
            </div>
            <div style={{ color: "red" }}>{product.discount}% off</div>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
