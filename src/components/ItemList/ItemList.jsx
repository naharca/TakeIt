import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = (props) => {
    return (
        <>
            <div className='item-list'>
                <hr />
                <h1 className="products-section-title">PRODUCTS</h1>
                <ul> {
                    props.items.map(
                        item => <Item key={item.id} item={item} />
                    )
                }
                </ul>
            </div>
        </>
    )
};

export default ItemList;
