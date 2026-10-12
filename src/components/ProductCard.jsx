import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard({ id, name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={name} />

        <h2>{name}</h2>

        <p className="price">${Number(price).toFixed(2)}</p>

        <p>{description}</p>
      </Link>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;