import React, { Component } from 'react';
import "./ItemListContainer.css";


function ItemListContainer(props) {
    return (

        <div className="item-list-container">
            <h3>
                 {props.greeting}
            </h3>
        </div>

    );
}
export default ItemListContainer;


