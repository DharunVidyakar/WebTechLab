// Display the cart summary on the checkout page
function displayCartSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        cartSummary.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
        let summaryHTML = `
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
        `;
        let grandTotal = 0;
        cart.forEach(item => {
            const total = item.price * item.quantity;
            grandTotal += total;
            summaryHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>₹${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>₹${total}</td>
                </tr>
            `;
        });
        summaryHTML += `
                </tbody>
            </table>
            <h4>Grand Total: ₹${grandTotal}</h4>
        `;
        cartSummary.innerHTML = summaryHTML;
    }
}

// Handle the checkout form submission
document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("payment-method").value;

    // Simulate order processing
    alert(`Thank you, ${name}! Your order has been placed successfully.`);

    // Clear the cart after order is placed
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html"; // Redirect to shop or confirmation page
});

// Load the cart summary when the page loads
document.addEventListener("DOMContentLoaded", displayCartSummary);
