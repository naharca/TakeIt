import { useContext } from "react";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import { CartContext } from "../../Context/CartContext";

const ItemCart = ({ item, quantity, id }) => {
  console.log(item);
  console.log(quantity);
  const { removeItem } = useContext(CartContext);

  return (
    <div className="row p-3">
      <div className="col-2">{`${item.picture}`}</div>
      <div className="col-4">
        <h5>{`${item.Type} ${item.name}`}</h5>
      </div>
      <div className="col-2">
        <h5>{`${quantity}`}</h5>
      </div>
      <div className="col-2">
        <h5>{`${item.price_USD}`}</h5>
      </div>
      <div className="col-1">
        <button
          className="btn delete-icon-btn"
          onClick={() => removeItem(item.id)}
        >
          <img src={deleteIcon} className="delete-icon" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
