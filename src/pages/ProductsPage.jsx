import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="products-page">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;