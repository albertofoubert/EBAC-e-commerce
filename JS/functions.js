//Fast menu functions

const header = document.querySelector("header");
const menuIcon = header.firstElementChild;
const fastMenu = document.querySelector(".fast__menu");

menuIcon.addEventListener("click", () => {
    fastMenu.classList.toggle("show");

    const changeMenuIcon = () => {
    if (fastMenu.classList.contains("show")) {
        menuIcon.setAttribute("src", "img/crossIcon.png");
    } else {
        menuIcon.setAttribute("src", "img/newMenuIcon2.png");
    }
    };

    changeMenuIcon();
});

    

//Cart functions

const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");

    const changeCartIcon = () => {
    if (cart.classList.contains("show")) {
        cartIcon.setAttribute("src", "img/crossIcon.png");
    } else {
        cartIcon.setAttribute("src", "img/newCartIcon.png");
    }
    };

    changeCartIcon();

});

//Add to cart buttons

const addCartButtons = document.querySelectorAll(".add__cart");
const cartProducts = document.querySelector(".cart__products");

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".products__item");

    const img = product.querySelector(".products__item--img").src;
    const title = product.querySelector(".products__item--title").textContent;
    const price = product.querySelector(".products__item--price").textContent;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");

    cartItem.innerHTML = `
      <img src="${img}" alt="${title}" class="cart__item--img">
      <p>${title}</p>
      <p class="cart__item--price">${price}</p>
      <i>
        <img src="./img/icono eliminar.png" alt="Eliminar producto" class="delete-icon">
      </i>
    `;

    cartProducts.appendChild(cartItem);
  });
});

//Delete cart products

cartProducts.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-icon")) {

        e.target.closest(".cart__item").remove();

        contador--;
        cartBadge.textContent = contador;
    }
});

//Cart counter

const cartBadge = document.querySelector(".cart-badge");
let contador = 0;

addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        contador++;
        cartBadge.textContent = contador;
    });
});