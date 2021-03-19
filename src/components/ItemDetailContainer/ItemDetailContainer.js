import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productItems from '../../productItems.json';



const ItemDetailContainer = () => {
    const [item, setItem]= useState({})
    const [ product ] = productItems.filter( item => item.id === 'product-1' );

    useEffect(() => {
        
      


        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 2000);

        }).then((result) => setItem(result))
        

    }, [product]);

    return <ItemDetail item={ item } />

    

   

}

export default ItemDetailContainer;