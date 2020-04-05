// render Product category [x]
// render Product Item [x]

import React from "react";
import PropTypes from "prop-types";

import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";

const ProductList = ({ products, inStockOnly, filterText }) => {
  const rows = [];

  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
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
