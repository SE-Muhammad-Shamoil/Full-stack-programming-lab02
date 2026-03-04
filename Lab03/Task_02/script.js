// ============================================
// Lab Task 2: Online Shopping Cart
// ES6 | Rest Operator | Spread | Destructuring
// ============================================

// ----- Product catalogue -----
const availableProducts = [
    { id: 1, name: 'Wireless Headphones', price: 4500, emoji: '🎧' },
    { id: 2, name: 'Mechanical Keyboard', price: 8200, emoji: '⌨️' },
    { id: 3, name: 'USB-C Hub', price: 2100, emoji: '🔌' },
    { id: 4, name: 'Webcam HD 1080p', price: 5600, emoji: '📷' },
    { id: 5, name: 'LED Desk Lamp', price: 1800, emoji: '💡' },
    { id: 6, name: 'Mouse Pad XL', price: 950, emoji: '🖱️' },
];

// Track selected product IDs
let selectedIds = new Set();

// ---- Render product list ----
const productGrid = document.getElementById('product-grid');

function renderProducts() {
    productGrid.innerHTML = availableProducts.map(p => `
    <div class="product-item ${selectedIds.has(p.id) ? 'selected' : ''}"
         id="prod-${p.id}"
         onclick="toggleProduct(${p.id})">
      <div class="product-emoji">${p.emoji}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">Rs. ${p.price.toLocaleString()}</div>
      </div>
      <div class="product-check">${selectedIds.has(p.id) ? '✓' : ''}</div>
    </div>
  `).join('');
}

function toggleProduct(id) {
    if (selectedIds.has(id)) {
        selectedIds.delete(id);
    } else {
        selectedIds.add(id);
    }
    renderProducts();
}

renderProducts();

// ---- Rest Operator: addToCart(...items) ----
function addToCart(...items) {
    // items is an array collected by rest operator
    return items;
}

// ---- Handle "Add to Cart" button ----
document.getElementById('add-btn').addEventListener('click', () => {
    const selected = availableProducts.filter(p => selectedIds.has(p.id));

    if (selected.length === 0) {
        alert('Please select at least one product!');
        return;
    }

    // Use REST operator – selected products are spread as individual args
    const cart = addToCart(...selected);

    // Use SPREAD to clone the cart (avoids mutation)
    const clonedCart = [...cart];

    // DESTRUCTURING: extract first product and the remaining
    const [firstProduct, ...remainingProducts] = cart;

    // Total price (using reduce)
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // ---- Render results ----
    document.getElementById('total-block').innerHTML = `
    <div class="info-block-label">📦 Cart Summary</div>
    <div class="info-block-value">
      Total items: <span class="highlight">${cart.length}</span><br>
      Total price: <span class="highlight">Rs. ${totalPrice.toLocaleString()}</span>
    </div>
  `;

    document.getElementById('first-block').innerHTML = `
    <div class="info-block-label">🥇 First Item (Destructuring)</div>
    <div class="info-block-value">
      ${firstProduct.emoji} <span class="highlight-green">${firstProduct.name}</span>
      &mdash; Rs. ${firstProduct.price.toLocaleString()}
    </div>
  `;

    const remainingHTML = remainingProducts.length > 0
        ? remainingProducts.map(p => `<span class="tag">${p.emoji} ${p.name}</span>`).join('')
        : '<span style="color:var(--muted)">None</span>';

    document.getElementById('rest-block').innerHTML = `
    <div class="info-block-label">📋 Remaining Items (Rest Destructuring)</div>
    <div class="info-block-value">${remainingHTML}</div>
  `;

    const clonedHTML = clonedCart.map(p => `<span class="tag green">${p.emoji} ${p.name}</span>`).join('');
    document.getElementById('cloned-block').innerHTML = `
    <div class="info-block-label">🔁 Cloned Cart (Spread Operator)</div>
    <div class="info-block-value">${clonedHTML}</div>
  `;
});

// Show empty state initially
document.getElementById('total-block').innerHTML = `
  <div class="empty-cart">
    <div class="empty-cart-icon">🛒</div>
    Select products and click <strong>"Add to Cart"</strong>
  </div>
`;
