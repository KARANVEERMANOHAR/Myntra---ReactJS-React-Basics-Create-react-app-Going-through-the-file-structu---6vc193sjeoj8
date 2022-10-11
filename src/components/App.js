import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import Filter from "./Filter";
const App = () => {
  return (
    <div id="main">
      <NavBar />
      <Filter />
    </div>
  );
};

export default App;
