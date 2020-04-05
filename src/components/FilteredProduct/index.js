// receive products [x]
// render search bar [x]
// render product grid [x]

import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

const FilteredProduct = ({ products }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleInStockOnly = (inStockOnlyChange) => {
    setInStockOnly(inStockOnlyChange);
  };
  const handleFilterText = (filterTextChange) => {
    setFilterText(filterTextChange);
  };

  return (
    <>
      <SearchBar
        inStockOnly={inStockOnly}
        filterText={filterText}
        onFilterTextChange={handleFilterText}
        onInStockChange={handleInStockOnly}
      />
      <ProductList
        products={products}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </>
  );
};

FilteredProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      stocked: PropTypes.bool,
      category: PropTypes.string,
    })
  ).isRequired,
};
export default FilteredProduct;
