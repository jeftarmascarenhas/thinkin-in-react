// receive products [x]
// render search bar [x]
// render product grid [x]

import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

const FilteredProduct = ({ products }) => {
  return (
    <>
      <SearchBar />
      <ProductList products={products} />
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
