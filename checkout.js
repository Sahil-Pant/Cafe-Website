// Fetch cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

function updateCheckoutUI() {
    const checkoutItems = document.getElementById('checkout-items');
    const totalItemsEl = document.getElementById('total-items');
    const totalCostEl = document.getElementById('total-cost');

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
        </div>
    `).join('');

    totalItemsEl.textContent = totalItems;
    totalCostEl.textContent = totalCost;
}

document.getElementById('place-order-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your order!');
        localStorage.removeItem('cart'); // Clear cart
        window.location.href = 'index.html'; // Redirect to home
    } else {
        alert('Your cart is empty!');
    }
});

// Initialize checkout UI
updateCheckoutUI();
