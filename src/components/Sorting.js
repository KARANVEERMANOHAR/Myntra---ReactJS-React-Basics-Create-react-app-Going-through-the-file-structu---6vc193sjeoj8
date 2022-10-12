import React from "react";
function Sorting() {
  return (
    <div
      className="sort-holder"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
      }}
    >
      <select placeholder="sort by">
        <option>What's New</option>
        <option value="finalPrice">Price (low to high)</option>
        <option value="discounts"> Discounts(Better Discounts)</option>
      </select>
    </div>
  );
}
export default Sorting;
