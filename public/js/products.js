// // // Add to Cart function
// // function addToCart(itemName, itemPrice) {
// //     // Retrieve cart items from local storage
// //     let cart = JSON.parse(localStorage.getItem('cart')) || [];

// //     // Add new item to the cart
// //     cart.push({ name: itemName, price: itemPrice });

// //     // Save the updated cart back to local storage
// //     localStorage.setItem('cart', JSON.stringify(cart));

// //     // Notify user
// //     alert(`${itemName} has been added to the cart!`);
// // }

// // // Function to load cart items in the Cart page
// // function loadCartItems() {
// //     const cartContainer = document.querySelector('.cart-items');
// //     const totalContainer = document.querySelector('.total');

// //     // Retrieve cart items from local storage
// //     let cart = JSON.parse(localStorage.getItem('cart')) || [];

// //     // Clear existing cart display
// //     cartContainer.innerHTML = '';

//     // Add cart items to the display
//     let total = 0;
//     cart.forEach((item, index) => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             ${item.name} - Rs ${item.price} 
//             <button onclick="removeCartItem(${index})">Delete</button>
//         `;
//         cartContainer.appendChild(listItem);
//         total += item.price;
//     });

//     // Update total
//     totalContainer.textContent = `Total: Rs ${total}`;
// }

// // Remove item from the cart
// function removeCartItem(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     loadCartItems();
// }

// // Clear all items from the cart
// function clearCart() {
//     localStorage.removeItem('cart');
//     loadCartItems();
// }

// // Attach event listener for Clear button (in `cart.ejs`)
// document.querySelector('.clear-btn')?.addEventListener('click', clearCart);

// // Load cart items on page load (in `cart.ejs`)
// document.addEventListener('DOMContentLoaded', loadCartItems);
// Add to Cart function
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to the cart!`);
}

// Function to load cart items in the Cart page
function loadCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    const totalContainer = document.querySelector('.total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - Rs ${item.price} 
            <button onclick="removeCartItem(${index})">Delete</button>
              <button onclick="buyItem('${item.name}')" style="background-color: green; color: white; padding: 5px 10px; border: none; cursor: pointer;">Buy</button>
        `;
        cartContainer.appendChild(listItem);
        total += item.price;
    });
    totalContainer.textContent = `Total: Rs ${total}`;
}

// Remove item from the cart
function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

// Clear all items from the cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCartItems();
}

// Buy item function
function buyItem(itemName) {
    alert(`Thank you for purchasing ${itemName}!`);
}

// Attach event listener for Clear button (in `cart.ejs`)
document.querySelector('.clear-btn')?.addEventListener('click', clearCart);

document.addEventListener('DOMContentLoaded', loadCartItems);

