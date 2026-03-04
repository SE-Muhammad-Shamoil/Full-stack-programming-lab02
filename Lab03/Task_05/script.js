// Create a Map where Key = Product ID and Value = Product object
const productCatalog = new Map();

// Add minimum 5 products
productCatalog.set("P101", { name: "Laptop Alpha", price: 1200, category: "Electronics" });
productCatalog.set("P102", { name: "Smartphone Beta", price: 800, category: "Mobiles" });
productCatalog.set("P103", { name: "Wireless Earbuds", price: 150, category: "Audio" });
productCatalog.set("P104", { name: "Mechanical Keyboard", price: 90, category: "Accessories" });
productCatalog.set("P105", { name: "Gaming Mouse", price: 60, category: "Accessories" });

const messageEl = document.getElementById("message");

// Display results in HTML
const displayCatalog = (filterId = null) => {
    const container = document.getElementById("catalog-container");
    const totalEl = document.getElementById("total-products");

    // Show total products using .size
    totalEl.textContent = productCatalog.size;

    container.innerHTML = "";

    // If searching, only show one product, otherwise show all
    let itemsToDisplay = [];
    if (filterId) {
        if (productCatalog.has(filterId)) {
            itemsToDisplay.push([filterId, productCatalog.get(filterId)]);
        }
    } else {
        itemsToDisplay = Array.from(productCatalog.entries());
    }

    if (itemsToDisplay.length === 0) {
        container.innerHTML = `<p style="color: var(--muted); text-align: center; width: 100%;">No products found.</p>`;
        return;
    }

    itemsToDisplay.forEach(([id, product]) => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <div>
                <div class="product-id">ID: ${id} | ${product.category}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price}</div>
            </div>
            <div class="delete-icon" onclick="deleteProduct('${id}')">DELETE</div>
        `;
        container.appendChild(div);
    });
};

// Implement search by ID
window.searchProduct = () => {
    const inputId = document.getElementById("search-id").value.trim().toUpperCase();
    if (!inputId) {
        displayCatalog(); // show all if empty
        showMessage("Showing all products.", "var(--success)");
        return;
    }

    if (productCatalog.has(inputId)) {
        displayCatalog(inputId);
        showMessage(`Found product: ${inputId}`, "var(--success)");
    } else {
        displayCatalog(inputId); // empty
        showMessage(`Product ID "${inputId}" not found.`, "#ef4444");
    }
};

// Implement delete product
window.deleteProduct = (id) => {
    if (productCatalog.has(id)) {
        productCatalog.delete(id);
        showMessage(`Deleted product: ${id}`, "var(--success)");
        document.getElementById("search-id").value = "";
        displayCatalog();
    } else {
        showMessage(`Failed to delete. ID not found.`, "#ef4444");
    }
};

window.handleDelete = () => {
    const inputId = document.getElementById("delete-id").value.trim().toUpperCase();
    if (!inputId) return;
    deleteProduct(inputId);
    document.getElementById("delete-id").value = "";
};

const showMessage = (msg, color) => {
    messageEl.textContent = msg;
    messageEl.style.color = color;
    setTimeout(() => { messageEl.textContent = ""; }, 3000);
};

// Initial Display
displayCatalog();
