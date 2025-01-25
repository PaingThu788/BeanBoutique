window.onload = function () {
    document.querySelector('.welcome-popup').style.display = 'block';
};


function closePopup() {
    document.querySelector('.welcome-popup').style.display = 'none';
}


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}


showSlide(slideIndex);

setInterval(autoSlide, 1000);

function addToCart(productName, price, event) {
    // Prevent the page from refreshing and modal from appearing (form submission)
    event.preventDefault();

    // Get the current cart from localStorage or initialize an empty cart
    cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Update cart item count for the product
    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = { price: price, quantity: 1 };
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Increment the cart count badge based on the updated cart
    let totalCartCount = 0;
    for (let product in cart) {
        totalCartCount += cart[product].quantity;
    }

    // Update cart count badge on the page
    document.getElementById('cart-count').textContent = totalCartCount;

    // Remove the alert line below if you don't want the pop-up
    // alert(`${productName} added to cart!`);
}

