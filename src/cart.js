export const cart = [];
export let cartSize = 0;

export function getCartSize() {
  cartSize = 0;
  cart.forEach((cartItem) => {
    cartSize += cartItem.count;
  });
  console.log(cartSize);
  return cartSize;
}

export function cartAdd(item) {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.count += item.count;
  } else {
    cart.push(item);
  }
  console.log(cartSize);
}
