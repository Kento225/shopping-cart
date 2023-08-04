export let cart = [];
export let cartSize = 0;

export function getCartSize() {
  cartSize = 0;
  cart.forEach((cartItem) => {
    cartSize += cartItem.count;
  });
  return cartSize;
}

export function cartAdd(item) {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.count += item.count;
  } else {
    cart.push(item);
  }
}

export function getTotalPrice() {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.count;
  });
  return totalPrice;
}
export function editCart(id, operation) {
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      if (operation === "-") {
        item.count = item.count - 1;
      } else if (operation === "+") {
        item.count += 1;
      }
    }
    return item;
  });

  cart = updatedCart.filter((item) => item.count > 0);
}
