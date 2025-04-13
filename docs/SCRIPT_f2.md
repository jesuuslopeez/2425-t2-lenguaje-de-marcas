# Explicación del código realizado en JavaScript
## 1. AÑADIR LOGO THERMO - CART YOU MIGHT ALSO LIKE
    // Seleccionamos la clase del contenedor al que vamos a agregarle el producto.
    const container = document.querySelector(".suggestions__items"); 
    
    // Creamos un nuevo article.
    const newProduct = document.createElement("article");
    // Le aplicamos la clase suggestions__item
    newProduct.classList.add("suggestions__item");

    // Definimos el HTML que le vamos a dar.
    newProduct.innerHTML = `
        <img src="assets/thermo.png" alt="Logo Thermo" class="suggestions__image">
        <h3 class="suggestions__name">Logo Thermo</h3>
        <p class="suggestions__price">$14.99</p>
        <button class="suggestions__add">Add to Cart</button>
    `;

    // Agregamos el producto
    container.appendChild(newProduct);

## 2. ELIMINAR GRAPHIC TEE - CART
    // Seleccionamos la clase del contenedor al que vamos a eliminarle el producto.
    const cartItems = document.querySelectorAll(".cart__item");

    // Verificamos que haya 1 elemento en el carrito.
    if (cartItems.length > 0) {
        // Si hay algún elemento, eliminamos el primero, cuyo indice es el 0.
        cartItems[0].remove();
    }

## 3. CAMBIAR FUENTE FORMULARIO - BRAND
    // Seleccionamos todos los <input> que estén dentro ed .join__form.
    document.querySelectorAll(".join__form input").forEach(input => {
        // A cada <input> le cambiamos la fuente.
        input.style.fontFamily = "var(--p-font)";
    });

## 4. MODIFICAR CONTENIDO YA CREADO - CLOTHING
    // Seleccionamos el título de la sección de productos
    const dropTitle = document.querySelector(".products__title");
    // Si realmente existe dropTitle, le cambiamos el título.
    if (dropTitle) {
        dropTitle.textContent = "The Unknown Drop";
    }

    // Seleccionamos todas las imagenes de los productos.
    const productImages = document.querySelectorAll(".products__image");
    // Si hay alguna imagen, se cambia la imagen y el texto alt.
    if (productImages.length > 0) {
        productImages.forEach(img => {
            img.src = "assets/idk.png";
            img.alt = "Mysterious Product"; 
        });
    }

    // Funcion que genera un nombre random.
    function generateRandomName(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomName = "";
        for (let i = 0; i < length; i++) {
            // Selecciona un carácter aleatorio de la cadena.
            randomName += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomName;
    }

    // Seleccionamos todos los nombres de los productos.
    const productNames = document.querySelectorAll(".products__name");
    // Si realmente hay nombres de productos, se les asigna uno random.
    if (productNames.length > 0) {
        productNames.forEach(name => {
            name.textContent = generateRandomName(8); 
        });
    }

    // Lista de monedas
    const currencies = ["€", "$", "£", "¥"];
    // Seleccionamos todos los precios
    const productPrices = document.querySelectorAll(".products__price");

    // Si hay precios, les asignamos XXX y la moneda.
    if (productPrices.length > 0) {
        productPrices.forEach((price, index) => {
            let randomPrice = "XXX" + currencies[index % currencies.length]; 
            price.textContent = randomPrice;
        });
    }

