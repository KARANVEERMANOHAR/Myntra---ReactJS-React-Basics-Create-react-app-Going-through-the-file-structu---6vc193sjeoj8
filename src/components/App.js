import React, { useState } from "react";
import "../styles/App.css";
import Navbar from "../components/NavBar";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";
import Appcontext from "../context/myntraContext";
import Products from "../components/Product";
import data from "../../data";
const App = () => {
  const [allProducts, setAllProducts] = useState(data);
  const [filetredProducts, setfilteredProducts] = useState(data);
  const [cart, setCart] = useState([]);
  return (
    <Appcontext.Provider
      value={{
        allProducts: allProducts,
        filetredProducts: filetredProducts,
        setfilteredProducts: setfilteredProducts,
        cart: cart,
        setCart: setCart,
      }}
    >
      <div id="main">
        <Navbar />
        <div style={{ display: "flex" }}>
          <Filter />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Sorting />
            <Products />
          </div>
        </div>
      </div>
    </Appcontext.Provider>
  );
};
export default App;
