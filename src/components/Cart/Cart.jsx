import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import ItemCart from "../Itemcart/ItemCart";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].item.price_USD * cart[i].quantity;
  }

  return (
    <div className="container">
      <div>
        <h1>Your Cart</h1>
        <div className="card w-100 message-card">
          {cart.length === 0 ? (
            <h5 className="message">
              Sorry, you have to select a product first
            </h5>
          ) : (
            cart.map((item, key) => <ItemCart key={key} {...item} />)
          )}
        </div>
      </div>
      <h3 className="total">$ {total} USD</h3>

      <div className="final-buttons">
        
        <button className="btn btn-primary " onClick={() => clear()}>
          Clear Cart
        </button>
        <Link to="/" className="return-link">
          <button className="retun-link-text btn btn-primary ">
            Back to List
          </button>
        </Link>
        <Link to="/checkout" className={` ${cart.length === 0 ? 'disabled' : ''}`}  >
        <button className="btn btn-primary">
        Go To Checkout
        </button>
        </Link>
      </div>

    </div>
  );
};
export default Cart;
