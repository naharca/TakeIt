import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart);
  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((re) => re.item.id !== itemId));

    console.log(`item removed using id  ${itemId}`);
  };
  const clear = () => {
    setCart([]);

    console.log("Your cart its clean now");
  };

  const isInCart = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      return true;
    } else {
      return false;
    }
  };

  const Total = () => {
    let total = cart.reduce((actual, current) => {
      return current.item.price_USD * current.quantity + actual;
    }, 0);
    setTotalPrice(total);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
