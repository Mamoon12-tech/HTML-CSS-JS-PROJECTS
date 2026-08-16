const cart = [];
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach((button) =>
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
  })
);

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}
