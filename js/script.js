document.addEventListener('DOMContentLoaded', () => {
    const menuCartLink = document.querySelector('a[href="cart.html"]');
    if (menuCartLink && !menuCartLink.classList.contains('cart-link')) {
        menuCartLink.classList.add('cart-link');
    }

    // ===== 1. BOTÓN Suggests =====
    const navList = document.querySelector('.navegacion__lista');
    const suggestsItem = document.createElement('li');
    suggestsItem.classList.add('lista__elemento');
    const suggestsLink = document.createElement('a');
    suggestsLink.href = 'suggests.html';
    suggestsLink.classList.add('elemento__enlace');
    suggestsLink.textContent = 'Suggests';
    suggestsItem.appendChild(suggestsLink);

    const cartItem = document.querySelector('.cart-link')?.closest('.lista__elemento');
    if (cartItem) {
        navList.insertBefore(suggestsItem, cartItem);
    } else {
        navList.appendChild(suggestsItem);
    }

    // ===== 2. ACTUALIZAR CONTADOR CARRITO =====
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartLink = document.querySelector('.cart-link');
        if (cartLink) {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartLink.textContent = `Cart (${count})`;
        }
    }

    updateCartCount();

    // ===== 3. AÑADIR AL CARRITO =====
    function addToCart(name, price, image) {
        const product = { name, price, image, quantity: 1 };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const index = cart.findIndex(item => item.name === product.name);

        if (index !== -1) {
            cart[index].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        renderCart();
    }

    function setupAddToCartButtons() {
        const container = document.querySelector('body');

        if (!container.hasAttribute('data-add-cart-listener')) {
            container.addEventListener('click', (event) => {
                if (event.target.matches('.products__button--add-cart, .suggestions__add')) {
                    const button = event.target;
                    const productElement = button.closest('.products__item, .suggestions__item');
                    const name = productElement.querySelector('.products__name, .suggestions__name').textContent;
                    const price = parseFloat(productElement.querySelector('.products__price, .suggestions__price').textContent.replace('$', ''));
                    const image = productElement.querySelector('.products__image, .suggestions__image').getAttribute('src');

                    addToCart(name, price, image);
                }
            });

            container.setAttribute('data-add-cart-listener', 'true');
        }
    }

    setupAddToCartButtons();

    // ===== 4. PREPARADOR CARRITO =====
    function renderCart() {
        const cartContainer = document.querySelector('.cart__items');
        if (!cartContainer) return;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';

        cart.forEach(product => {
            const article = document.createElement('article');
            article.classList.add('cart__item');

            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('cart__quantity');
            quantityContainer.style.display = 'flex';
            quantityContainer.style.alignItems = 'center';
            quantityContainer.style.gap = '0.5rem';
            quantityContainer.style.fontFamily = 'var(--p-font)';
            quantityContainer.style.fontSize = '1rem';
            quantityContainer.style.margin = '0.5rem 0';

            const quantityText = document.createTextNode('Quantity: ');

            const decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            styleQuantityButton(decreaseButton);

            const quantityNumber = document.createElement('span');
            quantityNumber.classList.add('quantity__number');
            quantityNumber.textContent = product.quantity;
            quantityNumber.style.minWidth = '1.5rem';
            quantityNumber.style.textAlign = 'center';
            quantityNumber.style.display = 'inline-block';
            quantityNumber.style.fontWeight = 'bold';

            const increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            styleQuantityButton(increaseButton);

            quantityContainer.appendChild(quantityText);
            quantityContainer.appendChild(decreaseButton);
            quantityContainer.appendChild(quantityNumber);
            quantityContainer.appendChild(increaseButton);

            article.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart__image">
                <section class="cart__details">
                    <h2 class="cart__name">${product.name}</h2>
                    <p class="cart__price">$${product.price.toFixed(2)}</p>
                </section>
            `;

            const detailsSection = article.querySelector('.cart__details');
            detailsSection.appendChild(quantityContainer);

            const subtotal = document.createElement('p');
            subtotal.classList.add('cart__subtotal');
            subtotal.textContent = `Subtotal: $${(product.price * product.quantity).toFixed(2)}`;
            subtotal.style.fontFamily = 'var(--p-font)';
            detailsSection.appendChild(subtotal);

            const removeButton = document.createElement('button');
            removeButton.classList.add('cart__remove');
            removeButton.textContent = 'Remove';
            detailsSection.appendChild(removeButton);

            cartContainer.appendChild(article);
        });

        setupRemoveButtons();
        setupQuantityButtons();
        updateSummary();
    }

    function styleQuantityButton(button) {
        button.style.backgroundColor = 'var(--secondary-color)';
        button.style.color = 'var(--white)';
        button.style.border = 'none';
        button.style.borderRadius = '0.3rem';
        button.style.padding = '0.2rem 0.6rem';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
        button.style.fontFamily = 'var(--title-font)';
        button.style.fontSize = '1rem';

        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'var(--main-color)';
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'var(--secondary-color)';
            button.style.transform = 'scale(1)';
        });
    }

    renderCart();

    // ===== 5. ELIMINAR PRODUCtO CARRITO =====
    function setupRemoveButtons() {
        const removeButtons = document.querySelectorAll('.cart__remove');

        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productElement = button.closest('.cart__item');
                const productName = productElement.querySelector('.cart__name').textContent;

                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart = cart.filter(item => item.name !== productName);

                localStorage.setItem('cart', JSON.stringify(cart));

                updateCartCount();
                renderCart();
            });
        });
    }

    // ===== 6. BOTONES CANTIDAD CARRITO =====
    function setupQuantityButtons() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        document.querySelectorAll('.cart__item').forEach(itemElement => {
            const productName = itemElement.querySelector('.cart__name').textContent;
            const increaseButton = itemElement.querySelector('button:nth-of-type(2)');
            const decreaseButton = itemElement.querySelector('button:nth-of-type(1)');

            increaseButton.addEventListener('click', () => {
                const cartIndex = cart.findIndex(item => item.name === productName);
                cart[cartIndex].quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
            });

            decreaseButton.addEventListener('click', () => {
                const cartIndex = cart.findIndex(item => item.name === productName);
                cart[cartIndex].quantity -= 1;

                if (cart[cartIndex].quantity <= 0) {
                    cart.splice(cartIndex, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
            });
        });
    }

    // ===== 7. ACTUALIZAR VALORES PEDIDO =====
    function updateSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = cart.length > 0 ? 10.00 : 0.00;
        const total = subtotal + shipping;

        const subtotalElement = document.querySelector('.summary__subtotal');
        const shippingElement = document.querySelector('.summary__shipping');
        const totalElement = document.querySelector('.summary__total');
        const subtitleElement = document.querySelector('.cart__subtitle');

        if (subtotalElement) subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        if (shippingElement) shippingElement.textContent = `Shipping: $${shipping.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `Total: $${total.toFixed(2)}`;
        if (subtitleElement) subtitleElement.textContent = `You have ${cart.reduce((sum, item) => sum + item.quantity, 0)} item(s) in your cart`;
    }

    updateSummary();

    // ===== 8. FILTROS PRODUCTOS =====
    const filterButtons = document.querySelectorAll('.filter-button');
    const products = document.querySelectorAll('.products__item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            products.forEach(product => {
                const category = product.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // ===== 9. GALERÍA IMÁGENES =====
    const galleryContainer = document.getElementById('gallery-container');
    const urlInput = document.querySelector('.suggests__input');
    const addButton = document.querySelector('.suggests__add-button');

    let gallery = JSON.parse(localStorage.getItem('suggestGallery')) || [];

    function renderGallery() {
        galleryContainer.innerHTML = '';

        gallery.forEach((url, index) => {
            const item = document.createElement('article');
            item.classList.add('suggests__gallery-item');

            const img = document.createElement('img');
            img.src = url;
            img.alt = `Suggested Design ${index + 1}`;
            img.classList.add('suggests__gallery-image');

            const removeButton = document.createElement('button');
            removeButton.classList.add('suggests__remove-button');
            removeButton.textContent = 'Remove Image';

            removeButton.addEventListener('click', () => {
                gallery.splice(index, 1);
                localStorage.setItem('suggestGallery', JSON.stringify(gallery));
                renderGallery();
            });

            item.appendChild(img);
            item.appendChild(removeButton);
            galleryContainer.appendChild(item);
        });
    }

    renderGallery();

    addButton.addEventListener('click', () => {
        const url = urlInput.value.trim();

        if (!url) {
            alert('Please enter a valid image URL.');
            return;
        }

        if (gallery.includes(url)) {
            alert('This image is already in the gallery.');
            return;
        }

        const testImage = new Image();
        testImage.onload = function () {
            gallery.push(url);
            localStorage.setItem('suggestGallery', JSON.stringify(gallery));
            renderGallery();
            urlInput.value = '';
        };

        testImage.onerror = function () {
            alert('The image URL is not valid or the image could not be loaded.');
        };

        testImage.src = url;
    });    
});
