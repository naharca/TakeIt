import React from 'react';
import './Item.css';


function Item ({item}) {

    return (
        <div className="item" id={item.id} >
            <img className="item-picture" src={item.picture} alt={item.name} />
            <div className="card-body">
                <h5 className="product-name">{item.name}</h5>
                <button className="btn btn-primary btn-md">Product Detail</button>
                
            </div>
        </div>

    );
};



export default Item;





