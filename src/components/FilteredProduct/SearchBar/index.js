import React from "react";

const index = ({
  inStockOnly,
  filterText,
  onFilterTextChange,
  onInStockChange,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Product"
        value={filterText}
        onChange={(event) => onFilterTextChange(event.target.value)}
      />
      <label className="checkbox-box">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onInStockChange(event.target.checked)}
        />
        Only show product in stock
      </label>
    </div>
  );
};

export default index;
