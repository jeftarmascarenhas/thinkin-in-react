import React from "react";

const index = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Product" />
      <label className="checkbox-box">
        <input type="checkbox" />
        Only show product in stock
      </label>
    </div>
  );
};

export default index;
