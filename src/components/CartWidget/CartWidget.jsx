import React from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from "../../Context/CartContext";
import cartIcon from "../../assets/icons/cartIcon.png";
import './CartWidget.css';

const  CartWidget = () => {
  let {cart, length} = CartContext()

  return (

    <Link  to="/cart" className="cart" >
        <img src={cartIcon} className="cart-icon remove-bg" alt="shopping cart" />
    </Link>

  );
}
export default CartWidget;