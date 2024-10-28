// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Function to load cart items from local storage
function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    // Create elements for each item in the cart
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    // Display the total price
    document.getElementById('total-price').innerText = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(id) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    loadCartItems(); // Reload cart items after removal
}

// Load cart items when the page loads
window.onload = loadCartItems;

// Function to open the checkout modal
document.getElementById('checkout-btn').onclick = function() {
    document.getElementById('checkout-modal').style.display = 'block';
};

// Function to close the checkout modal
function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    closeModal(); // Close the modal
    alert('Form submitted successfully!'); // Show success message
    // You can add more functionality here, like sending the form data to the server
}
