// Toggle Mobile Navbar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Slideshow Logic
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-controls span');
    
    // Hide all slides and remove "active" from all dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Move to the next slide or reset if at the end
    slideIndex = (slideIndex + 1) % slides.length;
    
    // Show the current slide and highlight the corresponding dot
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
    
    setTimeout(showSlides, 6000); // Change slide every 3 seconds
}

// Start the slideshow
showSlides();

function currentSlide(n) {
    slideIndex = n - 1; // Set slide index to selected slide
    showSlides();
}
