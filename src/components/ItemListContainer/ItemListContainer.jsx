import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productItems from "../../productItems.json";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const getAll = () => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection.get().then((resp) => {
      let response = resp.docs
        .map((doc) => {
          console.log(doc.data());
          return { ...doc.data() };
        })
       
      setItems(itemsCollection);
    }) .catch((err)=>{
        console.error("Error: ", err);
      }).finally(() => {
        console.log('Loaded')
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  // useEffect(() => {
  //    new Promise((resolve, reject) =>{

  //         setTimeout(() =>{
  //             if (id) {
  //                 resolve (productItems.filter(prod => prod.Type === id));

  //             } else {
  //                 resolve (productItems);
  //             }
  //         }, 1000);
  //     }).then(resolve => {setItems(resolve)})
  // }, [id])

  return (
    <div className="container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
