import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = (props) => {
    return (
        <>
            <div className='item-list'>
                <hr />
                <h1>Products</h1>
                <ul> {
                    props.items.map(
                        item => <Item key={props.item.id} item={props.item} />
                    )
                }
                </ul>
            </div>
        </>
    )
};

export default ItemList;
