import React from 'react';
import cartIcon from "../../assets/icons/cartIcon.png";
import './CartWidget.css';

function CartWidget() {
  return (

    <div className="cart">
        <img src={cartIcon} className="cart__icon remove-bg" alt="shopping cart" />
    </div>

  );
}
export default CartWidget;