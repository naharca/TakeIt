import { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = ({ defaultValue = [], children }) =>{
    // Declaro el mismo estado que en clase declaramos en CoderApp.js, con su correspondiente importación
    const [cart, setCart] = useState(defaultValue);
    console.log(cart)
    // Porque vamos a declarar no uno sino cuatro HELPERS (Funciones de JS)
    const addItem = ( item, quantity ) =>{
        //Como lo vimos en clase (en el componente CounterContainer)
        setCart([
            ...cart, 
            { item, quantity }
        ]);
    };
    const removeItem = (itemId) => {
        // Acá podríamos hacer un filter...
        console.log(`Se ha quitado el producto con id ${itemId}`);
    };
    const clear = () => {
        // Aca limpiamos nuestro contexto tendriamos que volver a setear el valor por defecto.
        console.log('Se limpio el carrito. Ahora no hay productos.');
    };
    const isInCart = (id) =>{
        //Aca podríamos hacer un find en array, si lo encuentra se retorna true sino false
        console.log('Estamos buscando el producto')
    };
    // Ahora vamos a llamar nuestro context creado, CartContext, exactamente de igual manera que hicimos en CoderApp.js
    // y pasamos como valores del contexto la variable cart y los 4 helpers
    // También se están pasando los componentes hijos (childrens) que se heredan de las props
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart}} >
            { children }
        </CartContext.Provider>
    );
};
export default CartProvider;