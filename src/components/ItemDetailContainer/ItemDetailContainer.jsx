import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import productItems from '../../productItems.json';
import {getFirestore} from '../../firebase.js';


const ItemDetailContainer = () => {
    const [item, setItem]= useState({});
    let { id } = useParams();
    const [ product ] = productItems.filter( item => item.id === id );

    const getAll = () =>{
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((resp)=> {
            let response = resp.docs.map( doc => {
                console.log(doc.data())
                return doc.data();
            });
            console.log(response);

        })
    }
    getAll();



    useEffect(() => {
            new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 0.000);

        }).then((result) => setItem(result))
   }, [product, id]);

    return <ItemDetail item={ item } />
}

export default ItemDetailContainer;