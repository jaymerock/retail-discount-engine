console.log("✅ JavaScript is working");
// Step 2: Create array of products
let products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventory: 20 },
  { name: "Bananas", category: "groceries", price: 1, inventory: 100 },
  { name: "Detergent", category: "household", price: 5, inventory: 50 },
  { name: "Notebook", category: "stationery", price: 2, inventory: 30 },
];

// Step 3: Apply category-based discount using switch
for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      // No discount
      break;
  }
  product.price = parseFloat(product.price.toFixed(2)); // Round to 2 decimals
}

// Step 4: Customer types and extra discount logic
let customerTypes = ["regular", "student", "senior"];

// Step 5: Simulate checkout for 3 customers
for (let i = 0; i < 3; i++) {
  let customerType = customerTypes[i]; // Simulate different types
  let total = 0;

  for (let product of products) {
    if (product.inventory > 0) {
      total += product.price;
      product.inventory--; // Decrease inventory by 1
    }
  }

  // Apply additional customer discount
  if (customerType === "student") {
    total *= 0.95;
  } else if (customerType === "senior") {
    total *= 0.93;
  }
  total = parseFloat(total.toFixed(2));

  console.log(`Customer ${i + 1} (${customerType}) Total: $${total}`);
}

// Step 6: Log key/value pairs using for...in for the first product
console.log("\nDiscounted Product Details (for...in):");
let sampleProduct = products[0];
for (let key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

// Step 7: Log updated product info using Object.entries() and destructuring
console.log("\nUpdated Inventory (Object.entries + destructuring):");
for (let product of products) {
  let entries = Object.entries(product);
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  console.log("---");
}