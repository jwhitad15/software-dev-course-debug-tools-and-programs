const cart = [
    { name: "Laptop", price: 1234 },
    { name: "Phone", price: 555 },
    { name: "Headphones", price: 310 }
  ];
  
  function calculateTotal(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
        total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
    }
    return total;
  }
  
  function applyDiscount(total, discountRate) {
    if (discountRate < 0 || discountRate > 1) {
      console.log("Discounts below 0% or greater than 100% are invalid. Please enter a valid discount rate.")
    } else {
      return total - total * discountRate; // Bug: Missing validation for discountRate
    }
  }
  
  function generateReceipt(cartItems, total) {
    if (total !== NaN) {
      console.log("ERROR 004: Receipt can only print numerical numbers.")
    }
  
    let receipt = "Items:\n";
    cartItems.forEach(item => {
        receipt += `${item.name}: $${item.price}\n`;
    });
    receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
    return receipt;
  }
  
  // Debugging entry point
  console.log("Starting shopping cart calculation...");
  const total = calculateTotal(cart);
  const discountedTotal = applyDiscount(total, 0.2); // 20% discount
  const receipt = generateReceipt(cart, discountedTotal);
  
  document.getElementById("total").textContent = `Total: $${discountedTotal}`;
  document.getElementById("receipt").textContent = receipt;