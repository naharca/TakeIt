import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  console.log(cart);

  const addItem = (product, quantity) => {
    let prod = cart.findIndex((item) => item.id === product.id);
    if (prod !== -1) {
      alert("This product has been already added");
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          picture: product.picture,
          Type: product.Type,
          stock: product.stock,
          price_USD: product.price_USD,
          quantity: quantity,
        },
      ]);
    }
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    console.log(`item removed using id  ${id}`);
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

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
