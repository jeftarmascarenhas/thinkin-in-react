// render Product category [x]
// render Product Item [x]

import React from "react";
import PropTypes from "prop-types";

import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";

const stringLower = (value = "") => value.toLowerCase();

const ProductList = ({ products, inStockOnly, filterText }) => {
  const rows = [];

  let lastCategory = null;
  products.forEach((product) => {
    if (stringLower(product.name).indexOf(stringLower(filterText)) === -1) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }

    const category =
      product.category !== lastCategory ? (
        <ProductCategory title={product.category} />
      ) : null;

    rows.push(
      <div key={product.id}>
        {category}
        <ProductItem product={product} />
      </div>
    );
    lastCategory = product.category;
  });

  return (
    <div className="product-grid">
      <div>{rows}</div>
    </div>
  );
};

ProductList.propTypes = {
  inStockOnly: PropTypes.bool.isRequired,
  filterText: PropTypes.string,
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

export default ProductList;
