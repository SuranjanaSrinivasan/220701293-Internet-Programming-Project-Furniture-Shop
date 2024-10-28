// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Function to add a product to the cart
function addToCart(name, price, id) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = { name, price, id };
    
    // Add item if it's not already in the cart
    if (!cartItems.find(cartItem => cartItem.id === id)) {
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${name} added to cart.`);
    } else {
        alert(`${name} is already in the cart.`);
    }
}

// Function to add a product to the wishlist
function addToWishlist(name, price, id) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const item = { name, price, id };
    
    // Add item if it's not already in the wishlist
    if (!wishlistItems.find(wishlistItem => wishlistItem.id === id)) {
        wishlistItems.push(item);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        alert(`${name} added to wishlist.`);
    } else {
        alert(`${name} is already in the wishlist.`);
    }
}
