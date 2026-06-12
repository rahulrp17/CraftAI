export const addToCartFn = (product, prev) => {
  const existing = prev.find((item) => item._id === product._id);
  if (existing) {
    return prev.map((item) =>
      item._id === product._id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    );
  }
  return [...prev, { ...product, quantity: 1 }];
};

export const removeFromCartFn = (id, prev) => {
  return prev.filter((item) => item._id !== id);
};

export const decreaseQtyFn = (id, prev) => {
  return prev
    .map((item) =>
      item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
    )
    .filter((item) => item.quantity > 0);
};

export const getTotalFn = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const getTotalItemsFn = (cart) => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const CART_KEY = "amazon_cart";
