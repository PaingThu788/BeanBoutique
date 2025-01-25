// Function to remove an item from the cart
function removeFromCart(productName) {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Remove the item from the cart
    delete cart[productName];

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reload the cart items
    displayCartItems();
}

// Function to display the cart items
function displayCartItems() {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the cart display

    // If the cart is empty
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    // Loop through the cart and display items
    for (let productName in cart) {
        let item = cart[productName];
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <p><strong>${productName}</strong> - $${item.price} x ${item.quantity}</p>
            <button class="remove-btn" onclick="removeFromCart('${productName}')">Remove</button>
        `;

        // Append the item to the cart container
        cartItemsContainer.appendChild(itemElement);
    }
}

// Display cart items when the page loads
window.onload = displayCartItems;