import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, description, image, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(); // original cart logic

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 900);
  };

  return (
    <div className="card h-100 product-card">
      <img
        src={image}
        className="card-img-top product-card-img"
        alt={name}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">₹{price}</p>

        <button
          className={`btn btn- w-100 add-to-cart-btn ${
            added ? "added" : ""
          }`}
          onClick={handleClick}
        >
          {added ? "Added ✔" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
