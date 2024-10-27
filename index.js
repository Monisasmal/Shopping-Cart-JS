const products = [
    { id:1, name:'Product-1', Price: 100},
    { id:2, name:'Product-2', Price: 200},
    { id:3, name:'Product-3', Price: 300},
];

// create the to store the quatuty
let cart ={
    1: 0,
    2: 0,
    3: 0,
};


// initialize the product button
function initializationButton(){
    let incrementButton = document.querySelectorAll('.increment');
    let decrementButton = document.querySelectorAll('.decrement');
    
    // Add event listener in + buuton
    incrementButton.forEach((button, index) => {
        const productId = index + 1;
        button.addEventListener('click', () => updateQuantity(productId, 'Increment'));
    });

    // Add event listener in - button
    decrementButton.forEach((button, index) => {
        const productId = index + 1;
        button.addEventListener('click', () => updateQuantity(productId, 'Decrement'));
    });

}

// Update Quantity in Cart
function updateQuantity(productId, action){
    if(action === 'Increment'){
        cart[productId]++;
    }
    else if(action === 'Decrement' && cart[productId] > 0){
        cart[productId]--;
    }

    document.getElementById(`quantity-${productId}`).textContent = cart[productId];

    updateCartDisplay();
}

// for update data in cart

function updateCartDisplay(){
    const cartItemContainer = document.getElementById('cartItem');
    cartItemContainer.innerHTML = '';
    let totalPrice = 0;
    let isItems = false;

    for(let id in cart){
        const quantity = cart[id];
        if(quantity > 0){
            const product = products.find(p => p.id === parseInt(id));
            const itemTotal = product.Price * quantity;
            totalPrice += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `<span>${product.name}</span><span>${quantity} × ${product.Price}</span>`;
            cartItemContainer.appendChild(cartItem);
            
            isItems = true;
        }
    }
    if(!isItems){
        cartItemContainer.textContent  = 'No Product added to the cart'; 
    }

    document.getElementById('totalPrice').textContent = totalPrice;
}

document.addEventListener('DOMContentLoaded',  initializationButton);




