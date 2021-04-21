import { useState, useEffect } from "react";
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

    console.log("Your cart is empty");
  };

  const isInCart = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      return true;
    } else {
      return false;
    }
  };

  // const Total = () => {
  //   let total = cart.map( c => {
  //     return c.item.price_USD * c.quantity;
  //   }, 0);
  //   setTotalPrice(total);
  // };
  const Total = () => {
    let total = 0;
    for (let i = 0; cart.length > i; i++) {
      total =
        total + parseInt(cart[i].item.total_USD) * parseInt(cart[i].quantity);
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    Total();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
