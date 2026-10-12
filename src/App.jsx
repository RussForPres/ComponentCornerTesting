import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Comfortable wireless headphones with great sound."
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      price: 59.99,
      image: "https://placehold.co/600x400",
      description: "A responsive mechanical keyboard for gaming and work."
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Track your fitness, notifications, and daily activity."
    }
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, itemIndex) => itemIndex !== index));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Header storeName="TechVault" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer
        storeName="TechVault"
        email="support@techvault.com"
        phone="555-123-4567"
      />
    </BrowserRouter>
  );
}

export default App;