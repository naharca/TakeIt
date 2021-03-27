import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = (props) => {

    return (
        <>
            <div clasName='item-list'>

                <h1>Products</h1>
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
