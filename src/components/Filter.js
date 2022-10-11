import React from "react";
import "../styles/App.css";

const Filter = () => {
  return (
    <div className="filter-holder">
      <section>
        <h5>Gender</h5>
        <div>
          <lable for="male">Male </lable>
          <input type="radio" value="male" name="gender" id="male" />
        </div>
        <div>
          <lable for="female">Female </lable>
          <input type="radio" value="female" name="gender" id="female" />
        </div>
      </section>
      
      <section>
          <h5> Color</h5>
          <input type="checkbox" />
      </section>
    </div>
  );
};

export default Filter;
