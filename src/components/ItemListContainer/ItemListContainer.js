import React from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";


const ItemListContainer = (props) => (
    <div>
        <h1>Container</h1>
        <ItemList items={props.items}/>
    </div>
);

export default ItemListContainer;


