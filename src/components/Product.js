import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../context/myntraContext";
import Modal from "../components/Modal";
function Product() {
  const { filetredProducts } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [photosGallery, setPhotosGallery] = useState({});

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
      {showModal && (
        <Modal
          productImages={photosGallery}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      {filetredProducts.map((product) => {
        return (
          <div className="indiv-tile-holder">
            <img
              src={product.otherImages[0]}
              width="200"
              height="200"
              onClick={() => {
                setShowModal(true);
                setPhotosGallery(product);
              }}
            />
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
