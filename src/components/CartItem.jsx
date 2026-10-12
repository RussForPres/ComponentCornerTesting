
import './CartItem.css';

function CartItem({ name, price, quantity, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{name}</h3>
        <p>${Number(price).toFixed(2)} each</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${(Number(price) * quantity).toFixed(2)}</p>
      </div>

      <button onClick={onRemove}>
        Remove One
      </button>
    </div>
  );
}

export default CartItem;
