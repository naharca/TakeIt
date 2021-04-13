import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import cartIcon from "../../assets/icons/cartIcon.png";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const context = useContext(CartContext);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleBlur = () => {
    setTimeout(() => setActive(false), 300);
  };

  return (
    
    <div className="cart-widget">
      <Link
        to="/cart"
        className="cart"
        onClick={handleClick}
        onBlur={handleBlur}
      >
        <img
          src={cartIcon}
          className="cart-icon remove-bg"
          alt="shopping cart"
        />
        <span
          className={
            context.totalQty === 0 ? "" : "cart-widget-quantity appear"
          }
          hidden
        >
          {context.totalQty}
        </span>
      </Link>

      <div className={`cart-widget-items-container ${active ? "active" : ""}`}>
        <p>Your Selection</p>
        <div>
          {context.cart.length === 0 ? (
            <p>No items yet</p>
          ) : (
            context.cart.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.Type}</span>
                  <span>{item.quantity}</span>
                </li>
              );
            })
          )}
        </div>
        <NavLink to="/cart" className="btn-primary">
          <p>GO TO CART</p>
        </NavLink>
      </div>
    </div>
  );
};
export default CartWidget;
