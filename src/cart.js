const cart = [];
export let cartSize = 0;
export function getCartSize() {
  return cartSize;
}

export function cartAdd(item) {
  cartSize = cartSize + 1;
  /*
  for (const cartItem in cart) {
    if (item.id === cartItem.id) {
      cartItem.count + 1;
      cartSize + 1;
    } else {
      item.count = 1;
      cart.push(item);
      cartSize + 1;
    }
  }
  */
  console.log(cartSize);
}
