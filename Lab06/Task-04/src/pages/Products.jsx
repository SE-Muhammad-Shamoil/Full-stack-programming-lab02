import { useState } from 'react';
import './pages.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30hr battery life and spatial audio.',
    price: '$149',
    emoji: '🎧',
  },
  {
    id: 2,
    title: 'Mechanical Keyboard',
    description: 'Compact 75% mechanical keyboard with RGB backlighting and tactile switches.',
    price: '$89',
    emoji: '⌨️',
  },
  {
    id: 3,
    title: 'Smart Watch',
    description: 'Track fitness, heart rate, sleep, and stay connected with this sleek smartwatch.',
    price: '$199',
    emoji: '⌚',
  },
  {
    id: 4,
    title: '4K Webcam',
    description: 'Crystal-clear 4K webcam with autofocus and built-in microphone for video calls.',
    price: '$79',
    emoji: '📷',
  },
];

function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product.id]);
  };

  return (
    <div className="page products-page">
      <div className="page-header">
        <h1>Our <span className="highlight">Products</span></h1>
        <p className="page-subtitle">Explore our curated collection</p>
        {cart.length > 0 && (
          <div className="cart-badge">🛒 {cart.length} item{cart.length > 1 ? 's' : ''} in cart</div>
        )}
      </div>
      <div className="products-grid">
        {PRODUCTS.map((p) => {
          const inCart = cart.filter((id) => id === p.id).length;
          return (
            <div className="product-card" key={p.id}>
              <div className="product-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="product-footer">
                <span className="price">{p.price}</span>
                <button
                  className="add-btn"
                  onClick={() => addToCart(p)}
                >
                  {inCart > 0 ? `✓ Added (${inCart})` : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
