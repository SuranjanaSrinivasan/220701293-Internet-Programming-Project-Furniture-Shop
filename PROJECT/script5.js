// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Function to load wishlist items from local storage
function loadWishlistItems() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const wishlistItemsContainer = document.getElementById('wishlist-items');

    // Clear the wishlist items container
    wishlistItemsContainer.innerHTML = '';

    // Create elements for each item in the wishlist
    wishlistItems.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');
        wishlistItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromWishlist('${item.id}')">Remove</button>
        `;
        wishlistItemsContainer.appendChild(wishlistItem);
    });
}

// Function to remove an item from the wishlist
function removeFromWishlist(id) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const updatedWishlistItems = wishlistItems.filter(item => item.id !== id);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
    loadWishlistItems(); // Reload wishlist items after removal
}

// Load wishlist items when the page loads
window.onload = loadWishlistItems;
