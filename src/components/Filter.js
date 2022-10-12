import React from "react";
function Filter() {
  return (
    <div className="filter-holder" style={{ width: "100%" }}>
      <section>
        <h5>Gender</h5>
        <div>
          <input type="radio" value="male" name="gender" id="male"></input>
          <label for="male">Male</label>
        </div>
        <div>
          <input type="radio" value="female" name="gender" id="female"></input>
          <label for="female">Female</label>
        </div>
      </section>
      <section>
        <h5>color</h5>
        <input type="checkbox" id="color" name="color" value="white" />
        <label for="color"> White</label>
      </section>
      <section style={{ width: "100%", whiteSpace: "nowrap" }}>
        <h5> Categories</h5>
        <input type="checkbox" id="folded" name="folded" />
        <label for="folded" style={{ width: "100%" }}>
          Folded sleeve Shirts
        </label>
      </section>
    </div>
  );
}
export default Filter;
