class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    displayCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = this.items.map(item => 
            `<li>${item.name} - ₹${item.price.toFixed(2)}</li>`
        ).join('');
        document.getElementById('total-price').textContent = `Total: ₹${this.totalPrice.toFixed(2)}`;
    }

    addItem(product) {
        this.items.push(product);
        this.totalPrice += product.price;
        this.displayCart();
    }
}

const cart = new Cart();

function createProduct(productElement) {
    return new Product(
        parseInt(productElement.getAttribute('data-id')),
        productElement.querySelector('h3').textContent,
        parseFloat(productElement.querySelector('p').textContent.replace('Price: ₹', '')),
        productElement.querySelector('img').src
    );
}

function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const product = createProduct(productElement);
            cart.addItem(product);
        });
    });
}


setupAddToCartButtons();