import React, { Component } from 'react';
import cartIcon from "../../icons/cartIcon.png";
import './CartWidget.css';

function CartWidget() {
  return (

    <div className="cart">
        <img src={cartIcon} className="cart__icon remove-bg" alt="shopping cart" />
    </div>

  );
}
export default CartWidget;