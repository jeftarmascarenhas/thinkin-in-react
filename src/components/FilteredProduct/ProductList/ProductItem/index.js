// render product[img, name]
import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const name = !product.stocked ? <span>{product.name}</span> : product.name;
  return (
    <figure className="product-grid-category__item">
      <img src={product.img} alt={product.name} />
      <figcaption>
        <h2>{name}</h2>
      </figcaption>
    </figure>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
