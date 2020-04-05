// render title category
import React from "react";
import PropTypes from "prop-types";

const ProductCategory = ({ title }) => {
  return <h3 className="category">Category: {title}</h3>;
};

ProductCategory.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductCategory;
