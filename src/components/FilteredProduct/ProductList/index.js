// render Product category [x]
// render Product Item [x]

import React from "react";
// import PropTypes from "prop-types";

import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const rows = [];

  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory title={product.category} key={product.category} />
      );
    }
    rows.push(<ProductItem product={product} key={product.id} />);
    lastCategory = product.category;
  });

  return <div className="product-grid">{rows}</div>;
};

ProductList.propTypes = {};

export default ProductList;
