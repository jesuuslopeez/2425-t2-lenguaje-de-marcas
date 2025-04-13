// AÑADIR LOGO THERMO - CART YOU MIGHT ALSO LIKE
/*
const container = document.querySelector(".suggestions__items");

const newProduct = document.createElement("article");
newProduct.classList.add("suggestions__item");

newProduct.innerHTML = `
    <img src="assets/thermo.png" alt="Logo Thermo" class="suggestions__image">
    <h3 class="suggestions__name">Logo Thermo</h3>
    <p class="suggestions__price">$14.99</p>
    <button class="suggestions__add">Add to Cart</button>
`;

container.appendChild(newProduct);
*/

/* ================================================================================================================================== */

// ELIMINAR GRAPHIC TEE - CART
/*
const cartItems = document.querySelectorAll(".cart__item");

if (cartItems.length > 0) {
    cartItems[0].remove();
}
*/

/* ================================================================================================================================== */

// CAMBIAR FUENTE FORMULARIO - BRAND
/*
document.querySelectorAll(".join__form input").forEach(input => {
    input.style.fontFamily = "var(--p-font)";
});
*/

/* ================================================================================================================================== */

// MODIFICAR CONTENIDO YA CREADO - CLOTHING
/*
const dropTitle = document.querySelector(".products__title");
if (dropTitle) {
    dropTitle.textContent = "The Unknown Drop";
}

const productImages = document.querySelectorAll(".products__image");
if (productImages.length > 0) {
    productImages.forEach(img => {
        img.src = "assets/idk.png";
        img.alt = "Mysterious Product"; 
    });
}

function generateRandomName(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomName = "";
    for (let i = 0; i < length; i++) {
        randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
}

const productNames = document.querySelectorAll(".products__name");
if (productNames.length > 0) {
    productNames.forEach(name => {
        name.textContent = generateRandomName(8); 
    });
}

const currencies = ["€", "$", "£", "¥"];
const productPrices = document.querySelectorAll(".products__price");

if (productPrices.length > 0) {
    productPrices.forEach((price, index) => {
        let randomPrice = "XXX" + currencies[index % currencies.length]; 
        price.textContent = randomPrice;
    });
}
*/