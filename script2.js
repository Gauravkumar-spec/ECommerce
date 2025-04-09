document.addEventListener('DOMContentLoaded', ()=>{
    const products = [
        {id: 1, name:"Prod1" , price: 29.99},
        {id: 2, name:"Prod2" , price: 49.99},
        {id: 3, name:"Prod3" , price: 89.99},
    ];

    const cart = [];

    const productList = document.getElementById("product-list")
    // const intraItems = document.getElementById("intra-items")
    const cartItems = document.getElementById("cart-items")
    const emptyCartMsg = document.getElementById("hidden1")
    const cartTotalMsg = document.getElementById("cart-total")
    const totalPriceDisplay = document.getElementById("Total :")
    const checkoutBtn = document.getElementById("checkout-btn")
    const removee = document.getElementById("remove")


    products.forEach((product)=>{
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = ` 
        <span> ${product.name} - $${product.price} </span>
        <button data-id = "${product.id}">Add to Cart </button>`;
     productList.appendChild(productDiv);
    })
    



    productList.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
            console.log("clicked");
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p=> p.id === productId)
            console.log(product);
            addToCart(product);
        }
    });


        function addToCart(product){
                cart.push(product);
                console.log(cart);
                renderCart();
        }

        
        
        function renderCart(){
            cartItems.innerHTML = "";

            let totalPrice = 0;

            if(cart.length>0){
                emptyCartMsg.classList.add('hidden');
                cartTotalMsg.classList.remove('hidden');
                removee.classList.remove('hidden');

                cart.forEach((item, index) => {
                    totalPrice += item.price;
                    const cartItem = document.createElement('div')
                    cartItem.innerHTML = `
                    ${item.name} - $${item.price}`
                    cartItems.appendChild(cartItem);
                });
                    totalPriceDisplay.textContent = `Total price : ${totalPrice.toFixed(2)}`
                
            } else {
                
                totalPriceDisplay.textContent = `${0.0}`;
                cartTotalMsg.classList.remove('hidden');
                removee.classList.add("hidden")
            }
        }
    
        checkoutBtn.addEventListener("click", () => {
            cart.length = 0;
            alert("Checkout succeed")
            console.log(cart.length);
            renderCart();
            removee.classList.add('hidden');
      


            
        });
        
        removee.addEventListener("click", (e) =>{
            if(cart.length > 0){
            cart.pop();
            renderCart();
            }
        })

 
    });


// STEP 1: To render all the products.
// STEP 2: Create a div to display simultaneous Add a Class to it.
// Step 3: Add Product.Name & Product.price via InnerHTML
// Step 4: Append with the existing div
// Step 5: Add listener to that div, Condition for Add To Cart;
        // If target ; 


