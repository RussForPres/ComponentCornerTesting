
import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  // Group identical products together
  const groupedCart = cart.reduce((groups, item) => {
    const existingItem = groups.find(
      (group) => group.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      groups.push({ ...item, quantity: 1 });
    }

    return groups;
  }, []);

  // Calculate total using quantity
  const cartTotal = groupedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">
      <h1>Shopping Cart</h1>

      {groupedCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {groupedCart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => removeFromCart(
                cart.findIndex((cartItem) => cartItem.id === item.id)
              )}
            />
          ))}

          <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default CartPage;