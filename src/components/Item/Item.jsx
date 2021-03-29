import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

function Item({ item }) {
  return (
    <div className="item">
      <img className="item-picture" src={item.picture} alt={item.name} />
      <div className="card-body">
        <h5 className="product-name">{item.name}</h5>
        <Link to={`/item/${item.id}`} className="btn btn-primary btn-md ">
          Product Detail
        </Link>
      </div>
    </div>
  );
}

export default Item;
