import { useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id.toString() === id
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
      />

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </main>
  );
}

export default ProductDetailsPage;