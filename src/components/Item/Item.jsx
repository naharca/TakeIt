import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  return (
    <div className="item-product">
      <img className="item-pictures" src={item.picture} alt={item.name} />
      <div className="card-body">
        <h5 className="product-names">{item.name}</h5>
        <Link to={`/item/${item.id}`} className="btn btn-primary btn-md">
          Product Detail
        </Link>
      </div>
    </div>
  );
}

export default Item;
