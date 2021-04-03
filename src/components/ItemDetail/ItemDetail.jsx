import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
    const initial = 0;
    const [itemsQty, setItemsQty]= useState(initial);

    const addToCart = () => {
        console.log (`added to cart: ${itemsQty} items of the product ${item.id}`);
        item.stock -=itemsQty;
        setItemsQty(initial);
    }

    const onAdd = (e) => {
        e.preventDefault();
        setItemsQty(itemsQty < item.stock ? itemsQty + 1 : itemsQty)
    };

    const onSubstract = (e) => {
        e.preventDefault();
        setItemsQty(itemsQty > initial ? itemsQty - 1 : itemsQty)
    };

   


    return (
        <div className="item" id={item.id} >
            <img className="item-picture" src={item.picture} alt={item.name} />
            <ItemCount stock={item.stock} value={itemsQty} onAdd={onAdd} onSubstract={onSubstract} />
            <button type="button" className="btn btn-primary btn-md shadow-lg" hidden={!item.stock} onClick={() => addToCart()}>Add to cart</button>
            
            
            <div className="card-body">
                <h5 className="product-name">{item.name}</h5>
                <div className="product-description">
                    <p> Type : {item.Type}</p>
                    <p> RAM : {item.ram}</p>
                    <p> Core : {item.core}</p>
                    <p> Screen :{item.screen_size}</p>
                    <p> Stock :{item.stock}</p>

                    <p className="price">PRICE:  {item.price_USD}$</p>
                </div>
                {/* <a href="#" className="btn btn-primary"></a> */}
            </div>
            <Link to="/cart" className="btn btn-primary btn-md" hidden={!item.stock}>Complete the purchase</Link>

        </div>

    );




};

export default ItemDetail;