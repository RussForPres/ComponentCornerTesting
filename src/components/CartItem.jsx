import './CartItem.css';

function CartItem({ name, price, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{name}</h3>
        <p>${Number(price).toFixed(2)}</p>
      </div>

      <button onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;