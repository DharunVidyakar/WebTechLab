// Function to add items to the cart
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show popup message
    showPopup(`Item has been added to the cart!`);
}

// Function to display cart items on the cart page
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
            <a href="shop.html" class="btn btn-success">Shop Now</a>
        `;
    } else {
        let cartHTML = `
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
        `;
        let grandTotal = 0;
        cart.forEach((item, index) => {
            const total = item.price * item.quantity;
            grandTotal += total;
            cartHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>₹${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>₹${total}</td>
                    <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Delete</button></td>
                </tr>
            `;
        });
        cartHTML += `
                </tbody>
            </table>
            <h4>Grand Total: ₹${grandTotal}</h4>
            <button class="btn btn-danger" onclick="clearCart()">Clear Cart</button>
            <a href="checkout.html" class="btn btn-success">Proceed and Checkout</a> 
        `;
        cartContainer.innerHTML = cartHTML;
    }
}

// Function to remove a specific item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Remove item at the given index
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart(); // Refresh the cart display
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cart");
    showPopup("Cart has been cleared!");
    displayCart();
}

// Function to show a popup message
function showPopup(message) {
    let popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.background = "green";
    popup.style.color = "white";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.zIndex = "1000";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

// Attach event listener to "Add to Cart" buttons on the shop page
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".btn-warning");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.querySelector(".card-title").textContent;
            const productPrice = parseInt(button.parentElement.querySelector(".text-success").textContent.replace(/₹|\/.*/g, ""));
            addToCart(productName, productPrice);
        });
    });

    // If on the cart page, display the cart
    if (document.getElementById("cart-container")) {
        displayCart();
    }
});
